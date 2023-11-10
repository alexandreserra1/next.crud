import { useState } from "react";
import Entrada from "./entrada";
import Cliente from "../../core/cliente";
import Botao from "./botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto='Código'
                    valor={id}
                    className="mb-5"

                />
            ) : null}
            <Entrada
                texto='Nome'
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada
                texto='Idade'
                tipo='number'
                valor={idade}
                valorMudou={setIdade}
            />
            <div className=' flex justify-end mt-6'>
                <Botao cor='blue' className="mr-2"
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade,id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}  className="mr-1">
                Cancelar
                </Botao>
            </div>
            
        </div>
    )
}
