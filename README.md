# Social-API

[![GitHub](https://img.shields.io/github/license/laurovitor/social-api.svg)](https://github.com/laurovitor/social-api/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/laurovitor/social-api.svg)
![](https://img.shields.io/github/last-commit/laurovitor/social-api.svg?color=red)
![](https://img.shields.io/github/languages/top/laurovitor/social-api.svg?color=yellow)
![](https://img.shields.io/github/languages/count/laurovitor/social-api.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/laurovitor/social-api.svg)
![](https://img.shields.io/github/repo-size/laurovitor/social-api.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

### Tecnologias:
- Node.js
- MongoDB
- Docker

## Índice

- [Desenvolvimento](#desenvolvimento)

  - [Configuração do Ambiente](#configuração-do-ambiente)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

- [APIs](#apis)

## Instalação e configuração

### Configuração do Ambiente

Clique [aqui](#configuração-de-ambiente) e siga `Configuração de Ambiente`.

### Instalação do Projeto

Clique [aqui](#instalação-do-projeto) e siga `Instalação do Projeto`.

### Execução do Projeto

Clique [aqui](#execução-do-projeto) e siga `Execução de Projeto`.

## APIs

- **Rotas**
  - Usuário
    - [Autenticação](#usuário-authenticação)
    - [Cadastro](#usuário-cadastro)
    - [Perfil](#usuário-perfil)
    - [Amigos](#usuário-amigos)
    - [Atualizar](#usuário-atualizar)
  - Notas
  - Marcadores
  - Galeria de fotos
  - Arquivo
  - Lixeira

# Documentação

## Instalação e configuração

### Configuração de Ambiente

> Documentação em desenvolvimento.

### Instalação do Projeto

> Documentação em desenvolvimento.

### Execução de Projeto

> Documentação em desenvolvimento.

## Rotas

### Usuário: Authenticação
> Link: `{URL}/v1/user/authenticate`
>
> Authenticação: **NÃO**
>
> Metodo: **POST**
>
> Parametros: **{email, password}**
>
> Retorno: **{token, error, msg}**
>
> Mensagens:
>  - Email não cadastrado.
>  - Senha inválida.
>  - Usuário bloqueado.

### Usuário: Cadastro
> Link: `{URL}/v1/user/register`
>
> Authenticação: **NÃO**
>
> Metodo: **POST**
>
> Parametros: **{email, password, passwordConfirmation, firstname, birthday}**
>
> Retorno: **{token, error, msg}**
>
> Mensagens:
>  - Informe um email válido.
>  - Email já cadastrado.
>  - Informe uma senha.
>  - A senha deve conter no mínimo de 8 caracteres.
>  - Confirmação de senha está diferente da senha informada.
>  - Informe um nome.
>  - Primeiro nome é obrigatório ter no minimo 3 caracteres.
>  - Informe uma data de nascimento.
>  - É preciso ter mais de 13 anos para se registrar.

### Usuário: Perfil
> Link: `{URL}/v1/user/:id?`
>
> Authenticação: **SIM**
>
> Metodo: **GET**
>
> Retorno: **{user, error, msg}**
>
> Mensagens:
>  - Usuário não encontrado.

### Usuário: Amigos
> Link: `{URL}/v1/user/:id/friends`
>
> Authenticação: **SIM**
>
> Metodo: **GET**
>
> Retorno: **{friends, error, msg}**
>
> Mensagens:
>  - Usuário não encontrado.
>  - Lista de amigos privada.

### Usuário: Atualizar
> Link: `{URL}/v1/user/:id`
>
> Authenticação: **SIM**
>
> Metodo: **PATCH**
>
> Parametros: **{firstname, lastname, birthday, photo, nickname, biography, contact:{[phone:{number, public[true/false], validated[true/false]}], [email:{email, public[true,false], validated[true/false]}]}}**
>
> Retorno: **{user, error, msg}**
>
> Mensagens:
>  - Usuário não encontrado.
>  - Informe um nome.
>  - Primeiro nome é obrigatório ter no minimo 3 caracteres.
>  - Informe um sobrenome.
>  - Informe uma data de nascimento.
>  - É preciso ter mais de 13 anos para se registrar.
>  - A foto deve conter um tamanho minimo de 300x300px.
>  - Apelido já esta em uso.
>  - Dados atualizados com sucesso.
>  - Foi enviado um email para a validação do endereço informado.
>  - Foi enviado um SMS para a validação do numero informado.
