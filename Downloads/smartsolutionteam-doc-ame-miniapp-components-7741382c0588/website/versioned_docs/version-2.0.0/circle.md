---
id: version-2.0.0-circle
title: Circle
sidebar_label: 9.4 Circle
original_id: circle
---

Botão em formato circular.

## Exemplo

![circle](assets/images_components/v2.0.0/circle.png)


## Utilização

```xml
<Circle
onClick={() => console.log('Circle')}
icon={require('../assets/images/icon_ame.svg')}
label="Loren Ipsum"
/>
```


## Propriedades

### Icon


Endereço HTTPS da imagem do ícone ou endereço da iamgem ícone local usando require.


### Label

Texto descritivo que vem abaixo do Circle.


### Hint

Título descritivo acima do Circle.


### Image

 Endereço HTTPS da imagem ou endereço da imagem local usando require.

### Disabled

Bloqueia o usuário de interagir com o Circle.

### OnClick

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
