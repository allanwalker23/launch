---
id: version-2.5.0-selectCard
title: SelectCard
sidebar_label: 9.8 SelectCard
original_id: selectCard
---

SelectCard é um componente que exibe cards selecionáveis.

## Exemplo

![card](assets/images_components/v2.5.0/select-card-1.png)

## Utilização

```xml harmony
<SelectCard
  onClick={index => console.log(index)}
  cards={arrayCards}
/>
```

## Propriedades

Veja abaixo quais são as propriedades para esse componente

### Cards

![required](assets/badge_required.svg)

**Array**

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

### OnClick

![required](assets/badge_required.svg)

**Function**

Essa função retorna o index de qual card foi clicado.

```xml
<SelectCard onClick={index => this.cardClick(index)} />
```

### Carousel

**Boolean**

Exibe os cards dentro de um carousel.

```xml
<SelectCard carousel />
```

![card](assets/images_components/v2.5.0/select-card-2.png)

### Disabled

**Boolean**

Disabilita os cards.

```xml
<SelectCard disabled />
```

### Cores

**String**

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
