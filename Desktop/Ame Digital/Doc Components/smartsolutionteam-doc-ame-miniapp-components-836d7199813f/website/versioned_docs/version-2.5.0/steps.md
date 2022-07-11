---
id: version-2.5.0-steps
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

### Steps

**Array**

Array com objetos que irão conter as informações a serem exibidas:

```xml
{
title: titulo a ser exibido no step,
desc: descrição a ser exibida no step,
checked: ( true || false), define se o step apresentará preenchida com sucesso.
}
```

### Icons

**Boolean**

Transforma o componente para receber icones. Agora nos objetos do array que vão na propriedade [Steps](###Steps). 

Os valores passados devem estar estar na lista de tokens do componente: [AmeIcon](ameIcon.md).

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

Exemplo com a propriedade **icons**:

![steps](assets/images_components/v2.5.0/steps_2.png)
