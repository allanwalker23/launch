---
id: version-2.8.0-radio
title: Radio
sidebar_label: 6.25 Radio
original_id: radio
---

O Radio é usado para seleções únicas, onde somente uma opção pode ser selecionada

[Radio no Storybook](https://ame-miniapp-components.calindra.com.br/storybook?path=/story/interações-radio--basic)

## Exemplo

![checkitem](assets/images_components/v2.8.0/radio.jpg)

## Utilização

```xml
  <Radio
    onChange={e => {
      console.log(e);
    }}
    name='radio-teste'
    flex
    items={[
      {
        text: 'Sim',
        value: 'teste',
      },
      {
        text: 'Não',
        value: 'teste 1',
        checked: true,
      },
    ]}
  />
```

## Propriedades

### name

- Type: String
- Since: 2.8.0
- Obrigatório

Essa propriedade define de qual grupo o radio faz parte

### flex

- Type: Boolean
- Since: 2.8.0
- Opcional

O flex permite que renderize um radio ao lado do outro, o recomendado é a utilização apenas com textos pequenos e no máximo duas opções

### onChange

- Type: Function
- Since: 2.8.0
- Obrigatório

Nessa função será retornado o value que foi selecionado pelo usuário

### items

- Type: Array
- Since: 2.8.0
- Obrigatório

No items será passado um array com os objetos que controlam os radios como no exemplo

```xml
  items={[
    {
      text: 'Sim',
      value: 'teste',
    },
    {
      text: 'Não',
      value: 'teste 1',
      checked: true,
    },
  ]}
```

As propriedades para o items estão ebaixo

#### text

- Type: String
- Since: 2.8.0
- Obrigatório

O text é responsável pelo texto que será apresentado ao usuário

#### value

- Type: String
- Since: 2.8.0
- Obrigatório

O value recebe o valor que será devolvido na função onChange

#### checked

- Type: Boolean
- Since: 2.8.0
- Opcional

Quando true essa propriedade deixa o radio como checked
