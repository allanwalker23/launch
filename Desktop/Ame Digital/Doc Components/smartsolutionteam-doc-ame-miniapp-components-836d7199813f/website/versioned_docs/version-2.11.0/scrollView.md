---
id: version-2.11.0-scrollView
title: ScrollView
sidebar_label: 7.5 ScrollView
original_id: scrollView
---

Use o componente ScrollView para mostrar o conteúdo quando for maior que a tela ou a área interna.
Você pode definir um atributo de direção de rolagem (vertical ou horizontal).

> O componente [**`ScrollView`**]() depende que o seu elemento pai possua altura definida, de forma que ele possa ajustar o conteúdo na tela. Caso o elemento pai não possua altura definida, o comportamento padrão do [**`ScrollView`**]() exibirá todo o conteúdo.

Exemplo:

```jsx harmony
<ScrollView>
  <Image source={'https://picsum.photos/seed/1/420/270'} />
  <Image source={'https://picsum.photos/seed/2/420/270'} />
  <Image source={'https://picsum.photos/seed/3/420/270'} />
  <Image source={'https://picsum.photos/seed/4/420/270'} />
  <Image source={'https://picsum.photos/seed/5/420/270'} />
</ScrollView>
```

<br>

![ScrollView](assets/images_components/v2.0.0/scrollView.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-scrollview--basic)

<br>

### horizontal

- Type: Boolean
- Opcional

Altera a disposição da View para horizontal. O padrão é vertical.

Aceita **Boolean** como valor, exemplo: `horizontal`

Exemplo:

```jsx harmony
<ScrollView horizontal>
  <Image source={'https://picsum.photos/seed/4/420/270'} />
  <Image source={'https://picsum.photos/seed/5/420/270'} />
</ScrollView>
```

<br>

### snap

- Type: Boolean
- Opcional

O atributo introduz posições de snap de rolagem,move o conteúdo por sua totalidade.

Aceita **Boolean** como valor, exemplo: `snap`

Exemplo:

```jsx harmony
<ScrollView snap>
  <Image source={'https://picsum.photos/seed/4/420/270'} />
  <Image source={'https://picsum.photos/seed/5/420/270'} />
</ScrollView>
```

### hideScroll

- Type: Boolean
- Opcional

Esconde a barra de scroll.

Aceita **Boolean** como valor, exemplo: `hideScroll`

Exemplo:

```jsx harmony
<ScrollView hideScroll>
  <Image source={'https://picsum.photos/seed/4/420/270'} />
  <Image source={'https://picsum.photos/seed/5/420/270'} />
</ScrollView>
```

### itemsWidth

- Type: String or Number
- Opcional

Largura dos itens dentro do scrollview, valor único.

Aceita **Number** ou **String**
como valor, exemplo: `itemsWidth={10}` ou `itemsWidth={"50%"}`

Exemplo:

```jsx harmony
<ScrollView itemsWidth={10}>
  <Image source={'https://picsum.photos/seed/4/420/270'} />
  <Image source={'https://picsum.photos/seed/5/420/270'} />
</ScrollView>
```

### scrollTo

- Type: Number
- Opcional

Realiza Scroll até o elemento da lista. Tendo a lista 10 elementos e `scrollTo` com valor 4, o scroll será realizado até o item 4 da lista.

Aceita somente **Number** como valor, exemplo: `scrollTo={5}`

Exemplo:

```jsx harmony
<ScrollView scrollTo={2}>
  <Image source={'https://picsum.photos/seed/4/420/270'} />
  <Image source={'https://picsum.photos/seed/5/420/270'} />
  <Image source={'https://picsum.photos/seed/5/420/270'} />
</ScrollView>
```