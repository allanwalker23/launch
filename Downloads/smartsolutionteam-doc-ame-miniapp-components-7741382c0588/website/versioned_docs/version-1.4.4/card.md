---
id: version-1.4.4-card
title: Card
sidebar_label: Card
original_id: card
---

Usado como um frame para outros elementos. Ele possui uma margem padrão que pode ser alterada.
Funciona de maneira semelhante ao componente [View](view.md), mas já possui margem por padrão e pode aceitar bordas, sombras e outras coisas.


>  [**`Card`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

Exemplo:

```jsx harmony
<Card>
  <Text>Este é um Card</Text>
</Card>

``` 

![Card](assets/old_versions/card1.png)

### shadow 

É utilizado para adicionar efeitos de sombra em volta de um elemento ou Glow componente. 

Aceita apenas **Boolean** como valor, exemplo: ```shadow```, ```shadow={true}``` ou ```shadow={false}```.

Exemplo:

```jsx harmony
<Card shadow>
  <Text>Este é um Card</Text>
</Card>
```
<br>

### backgroundColor

Aplica uma cor de fundo.

Aceita apenas **String** como valor, exemplo: ```backgroundColor={"#ea4f5a"}```

Exemplo:

```jsx harmony
<Card backgroundColor={"#ffffff"}>
  <Text>Este é um Card</Text>
</Card>
```
<br>

### color

Aplica uma cor ao texto.

Aceita apenas **String** como valor, exemplo: ```color={"#ffffff"}```

Exemplo:

```jsx harmony
<Card color={"#ffffff"}>
  <Text>Este é um Card</Text>
</Card>
```

### height 

Altera a largura do card.  

Aceita **Number** ou **String** como valor, exemplo: ```heigth={200}``` ou ```height={"100%"}```

Exemplo:
```jsx harmony
<Card heigth={"100%"}>
  <Text>Este é um Card</Text>
</Card>
```

<br>

### bordered

Adiciona borda padrão com os valores ```borderWidth={1}```,``` borderStyle={"solid"}``` e ```borderColor={StyleResolver.getBorderColor()}```.
As propriedades [```borderWidth```](#borderwidth),[``` borderStyle```](#borderstyle) e [```borderColor```](#bordercolor) são ignoradas automaticamente caso o valor de ```bordered``` seja verdadeiro.

Aceita **Boolean** como valor, exemplo: ```bordered```, ```bordered={true}``` ou ```bordered={false}```

Exemplo:

```jsx harmony
<Card bordered>
  <Text>Este é um Card</Text>
</Card> 
```

<br>

### borderRadius 

Arredonda os cantos da borda da borda externa de um elemento.

Aceita **Number** ou **String** como valor, exemplo: ```borderRadius={15}``` ou ```borderRadius={"10%"}```

Exemplo:

```jsx harmony
<Card borderRadius={15}>
  <Text>Este é um Card com todas as propriedades de borda color, style e width alteradas.</Text>
</Card> 
```

<br>

### borderWidth  

Define a espessura da borda

Aceita **Number** ou **String** como valor, exemplo: ```borderWidth={15}``` ou ```borderWidth={"10%"} ```

Exemplo:

```jsx harmony
<Card 
    borderStyle={"solid"}
    borderColor={"green"}
    borderWidth={30}
    height={50}>
  <Text>Este é um Card</Text>
</Card> 
```

<br>

### borderColor

Altera a cor da borda.

Aceita **String** como valor, exemplo: ```borderColor={"yellow"}```

Exemplo:

```jsx harmony
<Card borderColor={"yellow"}>
  <Text>Este é um Card</Text>
</Card> 
```

<br>

### borderStyle 

Altera o estilo da borda.

Aceita **String** como valor, exemplo: ```borderStyle={"dotted"}```

Exemplo:

```jsx harmony
<Card borderStyle={"dotted"}>
  <Text>Este é um Card</Text>
</Card> 
```
