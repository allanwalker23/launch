---
id: version-2.9.0-toggle
title: Toggle
sidebar_label: 6.23 Toggle
original_id: toggle
---

Componente para escolhas com retorno true e false.

## Exemplo
![toggle](assets/images_components/v2.0.0/toggle.jpg)
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
