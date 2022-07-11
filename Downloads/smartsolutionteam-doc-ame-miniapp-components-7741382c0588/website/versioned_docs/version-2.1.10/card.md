---
id: version-2.1.10-card
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
rightIcon='right-next'
icon={require('../assets/images/icon_ame.svg')}
title="Título do Card"
truncate={2}
disabled
/>
```

### Title

Texto que será exibido no título do card.

### TitleProps

Propriedades de estilo do título, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:

```jsx harmony
<Card
  title='Um título'
  titleProps={{ fontSize: 'md', color: 'neutralcolor-dark' }}
/>
```

### Description

Texto que será exibido na descrição do card.

### DescriptionProps

Propriedades de estilo do título, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:

```jsx harmony
<Card
  title='Um título'
  description='Uma descrição'
  descriptionProps={{ fontSize: 'md', color: 'neutralcolor-dark' }}
/>
```

### Hint

Texto que será exibido na linha de detalhamento superior do card.

### HintProps

Propriedades de estilo do hint, você atribui um objeto com o estilo que será utilizado dentro do hint somente.

Exemplo:

```jsx harmony
<Card
  title='Um título'
  hint='Um detalhe importante'
  hintProps={{ fontSize: 'md', color: 'neutralcolor-dark' }}
/>
```

### RightIcon

Ícone exibido a direita no Card.

Recebe: Token do [ameIcon](ameIcon.md), endereço HTTPS da imagem do ícone ou endereço da imagem ícone local usando require.

### LeftIcon

Ícone exibido a esquerda no Card.

Recebe: Token do [ameIcon](ameIcon.md), endereço HTTPS da imagem do ícone ou endereço da imagem ícone local usando require.

### Image

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### OnClick

Recebe uma função para ser executada em um evento de toque sobre o Card.

### RightIconClick

Recebe uma função para ser executada em um evento de toque sobre o ícone da direita no Card.

### Disabled

Bloqueia o usuário de interagir com o Card.

### Truncate

Com o truncate é possível selecionar a quantidade de linhas do texto desejada no `description`. Se o texto for de um tamanho que utilize linhas a mais, será cortado e acrescentado '...' ao final da linha. O valor deve ser passado em tipo number. Caso o `truncate` não seja atribuído, não haverá limitação de linha.

## Propriedades Adicionais

### Bordas

- `border`
- `borderRadius`
- `borderColor`

[Saiba mais sobre bordas](border.md)

### Cores

- `background`
- `borderColor`

[Saiba mais sobre cores](color.md)

### Direções e alinhamentos

- `direction`
- `align`
- `justify`

[Saiba mais sobre direções e alinhamentos](flex.md)

### Espaçamentos

- `inset`
- `squish`

[Saiba mais sobre espaçamentos](space.md)

### Opacidade

- `semiopaque`
- `intense`
- `medium`
- `light`
- `transparent`

[Saiba mais sobre opacidade](opacity.md)

### visibilidade

- `hidden`
- `visible`

[Saiba mais sobre visibilidade](visibility.md)

## Outros exemplos

![card](assets/images_components/card2.png)

O Card acima foi representado pelo código abaixo

```jsx harmony
<Window>
  <Card
    image={require('../assets/images/logo_phone.png')}
    title={'Título do Card'}
    description={'Informação complementar do card'}
  />
</Window>
```
