---
id: version-2.1.7-accordion
title: Accordion
sidebar_label: 6.16 Accordion
original_id: accordion
---

Componente accordion para exibição de textos no estilo FAQ.

## Exemplo
![accordion](assets/images_components/v2.0.0/accordion.jpg)

## Utilização

```xml
<Accordion
  data={this.accordionData}
/>
```

O objeto accordionData está da seguinte maneira:
```xml
accordionData = [
    {
      title: 'Seguro residencial',
      items: [
        { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet' },
        { title: 'Lorem ipsum Dolor', content: 'Lorem ipsum dolor sit amet' },
      ],
    },
    {
      title: 'Seguro celular',
      items: [
        { title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet' },
        { title: 'Lorem ipsum Dolor', content: 'Lorem ipsum dolor sit amet' },
      ],
    },
    {
      title: 'Accordion sem subitens',
      content: 'Lorem ipsum dolor sit amet',
    },
  ];
```

Perceba que o último item do objeto não tem items e que ele contém o content, esse caso é para quando não existem aberturas do accordion internas e renderizará da seguinte maneira:

![accordion](assets/images_components/v2.0.0/accordion-content.jpg)

Perceba que o item aberto não possuí subitens.
