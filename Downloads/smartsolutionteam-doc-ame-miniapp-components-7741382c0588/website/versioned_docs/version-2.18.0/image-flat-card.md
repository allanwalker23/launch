---
id: version-2.18.0-imageflatcard
title: ImageFlatCard
sidebar_label: 9.6 ImageFlatCard
original_id: imageflatcard
---

Image Flat Card é um componente para exibir informações com imagens e texto.

## Exemplo

![card](assets/images_components/v2.0.0/image-flat-card.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-imageflatcard--basic)

<br>

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
