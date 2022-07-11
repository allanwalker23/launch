---
id: version-2.1.8-steps
title: Steps
sidebar_label: 7.8 Steps
original_id: steps
---

Componente para marcação de etapas cumpridas.

## Exemplo

![steps](assets/images_components/v2.0.0/steps.png)

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
        title: 'Cartão aprovado',
        desc: 'Ame Digital',
        checked: true,
      },
    ]
  }
/>
```

## Propriedades

### steps

Array com objetos que irão conter as informações a serem exibidas:
{
title: titulo a ser exibido no step,
desc: descrição a ser exibida no step,
checked: ( true || false), define se o step apresentará preenchida com sucesso.
}
