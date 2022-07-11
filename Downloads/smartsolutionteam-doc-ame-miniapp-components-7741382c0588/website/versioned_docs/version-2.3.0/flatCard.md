---
id: version-2.3.0-flatCard
title: FlatCard
sidebar_label: 9.3 FlatCard
original_id: flatCard
---

Utilizado para a descrição de preços dos produtos.

## Exemplo

![flatCard](assets/images_components/v2.0.0/flatCard.png)

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

### Size

Define o tipo de FlatCard a ser utilizado.

### Valores aceitos

* `size="lare" `
* `size="small"`

## FlatCard Large

### Price

Descrição do preço do produto.

### PriceProps

Propriedades de descrição do preço, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  priceProps={{fontSize: "xxs", color:"amecolor-primary-medium", fontWeigth:"bold"}}
/>
```

### ConditionPayment

Descrição da condição de pagamento.

### ConditionPaymentProps

Propriedades de descrição do condição de pagamento, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  conditionPaymentProps={{fontSize: "nano", color:"neutralcolor-darkest"}}
/>
```
### PaymentShape

Descrição da forma de pagamento.

### PaymentShapeProps

Propriedades de descrição do forma de pagamento, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  paymentshapeProps={{fontSize: "nano", color:"neutralcolor-darkest", , fontWeigth:"bold"}}
/>
```

### Button

Descrição do botão.

### ButtonProps

Propriedades de descrição do botão, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  buttonProps={{fontSize: "nano", color:"amecolor-primary-medium", , fontWeigth:"bold"}}
/>
```

### Disabled

Bloqueia o usuário de interagir com o FlatCard.

### OnClick

Recebe uma função para ser executada em um evento de toque sobre o FlatCard.

## FlatCard Small

### Price

Descrição do preço do produto.

### PriceProps

Propriedades de descrição do preço, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  priceProps={{fontSize: "xxs", color:"amecolor-primary-medium", fontWeigth:"bold"}}
/>
```

### ConditionPayment

Descrição da condição de pagamento.

### ConditionPaymentProps

Propriedades de descrição do condição de pagamento, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  conditionPaymentProps={{fontSize: "nano", color:"neutralcolor-darkest"}}
/>
```

### Rate

Descrição do juros pagamento.

### RateProps

Propriedades de descrição do juros, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:
```xml
<FlatCard  rateProps={{fontSize: "nano", color:"neutralcolor-dark"}}
/>
```

### Disabled

Bloqueia o usuário de interagir com o FlatCard.

### OnClick

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
