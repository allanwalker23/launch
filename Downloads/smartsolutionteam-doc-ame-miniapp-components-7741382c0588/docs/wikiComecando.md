---
id: wikiComecando
title: Começando
sidebar_label: Começando
---

Nesse documento mostraremos as configurações básicas para iniciar o projeto.

A primeira coisa que precisamos após clonar o repositório no seu local é instalar as dependência da aplicação. Utilizamos o [yarn](https://www.npmjs.com/package/yarn) então por esse motivo, não instale utilizando o npm para não criar o arquivo lock errado.

Utilizaremos um terminal para isso, então rode em seu terminal

```
cd library && yarn
```

Com isso as dependências que utilizamos no projeto serão instaladas. Agora precisamos fazer o mesmo com em examples.

```
cd ../examples && yarn
```

obs. Esse comando leva em consideração que você ainda está na pasta library.

Depois de instalado já podemos iniciar o projeto, o ideal é abrir duas abas do terminal, se você estiver no vsCode tem como abrir um terminal ao lado do outro, com o terminal do editor aberto aperte ctrl+shift+5

No primeiro terminal iremos rodar a library, para isso dentro do diretório library use:

```
yarn start
```

Ele entrará em modo watch, esperando modificações para recompilar usando o rollup, para conseguirmos visualizar os componentes precisamos dar start no projeto examples, para isso dentro de examples no diretório raiz, faremos o mesmo que em library rodando:

```
yarn start
```

Agora o examples vai carregar dentro do seu navegador padrão e recarregará cada vez que algum arquivo for trocado dentro de library ou mesmo dentro examples.
