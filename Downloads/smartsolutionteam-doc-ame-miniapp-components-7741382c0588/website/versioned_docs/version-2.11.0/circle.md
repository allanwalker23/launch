---
id: version-2.11.0-circle
title: Circle
sidebar_label: 9.4 Circle
original_id: circle
---

Botão em formato circular.

## Exemplo

![circle](assets/images_components/v2.0.0/circle.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-circle--basic)

<br>

## Utilização

```xml
<Circle
onClick={() => console.log('Circle')}
icon={require('../assets/images/icon_ame.svg')}
label="Loren Ipsum"
/>
```

## Propriedades

### icon

- Type: String
- Opcional

Endereço HTTPS da imagem do ícone ou endereço da iamgem ícone local usando require.

### label

- Type: String
- Opcional

Texto descritivo que vem abaixo do Circle.

### hint

- Type: String
- Opcional

Título descritivo acima do Circle.

### image

- Type: String
- Opcional

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### disabled

- Type: Boolean
- Opcional

Bloqueia o usuário de interagir com o Circle.

### onClick

- Type: Function
- Opcional

Recebe uma função para ser executada em um evento de toque sobre o Circle.

## Outros exemplos

![circle](assets/images_components/v2.0.0/circle2.png)

O Circle acima foi representado pelo código abaixo

```xml
<View>
 <Circle
onClick={() => console.log('Circle')}
icon={require('../assets/images/icon_ame.svg')}
label={'Loren Ipsum'}
/>
</View>
```
