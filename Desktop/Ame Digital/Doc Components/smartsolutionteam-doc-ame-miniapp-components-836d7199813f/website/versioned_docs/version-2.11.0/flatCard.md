---
id: version-2.11.0-flatCard
title: FlatCard
sidebar_label: 9.3 FlatCard
original_id: flatCard
---

Utilizado para a descrição de preços dos produtos.

## Exemplo

![flatCard](assets/images_components/v2.0.0/flatCard.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-flatcard--small)

<br>

## Utilização

```jsx
<FlatCard
onClick={() => console.log('FlatCard')}
size={'large'}
price={100000}
conditionPayment="em até 12x parcelas"
paymentshape="Jeitto"
/>
```


## Propriedades

### size

- Type: String
- Opcional

Define o tipo de FlatCard a ser utilizado.

### Valores aceitos

* `size="lare" `
* `size="small"`

## FlatCard Large

### price

- Type: Number
- Opcional
- Suporta BBCode

Descrição do preço do produto.

### priceProps

- Type: Object
- Opcional

Propriedades de descrição do preço, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  priceProps={{fontSize: "xxs", color:"amecolor-primary-medium", fontWeigth:"bold"}}
/>
```

### conditionPayment

- Type: String
- Opcional
- Suporta BBCode

Descrição da condição de pagamento.

### conditionPaymentProps

- Type: Object
- Opcional

Propriedades de descrição do condição de pagamento, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  conditionPaymentProps={{fontSize: "nano", color:"neutralcolor-darkest"}}
/>
```
### paymentShape

- Type: String
- Opcional
- Suporta BBCode

Descrição da forma de pagamento.

### paymentShapeProps

- Type: Object
- Opcional

Propriedades de descrição do forma de pagamento, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  paymentshapeProps={{fontSize: "nano", color:"neutralcolor-darkest", , fontWeigth:"bold"}}
/>
```

### button

- Type: String
- Opcional
- Suporta BBCode

Descrição do botão.

### buttonProps

- Type: Object
- Opcional

Propriedades de descrição do botão, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  buttonProps={{fontSize: "nano", color:"amecolor-primary-medium", , fontWeigth:"bold"}}
/>
```

### disabled

- Type: Boolean
- Opcional

Bloqueia o usuário de interagir com o FlatCard.

### onClick

- Type: Function
- Opcional

Recebe uma função para ser executada em um evento de toque sobre o FlatCard.

## FlatCard Small

### price

- Type: String
- Opcional
- Suporta BBCode

Descrição do preço do produto.

### priceProps

- Type: Object
- Opcional

Propriedades de descrição do preço, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  priceProps={{fontSize: "xxs", color:"amecolor-primary-medium", fontWeigth:"bold"}}
/>
```

### conditionPayment

- Type: String
- Opcional
- Suporta BBCode

Descrição da condição de pagamento.

### conditionPaymentProps

- Type: Object
- Opcional

Propriedades de descrição do condição de pagamento, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  conditionPaymentProps={{fontSize: "nano", color:"neutralcolor-darkest"}}
/>
```

### rate

- Type: String
- Opcional
- Suporta BBCode

Descrição do juros pagamento.

### rateProps

- Type: Object
- Opcional

Propriedades de descrição do juros, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  rateProps={{fontSize: "nano", color:"neutralcolor-dark"}}
/>
```

### disabled

- Type: Boolean
- Opcional

Bloqueia o usuário de interagir com o FlatCard.

### onClick

- Type: Function
- Opcional

Recebe uma função para ser executada em um evento de toque sobre o FlatCard.

## Propriedades Adicionais

### Bordas

* `border`
* `borderRadius`
* `borderColor`

[Saiba mais sobre bordas](border.md)

### Cores

* `background`
* `borderColor`

[Saiba mais sobre cores](color.md)

### Espaçamentos

* `inset`
* `squish`

[Saiba mais sobre espaçamentos](space.md)

### Opacidade

* ``semiopaque``
* ``intense``
* ``medium``
* `light`
* `transparent`

[Saiba mais sobre opacidade](opacity.md)

### visibilidade

* `hidden`
* `visible`

[Saiba mais sobre visibilidade](visibility.md)

## Outros exemplos

![flatCard](assets/images_components/v2.0.0/flatCard2.png)

O FlatCard  acima foi representado pelo código abaixo

```xml
<View>
<FlatCard
size={'small'}
price={100000}
conditionPayment={'em até 12x parcelas'}
rate={'Juros: 4,8%'}
/>
</View>
```
