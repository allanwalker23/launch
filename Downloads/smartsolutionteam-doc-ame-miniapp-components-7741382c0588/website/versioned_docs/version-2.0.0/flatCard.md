---
id: version-2.0.0-flatCard
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
cardType={'details'}
price={1000}
conditionPayment="em até 12x parcelas"
paymentshape="Jeitto"
/>
```


## Propriedades

### Price

Descrição do preço do produto.

### ConditionPayment

Descrição da condição de pagamento.

### OnClick

Recebe uma função para ser executada em um evento de toque sobre o FlatCard.

### CardType

Define o tipo de FlatCard a ser utilizado.

#### Valores aceitos

* `cardType="details" `
* `cardType="static"`

### PaymentShape

Descrição da forma de pagamento.


### Disabled

Bloqueia o usuário de interagir com o FlatCard.

## Outros exemplos

![flatCard](assets/images_components/v2.0.0/flatCard2.png)

O FlatCard  acima foi representado pelo código abaixo

```xml
<View>
<FlatCard
 disabled
 cardType={'details'}
 price={1000}
 conditionPayment={'em até 12x parcelas'}
 paymentshape={'Jeitto'}
/>
</View>
```
