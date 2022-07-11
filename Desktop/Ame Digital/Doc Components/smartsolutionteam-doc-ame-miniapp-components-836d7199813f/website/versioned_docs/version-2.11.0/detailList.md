---
id: version-2.11.0-detailList
title: DetailList
sidebar_label: 8.3 DetailList
original_id: detailList
---

Componente que exibe uma lista de items detalhados.

[DetailList no Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/listas-detaillist--basic)

## Exemplo

![ameicon](assets/images_components/v2.8.0/detailList.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/listas-detaillist--basic)

<br>

## Utilização

```jsx
items = [
  {
    title: 'Pedágio Linha Amarela',
    description: '12/06 - 06h10',
    subdescription: 'Audi',
    leftIcon: 'feature-taggy',
    leftIconColor: 'black',
    rightIcon: 'right-next',
    rightIconColor: 'red',
    tag: 'R$19,99'
  },
  {
    title: 'Pedágio Rio-NITERÓI',
    description: '12/06 - 09h46',
    subdescription: 'Audi',
    leftIcon: 'feature-taggy',
    leftIconColor: 'black',
    rightIcon: 'right-next',
    rightIconColor: 'red',
    tag: 'R19,99'
  },
  {
    title: 'Fatura Taggy - Junho',
    description: '12/06 - 12h02',
    subdescription: 'Audi',
    leftIcon: 'ame-outline',
    leftIconColor: 'red',
    rightIcon: 'right-next',
    rightIconColor: 'red',
    tag: 'R$360,98'
  }
]
;<DetailList items={items} onClick={(e) => console.log(e)} />
```

## Propriedades

### onClick

- Type: Function
- Since: 2.8.0
- Opcional

Nessa função será retornado o index do item clicado.

### items

- Type: Array
- Since 2.8.0
- Obrigatório

Propriedade que define a lista de items carregados no componente.

Exemplo de uso da propriedade:

```jsx
items={[
  {
    title: 'Pedágio Linha Amarela',
    description: '12/06 - 06h10',
    subdescription: 'Audi',
    leftIcon: 'feature-taggy',
    leftIconColor: 'black',
    rightIcon: 'right-next',
    rightIconColor: 'red',
    tag: 'R$19,99',
  },
]}
```

as propriedades para o items estão abaixo:

### title

- Type: String
- Since: 2.8.0
- Obrigatório

Texto principal apresentado no card.

### description

- Type: String
- Since: 2.8.0
- Opcional

Texto secundário apresentado no card.

### subdescription

- Type: String
- Since: 2.8.0
- Opcional

Terceiro texto, de apoio, apresentado no card.

### leftIcon

- Type: String
- Since: 2.8.0
- Obrigatório

Icone apresentado a esquerda do card.

### leftIconColor

- Type: String
- Since: 2.8.0
- Obrigatório se usado a propriedade [leftIcon](#leftIcon)
- Opções: `['black' e 'red']`

Cor do leftIcon.

### rightIcon

- Type: String
- Since: 2.8.0
- Opcional

Icone apresentado a direita do card.

### rightIconColor

- Type: String
- Since: 2.8.0
- Obrigatório se usado a propriedade [rigntIcon](#rigntIcon)
- Opções: `['black' e 'red']`

Cor do rightIcon.

### tag

- Type: String
- Since: 2.8.0
- Opcional

Pequeno texto informativo a direita do card.
