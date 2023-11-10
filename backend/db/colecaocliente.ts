// ColecaoCliente.ts
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    DocumentData,
    QueryDocumentSnapshot,
    QuerySnapshot,
    DocumentReference,
    doc,
    getDocs,
    deleteDoc, // Adicione essa importação para corrigir o problema com 'deleteDoc'
    setDoc, // Adicione essa importação para corrigir o problema com 'setDoc'
  } from 'firebase/firestore/lite';
  import Cliente from "../../src/core/cliente";
  import ClienteRepositorio from "../../src/core/clienterepositorio";
  import { initializeApp } from 'firebase/app';
  import 'firebase/firestore/lite';
  
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  };
  
  // Inicializa o Firebase
  const app = initializeApp(firebaseConfig);
  
  export default class ColecaoCliente implements ClienteRepositorio {
    private db = getFirestore(app);
  
    #conversor = {
      toFirestore(cliente: Cliente) {
        return {
          nome: cliente.nome,
          idade: cliente.idade,
        };
      },
      fromFirestore(snapshot: DocumentData) {
        const dados = snapshot?.data();
        return new Cliente(dados?.nome, dados?.idade, snapshot.id);
        // Adapte conforme necessário para converter o snapshot em um objeto Cliente
      },
    };
  
    async salvar(cliente: Cliente): Promise<Cliente> {
      if (cliente?.id) {
        const docRef = doc(this.colecao(), cliente.id);
        await setDoc(docRef, cliente); // Corrija para 'setDoc'
        return cliente;
      } else {
        const docRef = await addDoc(this.colecao(), cliente);
        const snapshot = await getDoc(docRef) as QueryDocumentSnapshot<Cliente>;
        return snapshot?.data() as Cliente;
      }
    }
  
    async excluir(cliente: Cliente): Promise<void> {
      await deleteDoc(doc(this.colecao(), cliente.id)); // Corrija para 'deleteDoc'
      // Implemente a lógica para excluir um cliente
    }
  
    async obterTodos(): Promise<Cliente[]> {
      const query = await getDocs(this.colecao()) as QuerySnapshot<Cliente>;
      // Implemente a lógica para obter todos os clientes
      return query.docs.map(doc => doc.data());
    }
  
    private colecao() {
      return collection(this.db, 'clientes').withConverter(this.#conversor);
    }
  }
  