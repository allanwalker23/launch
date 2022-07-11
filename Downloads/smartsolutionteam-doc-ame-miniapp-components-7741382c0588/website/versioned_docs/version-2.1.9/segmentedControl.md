---
id: version-2.1.9-segmentedControl
title: SegmentedControl
sidebar_label: 6.3 SegmentedControl
original_id: segmentedControl
---

Utilizado sempre para a navegação. Os itens serão transformados em abas.

## Exemplo

![segmented](assets/images_components/v2.0.0/segmented.jpg)

## Utilização

```jsx harmony
<SegmentedControl
  items={[
    {
      title: "Moto G8 Plus",
      content: <Paragraph>Um celular da Motorola</Paragraph>
    },
    {
      title: "Samsung Galaxy A50",
      content: <Paragraph>Um celular da Samsung</Paragraph>
    },
    {
      title: "Xiaomi M1",
      content: <Paragraph>Um celular da Xiaomi</Paragraph>
    }
  ]}
/>
```

## Limites

A quantidade máxima de itens deve ficar entre 2 e 4 itens.
Sendo passado número de itens inferior a 2 ou superior a 4 o componente não é exibido.

## Propriedades

### Itens

Lista de itens de conteúdos.

Exemplo:
```jsx harmony
<SegmentedControl
  items={[
    {
      title: "Dogs",
      content: <Image source="http://lorempixel.com/500/500/food/1/" />
    },
    {
      title: "Cats",
      content: <Image source="http://lorempixel.com/500/500/transport/1/" />
    }

  ]}
/>
```
