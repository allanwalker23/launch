---
id: version-1.4.4-flexBox
title: FlexBox
sidebar_label: FlexBox
original_id: flexBox
---

Uma [**`View`**](view.md) que possui comportamentos semelhantes ao flexbox do HTML.

> [**`FlexBox`**]() estende o componente [View](view.md), herdando suas propriedades.

Exemplo:

```jsx harmony
<FlexBox>
  <Text>Flexbox</Text>
</FlexBox>
```

![FlexBox](assets/old_versions/flexbox.png)

## Parâmetros

### flex

Define como um item flexível aumentará ou diminuirá para caber no espaço disponível em seu contêiner flexível.

Aceita **Number** ou **String** como valor, exemplo: `flex={30}` ou `flex={'10%'}`

Exemplo:

```jsx harmony
<FlexBox flex={10}>
  <Text>Flex</Text>
</FlexBox>
```

### flexDirection

Define como os itens flexíveis são colocados no contêiner flexível, definindo o eixo principal e a direção (normal ou invertido).

Aceita somente **String** como valor, exemplo: `flexDirection={"row"}`

Exemplo:

```jsx harmony
<FlexBox flexDirection={'row'}>
  <Text>flexDirection</Text>
</FlexBox>
```

![FlexBox](assets/old_versions/flexboxRow.jpeg)

```jsx harmony
<FlexBox flexDirection={'column'}>
  <Text>flexDirection</Text>
</FlexBox>
```

![FlexBox](assets/old_versions/flexboxColumn.jpeg)

### flexBasis

Define o tamanho principal inicial de um item flexível. Ele define o tamanho da caixa de conteúdo.

Aceita **Number** ou **String** como valor, exemplo: `flexBasis={10}`ou `flexBasis={"auto"}`

Exemplo:

```jsx harmony
<FlexBox flexBasis={'auto'}>
  <Text>Flexbox</Text>
</FlexBox>
```

<br>

### flexWrap

Define se os itens flexíveis são forçados em uma linha ou podem ser agrupados em várias linhas. Se o agrupamento for permitido, ele define a direção em que as linhas são empilhadas.

Aceita **String** como valor, exemplo: `flexWrap={'wrap-reverse'}`

Exemplo:

```jsx harmony/flexBox_flexShrink 4.jpeg
<FlexBox flexWrap={'wrap-reverse'}>
  <Text>flexWrap</Text>
</FlexBox>
```

![FlexBox](assets/old_versions/flexBox-flexShrink_4.jpeg)

<br>

<br>

### order

Define a ordem de disposição de um item em um contêiner flexível ou de grade.

Aceita **Number** ou **String** como valor, exemplo: `order={2}` ou `order={"initial"}`

Exemplo:

```jsx harmony
<FlexBox order={2}>
  <Text>order</Text>
</FlexBox>
```

<br>

### justifyContent

Define como o navegador distribui espaço entre e ao redor de itens de conteúdo ao longo do eixo principal de um contêiner flexível e o eixo embutido de um contêiner de grade.

Aceita **String** como valor, exemplo: `justifyContent={"center"}`

Exemplo:

```jsx harmony
<FlexBox justifyContent={'center'}>
  <Text>Flexbox</Text>
</FlexBox>
```

<br>

```jsx harmony
<FlexBox justifyContent={'space-evenly'}>
  <Text>Flexbox</Text>
</FlexBox>
```

<br>

### alignContent

A propriedade alignContent alinha linhas flexíveis de containers dentro de um container quando há espaço extra em eixo transversal.

Aceita **String** como valor, exemplo: `alignContent={"center"}`

Exemplo:

```jsx harmony
<FlexBox alignContent={'center'}>
  <Text>Flexbox</Text>
</FlexBox>
```

<br>

### alignItems

Estabelece o valor alignSelf em todos filhos diretos como um grupo. A propriedade alignSelf estabelece o alinhamento de um certo item dentro do bloco que o contém.

Aceita **String** como valor, exemplo: `alignItems={"center"}`

Exemplo:

```jsx harmony
<FlexBox alignItems={'center'}>
  <Text>Flexbox</Text>
</FlexBox>
```

<br>

### alignSelf

Alinha itens-flex da linha flex alvo, sobreescrevendo o valor align-items.

Aceita **String** como valor, exemplo: `alignSelf={"stretch"}`

Exemplo:

```jsx harmony
<FlexBox alignSelf={'stretch'}>
  <Text>Flexbox</Text>
</FlexBox>
```

<br>

### placeContent

É uma abreviação para align-contentand justify-content. Pode ser usado em qualquer método de layout que utilize esses dois valores de alinhamento.

Aceita **String** como valor, exemplo: `placeContent={"end space-between"}`

Exemplo:

```jsx harmony
<FlexBox placeContent={'end space-between'}>
  <Text>Flexbox</Text>
</FlexBox>
```

<br>

<!--
### placeItems

Define as propriedades e , respectivamente. Se o segundo valor não estiver definido, o primeiro valor também será usado para ele.

Aceita **String** como valor, exemplo: ```placeItems={"start end"}```

Exemplo:

```jsx harmony
<FlexBox placeItems={"start end"}>
  <Text>Flexbox</Text>
</FlexBox>
```

<br>
 -->

<!-- ### rowGap

Define o tamanho da linha entre as linhas de grade de um elemento.

Aceita **Number** ou **String** como valor, exemplo: ```rowGap={20}``` ou ```rowGap={"unset"}```

Exemplo:

```jsx harmony
<FlexBox rowGap={20}>
  <Text>Flexbox</Text>
</FlexBox>
```



<!-- ### columnGap

Define o tamanho do espaço entre as colunas de um elemento.

Aceita **Number** ou **String** como valor, exemplo: ```columnGap={20}``` ou ```columnGap={"normal"}```

Exemplo:

```jsx harmony
<FlexBox columnGap={20}>
  <Text>Flexbox</Text>
</FlexBox>
```

-->

### gridGap

Define as lacunas entre linhas e colunas.

Aceita **Number** ou **String** como valor, exemplo: `gridGap={"10"}` ou `gridGap={"10%"}`

Exemplo:

```jsx harmony
<FlexBox gridGap={'20%'}>
  <Text>Flexbox</Text>
</FlexBox>
```
