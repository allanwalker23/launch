---
id: version-1.4.4-productCard
title: ProductCard
sidebar_label: ProductCard
original_id: productCard
---

Utilizado para a exposição de produtos.

>  [**`ProductCard`**]() extende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx
<ProductCard
  productname={'Smart tv led 50 LG...'}
  price={3500.00}
  conditionPayment={'10x sem juros'}
  imageProduct={'http://lorempixel.com/400/400/food/'}
  onProuctCardClick={() => console.log('ProductCard test click')}
  cardOrientation={'vertical'}
  isDisabled={false}
/>
```

![productCard](assets/old_versions/productCard-vertical.png)

## Propriedades

### productname

 Identifica e/ou descreve o produto.

 Aceita **String** como valor, exemplo: ```productname={'Smart tv led 50 LG...'}``` 

 Exemplo:

 ```jsx
<ProductCard
  productname={'Smart tv led 50 LG...'}

/>
```

### price

Exibe o preço do produto.

Aceita **Number** como valor, exemplo: ```price={3500.00}``` 

 Exemplo:

 ```jsx
<ProductCard price={3500.00}
/>
```

### conditionPayment

Condição de pagamento.

Aceita **String** como valor, exemplo: ```conditionPayment= {'5x sem juros'}``` 

Exemplo:

 ```jsx
<ProductCard conditionPayment= {'Parcelos até 10x sem juros!'}
/>
```

### onProductClick

Recebe uma função para ser executada em um evento de toque sobre o ProductCard.

Aceita **Function** como valor, exemplo: ```onProuctCardClick={() => console.log('ProductCard test click')}``` 

Exemplo:

 ```jsx
<ProductCard onProuctCardClick={() => console.log('ProductCard test click')}`
/>
```

### cardOrientation

Define a orientação do ProductCard.

Aceita **String** como valor, exemplo: ```cardOrientation={'horizontal'}``` 

Exemplo:

 ```jsx
<ProductCard cardOrientation={'vertical'}
/>
```
![productCard](assets/old_versions/productCard-vertical.png)

<br>

 ```jsx
<ProductCard cardOrientation={'horizontal'}
/>
```


![productCard](assets/old_versions/productCard-horizontal.png)



### isDisabled

Define se o ProductCard está ativo.

Aceita **Boolean** como valor, exemplo: ```isDisabled={false}``` 

Exemplo:

 ```jsx
<ProductCard isDisabled={false}
/>
```



--- 