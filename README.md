# Simple serverless example

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

My simple serverless framework example project.
[Serverless Framework](https://www.serverless.com/) is a framework that allow us to improve development of serverless cloud applications.

### [Serverless Framework Advantages](https://www.serverless.com/framework/docs)

- **Empowering** - Build more and manage less with serverless architectures.
- **Many Use-Cases** - Choose from tons of efficient serverless use-cases (APIs, Scheduled Tasks, Event Handlers, Streaming Data Pipelines, Web Sockets & more).
- **Automated** - Deploys both code and infrastructure together, resulting in out-of-the-box serverless apps.
- **Easy** - Enjoy simple syntax to safely deploy deploy AWS Lambda functions, event sources and more without being a cloud expert.
- **Multi-Language** - Supports Node.js, Python, Java, Go, C#, Ruby, Swift, Kotlin, PHP, Scala, & F#
- **Full Lifecycle** - Manages the lifecycle of your serverless architecture (build, deploy, update, monitor, troubleshoot).
- **Multi-Domains** - Group domains into Serverless Services for easy management of code, resources & processes, across large projects & teams.
- **Multi-Environments** - Built-in support for multiple stages (e.g. development, staging, production).
- **Guardrails** - Loaded with automation, optimization and best practices.
- **Extensible** - Extend or modify the Framework and its operations via Plugins.
- **Plugin Ecosystem** - Extend or modify the Framework and its operations via Plugins.
- **Welcoming** - A passionate and welcoming community!

## Authors

- [@lucsimao](https://www.github.com/lucsimao)

# Summary

- [Requirements](#Requirements)
- [Installation](#Installation)
- [Test](#Test)
- [Techs](#Techs)
- [References](#References)

# Installation

To install this project, run the following commands:

```
$ git clone https://github.com/lucsimao/simple-typescript-server
```

- For npm users

```
  $ npm install
  $ npm start
```

- For yarn users:

```
$ yarn install
$ yarn start
```

# Test

To execute this project tests, you must run the following commands:

- **Unit Tests**

  ```
  $ npm run test:unit
  ```

  or

  ```
  $ yarn test:unit
  ```

- **Functional Tests**

```
$ npm run test:functional
```

```
$ yarn test:functional
```

- **Lint**

```
$ npm run lint
```

or

```
$ yarn lint
```

- **Style Check**

  ```
  npm run style:check
  npm run style:fix
  or
  yarn style:check
  yarn style:fix
  ```

- **All Tests**
  ```
  npm test
  ```
  or
  ```
  yarn test
  ```

# Techs

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Amazon Aws](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

In this project, we used the following technologies:

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)- Text editor with following plugins installed: [DotENV](https://github.com/mikestead/vscode-dotenv), [ESLint](https://github.com/Microsoft/vscode-eslint), [GitLens](https://github.com/eamodio/vscode-gitlens) e [vscode-icons](https://github.com/vscode-icons/vscode-icons).
- [Jest](https://jestjs.io/) - Javascript Test Framework.
- [ESLint](https://github.com/eslint/eslint) - ESLint to padronize the project code.
- [Prettier](https://prettier.io/) - To format code automatically.
- [Stryker](https://stryker-mutator.io/docs/General/dashboard/) - To run mutation tests in project and use mutation badges.

# References

- [Waldemar Neto - DO ZERO A PRODUÇÃO: APRENDA A CONSTRUIR UMA API NODE.JS COM TYPESCRIPT ](https://github.com/waldemarnt/node-typescript-api)
- [@brunohafonso95](https://github.com/brunohafonso95)
- [Glaucia Lemos - Curso Typescript Zero To Hero](https://github.com/glaucia86/curso-typescript-zero-to-hero)
- [Alura - Formação Node JS](https://cursos.alura.com.br/formacao-node-js-12)
- [NodeJS Integration Test Best Practices](https://github.com/testjavascript/nodejs-integration-tests-best-practices)
- [NodeJS Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Javascript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Serverless](https://www.serverless.com/)
- [Descomplicando AWS](https://www.linuxtips.io/course/descomplicando-aws)
