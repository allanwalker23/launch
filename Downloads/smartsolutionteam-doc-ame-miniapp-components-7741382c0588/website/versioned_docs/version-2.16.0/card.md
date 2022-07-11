---
id: version-2.16.0-card
title: Card
sidebar_label: 9.1 Card
original_id: card
---

Card é um componente que contêm um conteúdo e ações sobre um determinado assunto.

## Exemplo

![card](assets/images_components/v2.0.0/card.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-card--basic)

<br>

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

### title

- Type: String
- Opcional
- Suporta BBCode

Texto que será exibido no título do card.

### titleProps

- Type: Object
- Opcional

Propriedades de estilo do título, você atribui um objeto com o estilo que será utilizado dentro do título somente.

Exemplo:

```jsx harmony
<Card
  title="Um título"
  titleProps={{ fontSize: 'md', color: 'neutralcolor-dark' }}
/>
```

### description

- Type: String
- Opcional
- Suporta BBCode

Texto que será exibido na descrição do card.

### descriptionProps

- Type: Object
- Opcional

Propriedades de estilo da descrição, você atribui um objeto com o estilo que será utilizado dentro da descrição somente.

Exemplo:

```jsx harmony
<Card
  title="Um título"
  description="Uma descrição"
  descriptionProps={{ fontSize: 'md', color: 'neutralcolor-dark' }}
/>
```

### subdescription

- Type: String
- Opcional
  subdescription

Texto que será exibido abaixo do descrição do card.

### subdescriptionProps

- Type: Object
- Opcional

Propriedades de estilo da subdescrição você atribui um objeto com o estilo que será utilizado dentro da subdescrição somente.

Exemplo:

```jsx harmony
<Card
  title="Um título"
  description="Uma descrição"
  descriptionProps={{ fontSize: 'md', color: 'neutralcolor-dark' }}
  subdescription="10% de cashback"
  descriptionProps={{ fontSize: 'md', color: 'neutralcolor-dark' }}
  subdescriptionProps={{
    fontSize: 'micro',
    fontWeight: 'bold',
    color: 'pluscolor-primary-dark'
  }}
/>
```

### hint

- Type: String
- Opcional
- Suporta BBCode

Texto que será exibido na linha de detalhamento superior do card.

### hintProps

- Type: Object
- Opcional

Propriedades de estilo do hint, você atribui um objeto com o estilo que será utilizado dentro do hint somente.

Exemplo:

```jsx harmony
<Card
  title="Um título"
  hint="Um detalhe importante"
  hintProps={{ fontSize: 'md', color: 'neutralcolor-dark' }}
/>
```

### rightIcon

- Type: String
- Opcional

Ícone exibido a direita no Card.

Recebe: Token do [ameIcon](ameIcon.md), endereço HTTPS da imagem do ícone ou endereço da imagem ícone local usando require.

### rightIconColor

- Type: String
- Opcional

Cor do icone usado na propriedade [RightIcon](#righticon).

Opções: 'black', 'red';

Padrão: 'black'

### leftIcon

- Type: String
- Opcional

Ícone exibido a esquerda no Card.

Recebe: Token do [ameIcon](ameIcon.md), endereço HTTPS da imagem do ícone ou endereço da imagem ícone local usando require.

### leftIconColor

- Type: String
- Opcional

Cor do icone usado na propriedade [LeftIcon](#lefticon).

Opções: 'black', 'red';

Padrão: 'black'

### image

- Type: String
- Opcional

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### onClick

- Type: Function
- Opcional

Recebe uma função para ser executada em um evento de toque sobre o Card.

### rightIconClick

- Type: Function
- Opcional

Recebe uma função para ser executada em um evento de toque sobre o ícone da direita no Card.

### disabled

- Type: Boolean
- Opcional

Bloqueia o usuário de interagir com o Card.

### truncate

- Type: Number
- Opcional

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

![card](assets/images_components/v2.0.0/card2.png)

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
