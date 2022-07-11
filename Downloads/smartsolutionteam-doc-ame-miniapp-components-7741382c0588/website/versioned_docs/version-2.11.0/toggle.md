---
id: version-2.11.0-toggle
title: Toggle
sidebar_label: 6.23 Toggle
original_id: toggle
---

Componente para escolhas com retorno true e false.

## Exemplo
![toggle](assets/images_components/v2.0.0/toggle.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-toggle--basic)

<br>

## Utilização

```jsx harmony
<Toggle
  onChange={e => {
    this.onChangeToggle(e);
  }}
/>
```

## Propriedades

###  checked

- Type: Boolean
- Opcional

Coloque checked para que o toggle apareça ativado

```jsx harmony
<Toggle
  checked
  onChange={e => {
    this.onChangeToggle(e);
  }}
/>
```
### disabled

- Type: Boolean
- Opcional

Exemplo do toggle desabilitado com a flag disabled.

```jsx harmony
<Toggle
  disabled
  onChange={e => {
    this.onChangeToggle(e);
  }}
/>
```
