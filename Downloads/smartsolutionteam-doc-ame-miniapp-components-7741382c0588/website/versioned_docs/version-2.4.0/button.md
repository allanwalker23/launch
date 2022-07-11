---
id: version-2.4.0-button
title: Button
sidebar_label: 6.1 Button
original_id: button
---

Exibe um botão na tela.
Nesta versão temos apenas um Componente **Button** para trabalhar.

## Exemplo

![button-block](assets/images_components/v2.0.0/button.png)

## Utilização

```xml
<Window>
 <Button
label={'Pagar'}
type='primary'
onClick={() => console.log('Componente Button')}
/>
</Window>
```

## Propriedades

### Type
Type: **String**

Determina o tipo de botão, temos três tipos:

- `primary` - Para as ações principais
- `secondary` - Para as ações que alteram o fluxo principal
- `tertiary` - Para as ações destrutivas

### OnClick
Type: **Function**

Recebe uma função para ser executada ao torcarmos no botão.

```jsx harmony
<Button onClick={() => console.log('Componente Button')} />
```

### Label
Type: **String**

Adiciona texto descritivo dentro do Button.

### Disabled
Type: **Boolean**

Desabilita as ações do botão.

### RightIcon
Type: **String**

Adiciona um icone a direita da label.

```jsx harmony
<Button rightIcon={require('../assets/images/icon_ame.svg')} />
```

### LeftIcon
Type: **String**

Adiciona um icone a esquerda da label.

```jsx harmony
<Button leftIcon='ame-outline' />
```