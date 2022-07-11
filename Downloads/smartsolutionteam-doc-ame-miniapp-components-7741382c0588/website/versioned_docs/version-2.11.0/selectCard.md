---
id: version-2.11.0-selectCard
title: SelectCard
sidebar_label: 9.8 SelectCard
original_id: selectCard
---

SelectCard é um componente que exibe cards selecionáveis.

## Exemplo

![card](assets/images_components/v2.5.0/select-card-1.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-selectcard--basic)

<br>

## Utilização

```xml harmony
<SelectCard
  onClick={index => console.log(index)}
  cards={arrayCards}
/>
```

## Propriedades

Veja abaixo quais são as propriedades para esse componente

### cards

- Type: Array
- Obrigatório

Essa propriedade recebe o array com os cards que precisam ser exibidos e deve seguir a seguinte estrutura:

```xml
<SelectCard cards={this.state.arrayCards} />
```

```xml
arrayCards = [
    {
      key: '0',
      title: 'Contratação e uso',
      icon: 'extrato-outline',
    },
    {
      key: '1',
      title: 'Seguro celular',
      icon: 'mobile-outline',
    },
    {
      key: '2',
      title: 'Seguro dental',
      icon: 'wdental',
    },
```

Os items devem conter uma 'Key" para representar sua posição no array, um "title" e uma "image" ou "icon". O "icon" recebe tokens do componente [AmeIcon](ameIcon.md)

Todos com valor em **String**.

### selectedDefault

- Type: Number
- Since: 2.9.0
- Opcional

```xml
<SelectCard cards={this.state.arrayCards}  selectedDefault={'1'}/>
```

Esta propriedade seta como default o index do card que irá renderizar selecionado.

### onClick

- Type: Function
- Obrigatório

Essa função retorna o index de qual card foi clicado.

```xml
<SelectCard onClick={index => this.cardClick(index)} />
```

### carousel

- Type: Boolean
- Opcional

Exibe os cards dentro de um carousel.

```xml
<SelectCard carousel />
```

![card](assets/images_components/v2.5.0/select-card-2.png)

### disabled

- Type: Boolean
- Opcional

Disabilita os cards.

```xml
<SelectCard disabled />
```

### Cores

- Type: String
- Opcional

- `background` - Cor de fundo do card.

  Padrão: Sem cor de fundo

- `borderColor` - Cor da borda do card.

  Padrão: neutralcolor-medium

- `titleColor` - Cor do título do card.

  Padrão: amecolor-primary-medium

Ex:

```xml
<SelectCard
  background='pluscolor-secondary-lightest'
  borderColor='pluscolor-secondary-darkest'
  titleColor='neutralcolor-medium'
/>
```

[Saiba mais sobre cores](color.md)
