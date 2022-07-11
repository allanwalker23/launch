---
id: version-2.1.9-slider
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

### minAmount

Valor mínimo para seleção. (ex: 15000 => 150,00)

### maxAmount

Valor máximo para seleção. (ex: 700000 => 7000,00)

### value

Valor inicial que será renderizado no componente.

### onChange

Função a ser executada quando o valor é alterado.

### disabled

Desabilita a interação com o componente. valor default 'false'.
