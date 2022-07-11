---
id: version-2.4.0-segmentedControl
title: SegmentedControl
sidebar_label: 6.3 SegmentedControl
original_id: segmentedControl
---

Utilizado sempre para a navegação. Os itens serão transformados em abas.

## Exemplo

![segmented](assets/images_components/v2.0.0/segmented.jpg)

## Utilização

Há duas formas de se utilizar o componente SegmentedControl:

1. Atribuindo uma propriedade **items** no componente, passando um array de objetos.
2. Utilizando o componente filho SegmentedControl.Item e dentro dele colocar as informações que deseja.

## Limites

A quantidade máxima de itens deve ficar entre 2 e 4 itens.
Sendo passado número de itens inferior a 2 ou superior a 4 o componente não é exibido.

```jsx harmony
<SegmentedControl
  items={[
    {
      title: 'Moto G8 Plus',
      content: <Paragraph>Um celular da Motorola</Paragraph>,
    },
    {
      title: 'Samsung Galaxy A50',
      content: <Paragraph>Um celular da Samsung</Paragraph>,
    },
    {
      title: 'Xiaomi M1',
      content: <Paragraph>Um celular da Xiaomi</Paragraph>,
    },
  ]}
/>
```

## Propriedades

### Utilizando a propriedade items

Lista de itens de conteúdos.

Exemplo:

```JSX harmony
<SegmentedControl
  items={[
    {
      title: 'Dogs',
      content: <Image source='http://lorempixel.com/500/500/food/1/' />,
    },
    {
      title: 'Cats',
      content: <Image source='http://lorempixel.com/500/500/transport/1/' />,
    },
  ]}
/>
```

### Utilizando SegmentedControl.Item

```xml
  <SegmentedControl>
    <SegmentedControl.Item title={'Seguro residencial'}>
      <View>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </View>
    </SegmentedControl.Item>

    <SegmentedControl.Item title={'Seguro celular'}>
      <View>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </View>
    </SegmentedControl.Item>
  </SegmentedControl>
```

Nesta usabilidade deverá chamar o componente SegmentedControl como pai, e dentro dele, para cada opção no SegmentedControl, utilizar o SegmentedControl.Item com a propriedade **title**, que será o título exibido no item, e dentro do SegmentedControl.Item escrever o seu JSX.
