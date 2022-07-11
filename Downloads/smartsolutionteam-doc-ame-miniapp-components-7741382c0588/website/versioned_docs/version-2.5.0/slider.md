---
id: version-2.5.0-slider
title: Slider
sidebar_label: 6.19 Slider
original_id: slider
---

Componente utilizado para seleção de valor através de um slider range.

## Exemplo

![slider](assets/images_components/v2.0.0/slider.png)

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

Valor tipo Boolean que define se os valores do componente será  monetário (ex: 150,00) ou number (ex: 150).
O valor padrão é true.

### minAmount

Valor mínimo para seleção. Se a prop *monetary* for *true*, deve-se ser acrescentado *00* ao final do número. (ex: 15000 => 150,00)

### maxAmount

Valor máximo para seleção. Se a prop *monetary* for *true*, deve-se ser acrescentado *00* ao final do número. (ex: 700000 => 7000,00)

### minLabel

Texto que será renderizado ao lado no valor mínimo.


### maxLabel

Texto que será renderizado ao lado no valor maximo.

### value

Valor inicial que será renderizado no componente.

### onChange

Função a ser executada quando o valor é alterado.

### step

Quantidade que será incrementada ou decrementada no value ao alterar o slider. (Ex: se o valor desta prop for 5, a alteração será de 5 em 5)

### disabled

Desabilita a interação com o componente. valor default 'false'.
