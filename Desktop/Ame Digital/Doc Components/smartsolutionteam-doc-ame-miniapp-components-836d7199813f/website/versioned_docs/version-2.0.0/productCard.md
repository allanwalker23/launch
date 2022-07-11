---
id: version-2.0.0-productCard
title: ProductCard
sidebar_label: 9.2 ProductCard
original_id: productCard
---

Utilizado para a exposição de produtos.

## Exemplo

![productCard](assets/images_components/v2.0.0/productCard.png)

```xml
<ProductCard
  productName="Samsung Smart TV 55 QLED 4K 55Q70T, Pontos Qu\u00e2nticos, HDR, Borda Infinita, Alexa built in, Modo Ambiente 3.0, Controle \u00danico, Visual Livre de Cabos"
  price={150.00}
  conditionPayment="5% cashback"
  imageProduct='https://images-americanas.b2w.io/produtos/01/00/img/1650696/9/1650696901P1.jpg'
  onClick={() => console.log('ProductCard test click')}
  cardOrientation={'vertical'}
  disabled={false}
/>
```


## Propriedades

### ProductName

 Identifica e/ou descreve o produto.

### ImageProduct

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### Price

Descrição do preço.

### ConditionPayment

Descrição da condição de pagamento.

### OnClick

Recebe uma função para ser executada em um evento de toque sobre o ProductCard.

### Width

Define a largura da caixa onde ficará a imagem.
Caso você não defina, a caixa ficará com largura de 100%.

### Height

Define a altura da caixa onde ficará a imagem.
Caso você não defina, a caixa terá altura mínima de 20

### CardOrientation

Define a orientação do ProductCard.

#### Valores Aceitos:

* ``horizontal``
* ``vertical``

### Disabled

Define se o ProductCard está ativo.

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

### Direções e alinhamentos

* `direction`
* `align`
* `justify`

[Saiba mais sobre direções e alinhamentos](flex.md)

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

[Saiba mais sobre espaçamentos](opacity.md)

### visibilidade

* `hidden`
* `visible`

[Saiba mais sobre espaçamentos](visibility.md)

## Outros exemplos

![productCard2](assets/images_components/v2.0.0/productCard2.png)


O ProductCard  acima foi representado pelo código abaixo

```xml
<View>
<ProductCard
  productName="Samsung Smart TV 55 QLED 4K 55Q70T, Pontos Qu\u00e2nticos, HDR, Borda Infinita, Alexa built in, Modo Ambiente 3.0, Controle \u00danico, Visual Livre de Cabos"
  price={150.00}
  conditionPayment="5% cashback"
  imageProduct='https://images-americanas.b2w.io/produtos/01/00/img/1650696/9/1650696901P1.jpg'
  onClick={() => console.log('ProductCard test click')}
  cardOrientation={'horizontal'}
  disabled={false}
/>
</View>
```
