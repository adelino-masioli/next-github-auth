# 🔐 NextAuth GitHub Authentication - Português 🇧🇷

Este projeto é uma aplicação NextJS com TypeScript que demonstra a implementação de autenticação usando NextAuth e GitHub OAuth. A aplicação possui quatro páginas principais: Home, Login, Projetos e Dashboard, com as duas últimas sendo páginas protegidas, acessíveis apenas após a autenticação.

## 🚀 Características

- NextJS com TypeScript
- Autenticação via NextAuth
- Integração com GitHub OAuth
- Páginas protegidas
- Design responsivo

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Conta GitHub para configuração OAuth

## 🛠️ Instalação

1. Clone o repositório:
   git clone https://github.com/adelino-masioli/next-github-auth.git

2. Navegue até o diretório do projeto:
   cd next-github-auth

3. Instale as dependências:
   npm install
   ou
   yarn install

4. Configure as variáveis de ambiente:

- Renomeie o arquivo `.env.example` para `.env`
- Edite o arquivo `.env` e atualize as seguintes variáveis:
  ```
  GITHUB_ID=seu_github_client_id
  GITHUB_SECRET=seu_github_client_secret
  NEXTAUTH_SECRET=uma_string_aleatoria_segura
  ```

5. Inicie o servidor de desenvolvimento:

npm run dev
ou
yarn dev

6. Acesse `http://localhost:3000` no seu navegador.

## 📁 Estrutura do Projeto

- `pages/`: Contém as páginas da aplicação
- `index.tsx`: Página inicial
- `login.tsx`: Página de login
- `projects.tsx`: Página de projetos (protegida)
- `dashboard.tsx`: Página de dashboard (protegida)
- `components/`: Componentes reutilizáveis
- `styles/`: Arquivos de estilo
- `utils/`: Funções utilitárias e hooks personalizados

## 🔒 Autenticação

A autenticação é gerenciada pelo NextAuth, utilizando o provedor GitHub. As páginas protegidas (`/projects` e `/dashboard`) só podem ser acessadas por usuários autenticados.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com ❤️ por Adelino Masioli

####

# 🔐 NextAuth GitHub Authentication - English 🇺🇸 🇬🇧

This project is a NextJS application with TypeScript that demonstrates the implementation of authentication using NextAuth and GitHub OAuth. The application has four main pages: Home, Login, Projects, and Dashboard, with the latter two being protected pages accessible only after authentication.

## 🚀 Features

- NextJS with TypeScript
- Authentication via NextAuth
- Integration with GitHub OAuth
- Protected pages
- Responsive design

## 📋 Prerequisites

- Node.js (version 18 or above)
- npm or yarn
- GitHub account for OAuth configuration

## 🛠️ Installation

1. Clone the repository:
   git clone https://github.com/adelino-masioli/next-github-auth.git

2. Navigate to the project directory:
   cd next-github-auth

3. Install the dependencies:
   npm install
   or
   yarn install

4. Configure the environment variables:

- Rename the file `.env.example` to `.env`
- Edit the `.env` file and update the following variables:
  ```
  GITHUB_ID=your_github_client_id
  GITHUB_SECRET=your_github_client_secret
  NEXTAUTH_SECRET=a_secure_random_string
  ```

5. Start the development server:
   npm run dev
   or
   yarn dev

6. Access `http://localhost:3000` in your browser.

## 📁 Project Structure

- `pages/`: Contains the application pages
- `index.tsx`: Home page
- `login.tsx`: Login page
- `projects.tsx`: Projects page (protected)
- `dashboard.tsx`: Dashboard page (protected)
- `components/`: Reusable components
- `styles/`: Style files
- `utils/`: Utility functions and custom hooks

## 🔒 Authentication

Authentication is managed by NextAuth, using the GitHub provider. The protected pages (`/projects` and `/dashboard`) can only be accessed by authenticated users.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Developed with ❤️ by Adelino Masioli
