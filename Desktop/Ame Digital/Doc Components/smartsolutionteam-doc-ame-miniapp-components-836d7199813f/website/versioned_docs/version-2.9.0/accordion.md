---
id: version-2.9.0-accordion
title: Accordion
sidebar_label: 6.16 Accordion
original_id: accordion
---

Componente accordion para exibição de textos no estilo FAQ.

## Exemplo

![accordion](assets/images_components/v2.0.0/accordion.jpg)

## Utilização

Há duas formas de se utilizar o componente Accordion:

1. Atribuindo uma propriedade **data** no componente, passando um array de objetos.
2. Utilizando o componente filho Accordion.Card e dentro dele colocar as informações que deseja.

### Utilizando propriedade data

- Type: Array
- Obrigatório

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

### Utilizando Accordion.Card

- Type: String
- Opcional

```xml
  <Accordion>
    <Accordion.Card title={'Seguro residencial'}>
      <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
    </Accordion.Card>

    <Accordion.Card title={'Seguro celular'}>
      Accordion com dois componentes Paragraph dentro:
      <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
    </Accordion.Card>
  </Accordion>
```

Nesta usabilidade deverá chamar o componente Accordion como pai, e dentro dele, para cada opção no Accordion, utilizar o Accordion.Card com a propriedade **title**, que será o título exibido no card, e dentro do Accordion.Card escrever o seu JSX.
