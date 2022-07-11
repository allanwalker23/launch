---
id: version-2.11.0-slider
title: Slider
sidebar_label: 6.19 Slider
original_id: slider
---

Componente utilizado para seleção de valor através de um slider range.

## Exemplo

![slider](assets/images_components/v2.0.0/slider.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-slider--basic)

<br>

## Utilização

```jsx
<Slider
  minAmount={0}
  maxAmount={10000}
  value={200000}
  onChange={value => {
    setValue(value);
  }}
/>
```

## Propriedades

### monetary

- Type: Boolean
- Opcional

Valor tipo Boolean que define se os valores do componente será  monetário (ex: 150,00) ou number (ex: 150).
O valor padrão é true.

### minAmount

- Type: Number
- Opcional

Valor mínimo para seleção. Se a prop *monetary* for *true*, deve-se ser acrescentado *00* ao final do número. (ex: 15000 => 150,00)

### maxAmount

- Type: Number
- Opcional

Valor máximo para seleção. Se a prop *monetary* for *true*, deve-se ser acrescentado *00* ao final do número. (ex: 700000 => 7000,00)

### minLabel

- Type: String
- Opcional

Texto que será renderizado ao lado no valor mínimo.


### maxLabel

- Type: String
- Opcional

Texto que será renderizado ao lado no valor maximo.

### value

- Type: Number
- Opcional

Valor inicial que será renderizado no componente.

### onChange

- Type: Function
- Obrigatório

Função a ser executada quando o valor é alterado.

### step

- Type: Number
- Opcional

Quantidade que será incrementada ou decrementada no value ao alterar o slider. (Ex: se o valor desta prop for 5, a alteração será de 5 em 5)

### disabled

- Type: Boolean
- Opcional

Desabilita a interação com o componente. valor default 'false'.
