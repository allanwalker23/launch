---
id: version-1.4.4-componentPresentation
title: Componentes
sidebar_label: Apresentação
original_id: componentPresentation
---

Para realizar a produção de um mini-app, é necessário conhecer alguns componentes para 
montar as telas. Utilizando o mini-app boilerplate você poderá ver como eles são construídos.

A estrutura de pastas de um projeto é apresentada da seguinte forma:

![Estrutura de arquivos](assets/folder_structure.png)

## Pasta assets

A pasta assets é responsável por conter todas as imagens do mini-app. O uso de imagens é irrestrito e os formatos 
aceitos são: jpg, jpeg, png e gif.

## Pasta views

A pasta view contém todos os arquivos que constróem as telas do mini-app.<br>
É necessário existir dois arquivos para cada cena do mini-app, um arquivo com extensão js para moldar a lógica da página,
outro arquivo com extensão jsx para moldar os componentes.

## Pasta services

Esta pasta deve conter classes javascript que possam auxiliar na obtenção de dados, ou seja, acesso a API's externas,
consultas a dados de usuário, etc.

## Arquivo ame.conf.js

Este arquivo contém todas as configurações do mini-app.<br>
Seu conteúdo é autoexplicativo:
```javascript
module.exports = {

	// Nome do seu mini app
	name: "Meu mini-app",

	// Titulo do mini app, que vai em baixo do botao na pagina de transacoes
	title: "O melhor mini-app",

	// Identificador amigavel para colocar em uma url
	slug: "br.com.empresa.meuminiapp",

	// Versao do mini app
	version: "0.0.1",

	// Dados da sua empresa
	organization: {
		name: "Empresa"
	},

	// Chave para gerar a ordem/qrcode de pagamento (opcional)
	"public-key": "uias87891d2d2d2d232d3d2",

	// Versao dos componentes
	"ame-miniapp-components": "1.3.4",

	// Versao do SDK
	"ame-super-app-client": "1.0.1",
}
```

### Name

### Title

### Slug

### Version

### Organization

### Public Key

### Versão dos componentes

### Versão do SDK
