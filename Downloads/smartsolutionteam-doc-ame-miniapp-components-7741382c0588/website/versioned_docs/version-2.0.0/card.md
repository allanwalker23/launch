---
id: version-2.0.0-card
title: Card
sidebar_label: 9.1 Card
original_id: card
---

Card é um componente que contêm um conteúdo e ações sobre um determinado assunto.

## Exemplo

![card](assets/images_components/v2.0.0/card.png)

## Utilização

```xml harmony
<Card
showArrow
disabled
icon={require('../assets/images/icon_ame.svg')}
title="Título do Card"
/>
```

### Title

Título de descrição.

### ShowArrow

Se o ícone de seta do Card irá ser exibido ou não.

### Icon

Endereço HTTPS da imagem do ícone ou endereço da iamgem ícone local usando require.

### Image

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### OnClick

Recebe uma função para ser executada em um evento de toque sobre o Card.

### Disabled

Bloqueia o usuário de interagir com o Card.

## Propriedades Adicionais

### Bordas

* `border`
* `borderRadius`
* `borderColor`

[Saiba mais sobre bordas](border.md)

### Cores

* `background`
* `borderColor`

[Saiba mais sobre cores](color.md)

### Direções e alinhamentos

* `direction`
* `align`
* `justify`

[Saiba mais sobre direções e alinhamentos](flex.md)

### Espaçamentos

* `inset`
* `squish`

[Saiba mais sobre espaçamentos](space.md)

### Opacidade

* ``semiopaque``
* ``intense``
* ``medium``
* `light`
* `transparent`

[Saiba mais sobre espaçamentos](opacity.md)

### visibilidade

* `hidden`
* `visible`

[Saiba mais sobre espaçamentos](visibility.md)

## Outros exemplos

![card](assets/images_components/v2.0.0/card2.png)

O Card  acima foi representado pelo código abaixo

```xml
<View>
<Card
 image={require('../assets/images/logo_phone.png')}
 title={'Título do Card'}
 description={'Informação complementar do card'}
/>
</View>
```
