# Projeto de Cadastro Simples

Este é um projeto de cadastro simples desenvolvido em React, utilizando Firebase como banco de dados.

## Como Usar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:

   ```bash
   git clone https://github.com/alexandreserra1/next.crud.git
   cd next.crud

npm install

Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:

NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id

Substitua your-api-key, your-auth-domain, e your-project-id pelos valores correspondentes do seu projeto Firebase.

Execute o projeto: npm run dev

    Acesse http://localhost:3000 no seu navegador.

Funcionalidades

    Cadastro de Clientes: Adicione, edite e exclua clientes.
    Interface Intuitiva: Layout simples e fácil de usar.

Tecnologias Utilizadas

    React
    Firebase
    Tailwind CSS

Estrutura do Projeto

    src/: Contém o código-fonte da aplicação.
        components/: Componentes reutilizáveis.
        core/: Lógica de negócios e modelos.
        hooks/: Hooks personalizados.
        pages/: Páginas da aplicação.
    backend/: Lógica de acesso a dados (Firebase, por exemplo).

Sinta-se à vontade para contribuir com melhorias. Abra uma issue ou envie um pull request.
