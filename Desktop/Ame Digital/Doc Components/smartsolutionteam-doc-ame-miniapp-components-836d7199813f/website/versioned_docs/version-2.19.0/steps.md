---
id: version-2.19.0-steps
title: Steps
sidebar_label: 7.8 Steps
original_id: steps
---

Componente para marcação de etapas cumpridas.

![steps](assets/images_components/v2.0.0/steps.png)

<br>

Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-steps--basic)

<br>

## Utilização

```xml
<Steps
  steps = {
    [
      {
        title: 'Cartão entregue',
        desc: 'Rua Fidêncio Ramos 302, 8º andar',
        checked: false,
      },
      {
        title: 'Cartão saiu para entrega',
        desc: 'CDD Jardim Paulista - São Paulo/SP',
        checked: false,
      },
      {
        title: 'Cartão em trânsito',
        desc: 'CDD Jardim Paulista - São Paulo/SP',
        checked: true,
      },
      {
        title: '[b]Cartão aprovado[/b]',
        desc: '[b]Ame Digital[/b]',
        checked: true,
      },
    ]
  }
/>
```

## Propriedades

| Propriedade | Descrição                                                                                                                                                                                      | Type    | Default | Obrigatório |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|-------------|
| steps       | Array com objetos que irão conter as informações a serem exibidas. Suas propriedades title e desc aceitam BBCode.                                                                              | Array   | null    | sim         |
| icons       | Transforma o componente para receber icones nos objetos do array que vão na propriedade steps.  Os valores passados devem estar estar na lista de tokens do componente: [AmeIcon](ameIcon.md) . | Boolean | false   | não         |


## Exemplos

Abaixo, alguns exemplos usando o Steps:

![steps](assets/images_components/v2.5.0/steps_2.png)

```xml
<Steps
  icons
  steps={[
    {
      title: 'Encontre a melhor oferta',
      desc: 'Você tá nessa etapa agora ;)',
      icon:'search',
      checked: true,
    },
    {
      title: 'Enviar fotos suas',
      desc: 'Uma normal e outra sorrindo ;)',
      icon:'camera-outline',
      checked: false,
    },
    {
      title: 'Enviar documento',
      desc: 'pode ser seu RG ou CNH',
      icon:'documents-id-outline',
      checked: false,
    },
    {
      title: 'Enviar comprovante de endereço*',
      desc: 'E tem que ter seu nome nele, ok?',
      icon:'adress-outline',
      checked: false,
    },
  ]}
/>
```

