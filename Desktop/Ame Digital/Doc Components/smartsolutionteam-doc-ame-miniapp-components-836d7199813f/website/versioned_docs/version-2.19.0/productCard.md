---
id: version-2.19.0-productcard
title: ProductCard
sidebar_label: 9.2 ProductCard
original_id: productcard
---

Utilizado para a exposição de produtos.

![productCard](assets/images_components/v2.0.0/productCard.png)

<br>

Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-productcard--basic)

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

| Propriedade           | Descrição                                                                                                          | Type     | Default               | Obrigatório |
|-----------------------|--------------------------------------------------------------------------------------------------------------------|----------|-----------------------|-------------|
| productName           | Identifica e/ou descreve o produto.                                                                                | String   | null                  | não         |
| productNameProps      | Propriedades de estilo de título, você atribui um objeto com o estilo que será utilizado dentro do título somente. | Object   | null                  | não         |
| productImage          | Endereço HTTPS da imagem ou endereço da imagem local usando require.                                               | String   | null                  | não         |
| price                 | Preço do produto.                                                                                                  | Number   | 0.0                   | não         |
| priceProps            | Objeto com o estilo que será utilizado dentro do price somente.                                                    | Object   | null                  | não         |
| conditionPayment      | Descrição da condição de pagamento.                                                                                | String   | null                  | não         |
| conditionPaymentProps | Objeto com o estilo que será utilizado dentro do conditionPayment somente.                                         | Object   | null                  | não         |
| onClick               | Recebe uma função para ser executada em um evento de toque sobre o ProductCard.                                    | Function | null                  | não         |
| cardOrientation       | Define a orientação do ProductCard.                                                                                | String   | horizontal            | não         |
| disabled              | Define se o ProductCard está ativo.                                                                                | Boolean  | false                 | não         |
| border                | Adiciona uma borda no ProductCard, [veja os valores](border.md)                                                    | String   | hairline              | não         |
| borderRadius          | Define o arredondamento da borda, [veja os valores](border.md)                                                     | String   | sm                    | não         |
| borderColor           | Define qual será a cor da borda, [veja os valores](color.md)                                                       | String   | neutralcolor-medium   | não         |
| background            | Adiciona uma cor de fundo, [veja os valores](color.md)                                                             | String   | neutralcolor-lightest | não         |
| opacity               | Define a opacidade do ProductCard, [veja os valores](opacity.md)                                                   | String   | null                  | não         |
| visibility            | Define quando o componente fica visível ou invisível.  [veja os valores](visibility.md)                            | String   | visible               | não         |
| inset                 | Adiciona espaçamentos,  [veja os valores](visibility.md)                                                           | String   | null                  | não         |
| squish                | Adiciona espaçamentos,  [veja os valores](visibility.md)                                                           | String   | null                  | não         |
## Exemplos

Abaixo, alguns exemplos usando o ProductCard:

![productCard2](assets/images_components/v2.0.0/productCard2.png)

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
--- 
![productCard2](assets/images_components/v2.19.0/productCard_ex2.png)

```xml
<View width='50%'>
  <ProductCard
    productName='Samsung Smart TV 55 QLED 4K 55Q70T, Pontos Qu\u00e2nticos, HDR, Borda Infinita, Alexa built in, Modo Ambiente 3.0, Controle \u00danico, Visual Livre de Cabos'
    productNameProps={{
      fontSize: 'micro',
      color: 'amecolor-primary-dark',
    }}
    price={150.0}
    priceProps={{
      fontSize: 'sm',
      color: 'amecolor-primary-light',
      fontweight: 'bold',
    }}
    conditionPayment='5% cashback'
    conditionPaymentProps={{
      fontSize: 'micro',
      color: 'amecolor-primary-medium',
      fontweight: 'bold',
    }}
    productImage='https://images-americanas.b2w.io/produtos/01/00/img/1650696/9/1650696901P1.jpg'
    onClick={() => console.log('ProductCard test click')}
    cardOrientation={'vertical'}
    borderColor='amecolor-primary-light'
  />
</View>
```
