---
id: version-2.18.0-productcard
title: ProductCard
sidebar_label: 9.2 ProductCard
original_id: productcard
---

Utilizado para a exposição de produtos.

## Exemplo

![productCard](assets/images_components/v2.0.0/productCard.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-productcard--basic)

<br>

```xml
<ProductCard
  productName="Samsung Smart TV 55 QLED 4K 55Q70T, Pontos Qu\u00e2nticos, HDR, Borda Infinita, Alexa built in, Modo Ambiente 3.0, Controle \u00danico, Visual Livre de Cabos"
  price={150.00}
  conditionPayment="5% cashback"
  productImage='https://images-americanas.b2w.io/produtos/01/00/img/1650696/9/1650696901P1.jpg'
  onClick={() => console.log('ProductCard test click')}
  cardOrientation={'vertical'}
  disabled={false}
/>
```

## Propriedades

### productName

- Type: String
- Opcional
- Suporta BBCode

Identifica e/ou descreve o produto.

### productNameProps

- Type: Object
- Opcional

Propriedades de estilo de título, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:

```jsx harmony
<ProductCard
  productName="Descrição do produto"
  productNameProps={{ fontSize: 'nano', color: 'neutralcolor-darkest' }}
/>
```

### productImage

- Type: String
- Opcional

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### price

- Type: Number
- Opcional

Descrição do preço.

### priceProps

- Type: Object
- Opcional

Propriedades de descrição do condição de pagamento, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:

```xml
<ProductCard  priceProps={{fontSize: "micro", color:"neutralcolor-darkest", fontweight: "bold"}}
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
<ProductCard  conditionPaymentProps={{fontSize: "nano", color:"pluscolor-primary-medium", fontweight: "bold"}}
/>
```

### onClick

- Type: Function
- Opcional

Recebe uma função para ser executada em um evento de toque sobre o ProductCard.

### cardOrientation

- Type: String
- Opcional

Define a orientação do ProductCard.

#### Valores Aceitos:

- `horizontal`
- `vertical`

### disabled

- Type: Boolean
- Opcional

Define se o ProductCard está ativo.

## Propriedades Adicionais

### Bordas

- `border`
- `borderRadius`
- `borderColor`

[Saiba mais sobre bordas](border.md)

### Cores

- `background`
- `borderColor`

[Saiba mais sobre cores](color.md)

### Espaçamentos

- `inset`
- `squish`

[Saiba mais sobre espaçamentos](space.md)

### Opacidade

- `semiopaque`
- `intense`
- `medium`
- `light`
- `transparent`

[Saiba mais sobre opacidade](opacity.md)

### visibilidade

- `hidden`
- `visible`

[Saiba mais sobre visibilidade](visibility.md)

## Outros exemplos

![productCard2](assets/images_components/v2.0.0/productCard2.png)

O ProductCard acima foi representado pelo código abaixo

```xml
<View>
<ProductCard
  productName="Samsung Smart TV 55 QLED 4K 55Q70T, Pontos Qu\u00e2nticos, HDR, Borda Infinita, Alexa built in, Modo Ambiente 3.0, Controle \u00danico, Visual Livre de Cabos"
  price={150.00}
  conditionPayment="5% cashback"
  productImage='https://images-americanas.b2w.io/produtos/01/00/img/1650696/9/1650696901P1.jpg'
  onClick={() => console.log('ProductCard test click')}
  cardOrientation={'horizontal'}
  disabled={false}
/>
</View>
```
