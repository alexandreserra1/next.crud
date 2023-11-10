import { useEffect, useState } from "react";
import Cliente from "../core/cliente";
import ClienteRepositorio from "../core/clienterepositorio";
import ColecaoCliente from "../../backend/db/colecaocliente";
import useTabelaOuForm from "./usetabelaouform";

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente();
    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm();

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        obterTodos();
    }, []);
    
    async function obterTodos() {
        const clientes = await repo.obterTodos();
        setClientes(clientes);
        exibirTabela();
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos();
    }

    function novoCliente() {
        setCliente(Cliente.vazio());
        exibirFormulario();
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
    }

    return {
        tabelaVisivel,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        exibirTabela,
    };
}
