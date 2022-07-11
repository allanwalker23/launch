---
id: selectcard
title: SelectCard
sidebar_label: 9.8 SelectCard
---

SelectCard é um componente que exibe cards selecionáveis.

![card](assets/images_components/v2.5.0/select-card-1.png)

## Utilização

```jsx
<View>
  <SelectCard cards={arrayCards} onClick={(index) => console.log(index)} />
</View>
```

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-selectcard--basic)

<br>

## Propriedades

| Propriedade   | Descrição                                                                                                             | Type     | Default                 | Obrigatório |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------- | ----------- |
| cards         | Essa propriedade recebe um array com os cards que precisam ser exibidos e deve seguir a seguinte [estrutura](#cards). | array    | null                    | sim         |
| selectDefault | Esta propriedade seta como default o index do card que irá renderizar selecionado.                                    | number   | null                    | não         |
| carousel      | Exibe os cards dentro de um carousel.                                                                                 | boolean  | null                    | não         |
| onClick       | Seta uma função que retorna o index de qual card foi clicado.                                                         | function | null                    | sim         |
| disabled      | Disabilita a interação com os cards.                                                                                  | boolean  | null                    | não         |
| titleColor    | Cor do título do card selecionado, [veja os valores](color.md)                                                        | string   | amecolor-primary-medium | não         |
| background    | Adiciona uma cor de fundo do card selecionado, [veja os valores](color.md)                                            | string   | null                    | não         |
| borderColor   | Define qual será a cor da borda do card selecionado, [veja os valores](color.md)                                      | string   | neutralcolor-medium     | não         |

### cards

A propriedade `cards` deve seguir a estrutura de um array contendo objetos com as seguintes propriedades, pode ser usado a propriedade `icon` ou `image`:

```jsx
let cards = [
  {
    title: 'Titulo do card',
    icon: 'token da biblioteca de icones*.',
    image:
      'endereço HTTPS da imagem do ícone ou endereço da imagem ícone local usando'
  }
]
```

\*Veja a lista dos tokens da biblioteca [aqui](image.md#lista-de-ícones)

## Exemplos

![card](assets/images_components/v2.20.0/selectcard_ex1.gif)

```js
state = {
  arrayCards: [
    {
      title: 'Contratação',
      icon: 'extrato-outline'
    },
    {
      title: 'Seguro celular',
      icon: 'mobile-outline'
    },
    {
      title: 'Seguro dental',
      icon: 'mobile-outline'
    },
    {
      title: 'Seguro residencial',
      icon: 'mobile-outline'
    },
    {
      title: 'Seguro pet',
      icon: 'pet-m-outline'
    }
  ]
}
```

```jsx
<View>
  <SelectCard
    dataCy="selectcard-carousel"
    cards={this.state.arrayCards}
    borderColor="amecolor-primary-lightest"
    titleColor="amecolor-primary-lightest"
    background="pluscolor-primary-dark"
    selectedDefault={1}
    carousel
    onClick={(item) => this.handleSelectCard(item)}
  />
</View>
```

---

No seguinte exemplo foi usado a propriedade `image` no objeto do [cards](#cards):

![card](assets/images_components/v2.20.0/selectcard_ex2.png)

```js
state = {
  arrayCardsImages: [
    {
      title: 'Steam',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png'
    },
    {
      title: 'Xbox',
      image: 'https://logodix.com/logo/972497.png'
    },
    {
      title: 'Playstation',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png'
    },
    {
      title: 'Epic Games',
      image:
        'https://www.pngfind.com/pngs/m/52-528164_epic-games-png-epic-games-logo-png-transparent.png'
    },
    {
      title: 'Origin',
      image: 'https://img.ibxk.com.br/2013/11/26/26152224049.jpg'
    }
  ]
}
```

```jsx
<View>
  <SelectCard
    dataCy="selectcard-carousel"
    onClick={(item) => this.handleOptions(item)}
    cards={this.state.arrayCardsImages}
    borderColor="neutralcolor-darkest"
    titleColor="neutralcolor-darkest"
  />
</View>
```
