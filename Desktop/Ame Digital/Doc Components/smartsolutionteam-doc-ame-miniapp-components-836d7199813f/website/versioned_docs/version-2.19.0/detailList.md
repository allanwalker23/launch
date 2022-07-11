---
id: version-2.19.0-detaillist
title: DetailList
sidebar_label: 8.3 DetailList
original_id: detaillist
---

Componente que exibe uma lista de items detalhados.

[DetailList no Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/listas-detaillist--basic)

## Exemplo

![DetailList](assets/images_components/v2.8.0/detailList.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/listas-detaillist--basic)

<br>

## Utilização

```jsx
state = {
  items: [
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
}
;<DetailList items={this.state.items} onClick={(e) => console.log(e)} />
```

## Propriedades

| Propriedade | Descrição                                                                                                              | Type     | Default | Obrigatório |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- | -------- | ------- | ----------- |
| items       | Propriedade que define a lista de items carregados no componente. As propriedades de cada item está na próxima tabela. | array    | null    | sim         |
| onClick     | Recebe uma função que retornará o index do item clicado.                                                               | function | null    | sim         |

| Propriedade    | Descrição                                         | Type   | Default | Obrigatório                                    |
| -------------- | ------------------------------------------------- | ------ | ------- | ---------------------------------------------- |
| title          | Texto principal apresentado no card.              | string | null    | sim                                            |
| description    | Texto secundário apresentado no card.             | string | null    | não                                            |
| subdescription | Terceiro texto, de apoio, apresentado no card.    | string | null    | não                                            |
| leftIcon       | Icone apresentado a esquerda do card.             | string | null    | sim                                            |
| leftIconColor  | Cor do leftIcon. Veja as opções [aqui](color.md)  | string | null    | Obrigatório se usado a propriedade `leftIcon`  |
| rightIcon      | Icone apresentado a direita do card.              | string | null    | sim                                            |
| rightIconColor | Cor do rightIcon. Veja as opções [aqui](color.md) | string | null    | Obrigatório se usado a propriedade `rightIcon` |
| tag            | Pequeno texto informativo a direita do card.      | string | null    | não                                            |

## Exemplos

![datailList](assets/images_components/v2.19.0/detaillist_ex1.png)

```jsx
state = {
  items: [
    {
      title: 'Harry Osborn',
      description: '[color=neutralcolor-dark]Pagamento Pix[/color]',
      subdescription: '[b][color=categorycolor-debit]R$20,00[/b][/color]',
      leftIcon: 'send-money',
      leftIconColor: 'categorycolor-debit',
      rightIcon: 'right-next',
      rightIconColor: 'amecolor-primary-medium',
      tag: '12/MAR'
    },
    {
      title: 'Peter Benjamin Parker',
      description: '[color=neutralcolor-dark]Recebimento Pix[/color]',
      subdescription: '[b][color=categorycolor-credit]R$10,00[/b][/color]',
      leftIcon: 'recieve',
      leftIconColor: 'categorycolor-credit',
      rightIcon: 'right-next',
      rightIconColor: 'amecolor-primary-medium',
      tag: '12/MAR'
    },
    {
      title: '[s][color=categorycolor-expired]Americanas.com[/color][/s]',
      description:
        '[s][color=categorycolor-expired]Cashback cancelado[/color][/s]',
      subdescription:
        '[b][s][color=categorycolor-expired]R$10,00[/color][/s][/b]',
      leftIcon: 'cashback',
      leftIconColor: 'categorycolor-expired',
      rightIcon: 'right-next',
      rightIconColor: 'amecolor-primary-medium',
      tag: '[color=categorycolor-expired]12/MAR[/color]'
    },
    {
      title: 'Americanas.com',
      description: 'Aguardando cashback',
      subdescription: '[b][color=categorycolor-waiting]R$10,00[/color][/b]',
      leftIcon: 'cashback',
      leftIconColor: 'categorycolor-waiting',
      rightIcon: 'right-next',
      rightIconColor: 'amecolor-primary-medium',
      tag: '12/MAR'
    },
    {
      title: 'Americanas.com',
      description: 'Compra aprovada',
      subdescription: '[b][color=categorycolor-debit]R$10,00[/color][/b]',
      leftIcon: 'market-bag-outline',
      leftIconColor: 'categorycolor-debit',
      rightIcon: 'right-next',
      rightIconColor: 'amecolor-primary-medium',
      tag: '12/MAR'
    }
  ]
}

<View>
  <DetailList items={this.state.items} onClick={e => this.handleItemClick(e)} />
</View>
```
