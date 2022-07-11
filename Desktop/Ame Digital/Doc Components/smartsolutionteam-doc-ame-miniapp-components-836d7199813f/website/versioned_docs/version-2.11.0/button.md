---
id: version-2.11.0-button
title: Button
sidebar_label: 6.1 Button
original_id: button
---

Exibe um botão na tela.
Nesta versão temos apenas um Componente **Button** para trabalhar.

## Exemplo

![button-block](assets/images_components/v2.0.0/button.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-button--primary)

<br>

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

### type

- Type: String
- Obrigatório

Determina o tipo de botão, temos três tipos:

- `primary` - Para as ações principais
- `secondary` - Para as ações que alteram o fluxo principal
- `tertiary` - Para as ações destrutivas

### OnClick

- Type: Function
- Obrigatório

Recebe uma função para ser executada ao torcarmos no botão.

```jsx harmony
<Button onClick={() => console.log('Componente Button')} />
```

### label

- Type: String
- Obrigatório

Adiciona texto descritivo dentro do Button.

### disabled

- Type: Boolean
- Opcional

Desabilita as ações do botão.

### rightIcon

- Type: String
- Opcional

Adiciona um icone a direita da label.

```jsx harmony
<Button rightIcon={require('../assets/images/icon_ame.svg')} />
```

### leftIcon

- Type: String
- Opcional

Adiciona um icone a esquerda da label.

```jsx harmony
<Button leftIcon='ame-outline' />
```