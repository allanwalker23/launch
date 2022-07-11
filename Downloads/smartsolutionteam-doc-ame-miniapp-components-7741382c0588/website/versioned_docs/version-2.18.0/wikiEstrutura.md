---
id: version-2.18.0-wikiEstrutura
title: Estrutura do Projeto
sidebar_label: Estrutura
original_id: wikiEstrutura
---

Nesse documento vamos mostrar como está a estrutura de diretórios e a nomenclatura para os arquivos.

```
library/
  src/
    assets/
      images
      styles
    components/
    stories
    superComponents
    types
    utilities
examples
  cypress
  public
  src/
    assets/
      images
    components
    context
    pages
```
Os nomes dos diretórios são em camelCase e tanto os arquivos quanto os próprios diretórios possuem nomes em inglês.

## library
Esse é o diretório da biblioteca em si, aqui é onde toda a diversão acontece. Dentro de src estão os arquivos que serão compilados para subir no npm, na raíz de library são os arquivos de configuração como o package, rollup, eslint, prettier e outros.

Abaixo vamos entrar em mais detalhes dentro de cada diretório que faz parte da library

### assets
Aqui temos o diretório de images, onde ficam todas as imagens e ícones que fazem parte da biblioteca. No caso de ícones, precisamos sempre levar em consideração se não existe esse ícone na cdn de ícones.

No diretório styles, estão os estilos mais globais, tokens de tamanho e cor além das variáveis. Aqui os nomes dos arquivos são camelCase acompanhados da extensão scss.

Para os styles, temos um arquivo chamado main.scss onde ficam os resets e também importação dos outros estilos, lembrando que arquivos de variáveis como o variables.scss não devem ser importados aqui e sim nos estilos em que serão usados

### components
Nesse diretório inserimos os componentes que chamamos de base, são componentes que utilizam html puro e pode ser misturado com outros componentes base como Text, View, Touchable e etc. Esses componentes servem de base para criarmos os superComponents.

Cada component tem a sua pasta, seguindo a nomenclatura com PascalCase, e dentro deve seguir a seguinte estrutura:

```
ComponentName/
  index.tsx
  styles.scss
  types.ts
  stories.tsx/mdx
```

### stories
Aqui ficam os arquivos que serão usados para compor o storybook porém não fazem parte dos componentes em si, a introdução é um exemplo.

A nomenclatura deve ser:

name.stories.mdx

### superComponents
Nessa pasta serão inseridos os superComponents, que são aqueles que não utilizam nada de html puro. Os superComponents são sempre formados por components e a estrutura de arquivos é a mesma dos components, porém não temos o styles.

```
SuperComponentName/
  index.tsx
  types.ts
  stories.tsx/mdx
```

### types
Nesse diretório estão os arquivos de tipos globais, a grande maioria são propriedades dos estilos globais presente no assets/styles, se esse for o caso, precisa ter o mesmo nome do arquivo .scss mas com nomenclatura em PascalCase seguido de .types, exemplo:

```
TypeName.types.ts
```
Nesse diretório temos um arquivo index.ts do qual exporta todos os tipos, assim fica mais fácil a importação deles nos components e superComponents.

### utilities

Aqui estão as funções javascript gerais que podem ser reutilizadas em qualquer component, como geradores de id, formatadores de preço entre outros.

Os arquivos terão a nomenclatura em PascalCase com extensão .js ou .ts, exemplo:

NomeUtil.js

## examples
Em examples, temos um projeto react para testes e conseguirmos visualizar o que estamos desenvolvendo. Não entraremos em todos os detalhes aqui por se tratar de um projeto interno apenas para exemplo.

Dentro de src/pages estão as páginas dos exemplos, com nomenclatura em PascalCase começando com o nome do component seguido de Example.

```
ComponentNameExample.js
```

Os arquivos são em .js porque não utilizamos typescript nos exemplos.

No arquivos index.js estão os exports de todas as páginas, isso facilita a importação onde usamos esses exemplos.
