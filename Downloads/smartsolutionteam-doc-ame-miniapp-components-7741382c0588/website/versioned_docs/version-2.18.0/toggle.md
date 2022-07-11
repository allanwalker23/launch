---
id: version-2.18.0-toggle
title: Toggle
sidebar_label: 6.23 Toggle
original_id: toggle
---

Componente para escolhas com retorno true e false.

![toggle](assets/images_components/v2.0.0/toggle.jpg)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-toggle--basic)

## Utilização

```jsx harmony
<Toggle
  onChange={e => {
    this.onChangeToggle(e);
  }}
/>
```

## Propriedades

| Propriedade | Descrição                                         | Default | Type    | Obrigatório |
|-------------|---------------------------------------------------|---------|---------|-------------|
| checked     | Propriedade para renderizar o toggle como ativado | false   | boolean | não         |
| disabled    | Define que o toggle está desativado               | false   | boolean | não         |

## Exemplos

Abaixo um exemplo do toggle sendo usado em aceite de termos e etc.

![toggle](assets/images_components/v2.18.0/toggle-termos.png)

```jsx harmony
<View align='center'>
  <Toggle
    onChange={e => {
      console.log(e);
    }}
  />
  <View paddingLeft='nano'>
    <Text>
      Aceito os{' '}
      <TextLink
        text='termos de uso'
        onClick={() => console.log('clique')}
      />
    </Text>
  </View>
</View>
```