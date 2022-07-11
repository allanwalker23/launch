---
id: version-2.9.0-image-flat-card
title: ImageFlatCard
sidebar_label: 9.6 ImageFlatCard
original_id: image-flat-card
---

Image Flat Card é um componente para exibir informações com imagens e texto.

## Exemplo

![card](assets/images_components/v2.0.0/image-flat-card.jpg)

## Utilização

```xml harmony
<ImageFlatCard onClick={index => console.log(index)} content={arrayCards} />
```

## Propriedades

Veja abaixo quais são as propriedades para esse componente

### onClick

- Type: Function
- Obrigatório

Essa função retorna o index de qual card foi clicado.

```xml harmony
onClick={index => this.cardClick(index)}/>
```

### content

- Type: Array
- Obrigatório

Essa propriedade recebe o array com os objetos que precisam ser exibidos e deve seguir a seguinte estrutura:

```xml harmony
content={this.state.arrayCards}/>
```

```xml harmony
arrayCards = [
  {
    title: 'Lorem Ipsum',
    subtitle: 'Até 5% cashback',
    image: require('../assets/images/logo-ame.png'),
  },
]
```
