---
id: version-2.0.3-estrutura
title: Estrutura
sidebar_label: 1.1 Estrutura
original_id: estrutura
---

Para realizar a produção de um mini-app, é necessário conhecer alguns componentes para 
montar as telas. Utilizando o mini-app boilerplate você poderá ver como eles são construídos.

## Estrutura do projeto

A estrutura de pastas de um projeto é apresentada da seguinte forma:

![flatCard](assets/folder_structure.png)

### Pasta assets

A pasta assets é responsável por conter todas as imagens do mini-app. O uso de imagens é irrestrito e os formatos 
aceitos são: jpg, jpeg, png, gif e svg.

### Pasta views

A pasta views contém todos os arquivos que constróem as telas do mini-app.
É necessário existir dois arquivos para cada cena do mini-app, um arquivo com extensão js para configurar a lógica da página,
outro arquivo com extensão jsx para configurar a apresentação da tela.

### Pasta services

Esta pasta deve conter classes javascript que possam auxiliar na obtenção de dados, ou seja, acesso a API's externas,
consultas a dados de usuário, etc.

## Configurações do projeto

As configurações do seu projeto de mini-app podem ser alteradas através do arquivo ame.conf.js que encontra-se na raiz do projeto, segue o seu conteúdo abaixo:

```javascript
module.exports = {
    "name": "Meu minin-app", // Nome do seu mini-app
    "title": "Mini-app", // Título apresentado pelo app da AME
    "slug": "br.com.meu.miniapp", // Identificador único do mini-app
    "organization": {
        "name": "Minha empresa", // Nome da sua organização
        "owner": {
            "email": "seuemail@dominio.com.br" // Email do desenvolvedor
        }
    },
    "public-key": "62fe7e43-eaee-4976-839a-f8512f262d09", // Chave pública para pagamento
    "ame-super-app-client": "2.2.0", // Versão da API de desenvolvimento
    "ame-miniapp-components": "2.0.0", // Versão da biblioteca de componentes
    "version": "1.0.0" // Versão do seu mini-app
}
```

### Name

Utilize um nome bem bacana para seu mini-app, ele não será mostrado dentro do aplicativo da Ame, esse nome serve apenas para distinguir a aplicação.

### Title

Este valor define o que será escrito na barra superior do mini-app quando ele está sendo executado dentro do aplicativo principal. Procure utilizar nomes pequenos, geralmente com uma ou duas palavras.

### Slug

Este valor é um identificador interno e não deve ter colisão com nenhum nome de outro mini-app, caso contrário não será possível publicá-lo. Indicamos o uso de um domínio reverso para evitar colisões com outros nomes.

### Version

O valor desta configuração define a versão do mini-app. Este valor será utilizado no momento da publicação do mini-app. 

### Organization

Nesta parte você define valores da sua empresa de desenvolvimento, estes valores são importantes para definirmos acesso e para impedir que pessoas possam publicar mini-apps de outras empresas.

### Public Key

Aqui você adiciona o valor de uma chave cadastrada em nosso sitema, essa chave permite abrir a tela de pagamentos dentro do mini-app e serve para reconhecer o recebedor do pagamento.

### Versão dos componentes

Procure manter atualizada a versão da biblioteca de componentes, você pode ver mais informação sobre as versões [neste link](https://ame-miniapp-components.calindra.com.br/versions/)

### Versão da API

O mesmo vale para a versão da API utilizada, quanto mais atual, melhor a confiabilidade e mais métodos auxiliares estarão disponíveis para você, 
você pode ler informações sobre as versões da API [através deste link](https://super-app-client.calindra.com.br/versions/)
