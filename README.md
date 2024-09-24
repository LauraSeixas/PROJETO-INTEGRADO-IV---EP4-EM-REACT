# PROJETO-INTEGRADO-IV---EP4

Este é o README do Projeto Integrado IV, onde desenvolvemos a aplicação MindDoc+. O MindDoc+ permite que os usuários encontrem médicos, marquem consultas e gerenciem seu histórico médico de maneira eficiente. O projeto utiliza tecnologias modernas como React Native para o frontend, Node.js com Express.js para o backend, e integra APIs internas e externas para fornecer informações sobre médicos e gerenciar a autenticação de usuários.

## Configuração do Ambiente
Antes de iniciar o projeto, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode baixá-los e instalá-los a partir do [site oficial do Node.js](https://nodejs.org/).

## Pré-requisitos
Node.js: Baixar Node.js
VSCode: O editor de código usado para desenvolver o projeto. Baixar Visual Studio Code

### 1. Clonando o Repositório
Clone este repositório em sua máquina local para começar:

```bash
git clone https://github.com/LauraSeixas/PROJETO-INTEGRADO-IV---EP4
```

### 2. Instalando as Dependências
Navegue até o diretório do projeto e execute o seguinte comando no terminal do VSCode para instalar as dependências listadas no arquivo package.json:

```bash
npm install
```

Isso instalará todas as dependências necessárias para o projeto, como react-native, axios para chamadas de API e outras bibliotecas necessárias.

### 3. Iniciando o Servidor Backend
Navegue até o diretório do backend no VSCode e inicie o servidor com o seguinte comando:

```bash
npm start
```

Este comando iniciará o servidor Node.js que servirá a API da aplicação.

### 4. Iniciando o Projeto Mobile
Para rodar o aplicativo mobile, navegue até o diretório do projeto e execute o comando no terminal integrado do VSCode:

```bash
npx react-native run-android
```
ou, para iOS:

```bash
npx react-native run-ios
```

### >>>>>AJUSTAR<<<<< 5. Acessando a Aplicação
Uma vez que o servidor estiver rodando e o projeto mobile iniciado, você poderá acessar o aplicativo em um emulador 

## Funcionalidades Principais
Autenticação de Usuários: O sistema permite login e registro de usuários utilizando a API de autenticação.
Busca de Médicos: Os usuários podem buscar médicos disponíveis e visualizar informações como especialidade, localização e avaliações.
Agendamento de Consultas: Através do app, é possível marcar consultas com médicos disponíveis.
Gerenciamento de Histórico: O sistema oferece uma forma de gerenciar o histórico médico do usuário, permitindo acessar consultas anteriores.

## Tecnologias Utilizadas
Frontend: React Native
Backend: Node.js + Express.js
APIs:APIs internas para gerenciamento de usuários, médicos e agendamentos.
Autenticação: Sistema de autenticação com controle de sessão
