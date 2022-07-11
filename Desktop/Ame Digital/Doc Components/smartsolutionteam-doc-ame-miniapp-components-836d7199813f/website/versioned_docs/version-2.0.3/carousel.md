---
id: version-2.0.3-carousel
title: Componente Carrossel
sidebar_label: 7.4 Carousel
original_id: carousel
---


Componente auxiliar para mostrar conteúdos dentro de um carrossel.
Os conteúdos podem ser qualquer estrutura de componente (View, Banner, Card)
propriedades.

## Exemplo

![optin](assets/images_components/v2.0.0/Carousel.png)

## Utilização


Defina uma lista de componentes a serem exibidos.

```xml harmony
<Carousel infinite={false} autoplay={false} slidesToShow={2} slidesToScroll={2}>
<ProductCard
width={165}
height={95}
cardOrientation="vertical"
onClick={() => console.log('ProductCard')}
productImage={require('../assets/images/productCard.png')}
productName="Lava Roupas Líquido Omo Lavagem"
descriptionCashback="5% de volta (R$ 1,30)"
price={1000}
/>
<ProductCard
width={165}
height={95}
cardOrientation="vertical"
onClick={() => console.log('ProductCard')}
productImage={require('../assets/images/productCard.png')}
productName="Lava Roupas Líquido Omo Lavagem"
descriptionCashback="5% de volta (R$ 1,30)"
price={1000}
/>
<ProductCard
width={165}
height={95}
cardOrientation="vertical"
onClick={() => console.log('ProductCard')}
productImage={require('../assets/images/productCard.png')}
productName="Lava Roupas Líquido Omo Lavagem"
descriptionCashback="5% de volta (R$ 1,30)"
price={1000}
/>
</Carousel>
```

## Propriedades

### Dots

Mostrar indicadores de ponto.

```xml harmony
<Carousel dots={false}>
    ...
</Carousel>
```

### Infinite

Loop infinito deslizando.


### Speed

Velocidade de animação de slide / fade.


### SlidesToShow

Quantidade de slides para exbir por vez.

### SlidesToScroll

Quantidade de slides para rolar por vez.

### Autoplay

Define que os slides passem de forma automática.

### AfterChange

Retorno de chamada de alteração de índice.

```xml harmony
<Carousel afterChange={() => console.log('afterChange')}>
    {/*Content*/}
</Carousel>
```

## Outros exemplos

![carousel](assets/images_components/v2.0.0/Carousel2.png)


```xml harmony
  const renderCard = (index) => (
        <View key={`card+${index}`}>
        <Card
            icon={require('../assets/images/icon_ame.svg')}
            title={'Título do Card ' + (index + 1)}
            description={'Um card para servir de exemplo'}
        />
        </View>
        )

        <Carousel>
            {[1, 2, 3, 4, 5].map(n => renderCard(n))}
        </Carousel>
        <Card
            icon={require('../assets/images/icon_ame.svg')}
            title={'Título do Card ' + (index + 1)}
            description={'Um card para servir de exemplo'}
        />
```


