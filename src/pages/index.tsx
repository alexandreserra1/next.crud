import { useEffect, useState } from "react";
import Cliente from "../core/cliente";
import Botao from "./components/botao";
import Formulario from "./components/formulario";
import Layout from "./components/layout";
import Tabela from "./components/tabela";
import ClienteRepositorio from "../core/clienterepositorio";
import ColecaoCliente from "../../backend/db/colecaocliente";
import useClientes from "../hooks/useclientes";

export default function Home() {

  const { 
    cliente,
    clientes,
    selecionarCliente,
    salvarCliente,
    excluirCliente,
    tabelaVisivel,
    novoCliente,
    exibirTabela
   } = useClientes()


  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
            <Botao cor='green'  className="mb-4" 
            onClick={novoCliente}>
              Novo Cliente
              </Botao> 
            </div>
            <Tabela clientes={clientes} 
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}
            />
          </>
      ): (
        <Formulario cliente={cliente}
        clienteMudou={salvarCliente}
        cancelado={exibirTabela}

        />

        )}
        
        </Layout>
    </div>
  );
}
