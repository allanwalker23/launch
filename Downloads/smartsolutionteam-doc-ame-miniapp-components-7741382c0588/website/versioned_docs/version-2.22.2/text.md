---
id: version-2.22.2-text
title: Text
sidebar_label: 4.7 Text
original_id: text
---

Componente de texto que recebe diversas propriedades

![view](assets/images_components/v2.13.0/text.png)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/textos-text--basic)

## Utilização

```xml
<View>
  <Text>
    Componente Text
  </Text>
</View>
```

## Propriedades

| Propriedade | Descrição                                                                                                                   | Type    | Default                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- |
| fontSize    | Define o tamanho da font. [Veja os valores](fontSizes.md)                                                                    | string  | xxs                       |
| fontWeight  | Define o peso da font. [Veja os valores](fontWeight.md)                                                                     | string  | regular                   |
| lineHeight  | Define a altura da linha font. [Veja os valores](border.md)                                                                 | string  | medium                    |
| textAlign   | Define o alimanhento do texto. [Veja os valores](textAlign.md)                                                              | string  | left                      |
| selectable  | Define se o texto será selecionavel.                                                                                        | boolean | false                     |
| truncate    | Define uma quantidade de linhas para mostrar o texto. Ao fim dessas linhas, caso tenha mais textos, será acresentado '...'. | number  | null                      |
| color       | Define a cor do texto. [Veja os valores](color.md)                                                                          | string  | neutracolor-brand-darkest |
| target      | Define um estilo para o texto pré determinado.                                                                              | string  | null                      |

## Opções do target

### title

O target "title" altera o Text com as seguintes propriedades de estilo:

```css
display: block
font-weight: bold
font-size: large (32px)
```

### subtitle

O target "subtitle" altera o Text com as seguintes propriedades de estilo:

```css
display: block
font-weight: bold
font-size: xs (20px)
```

### paragraph

O target "paragraph" altera o Text com as seguintes propriedades de estilo:

```css
display: block
font-size: xxs (16px)
```

### description

O target "paragraph" altera o Text com as seguintes propriedades de estilo:

```css
display: block
font-size: micro (12px)
```

## Exemplos

Abaixo alguns exemplos de uso do Text:

![view](assets/images_components/v2.13.0/text-fontSize-sm-bbcode.png)

```xml
  <View paddingY='none'>
    <Text fontSize='sm'>
      Text com fontSize [b]'sm'[/b] e [b]bbCode[/b]
    </Text>
  </View>
```

---

Text com fontSize='large' e color='amecolor-primary-light'

![view](assets/images_components/v2.13.0/text-fontSize-color.png)

```xml
<View>
  <Text fontSize='large' color='amecolor-primary-light'>
    Componente Text
  </Text>
</View>
```

---

Text com truncate={2} e fontWeight='bold'

![view](assets/images_components/v2.13.0/text-fontWeight-truncate.png)

```xml
<View>
  <Text truncate={2} fontWeight='bold'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam officiis odio tenetur. Corrupti facere adipisci veniam iure numquam, nesciunt odit voluptas excepturi totam laborum harum consequuntur saepe libero, officiis suscipit?
  </Text>
</View>
```

---

![view](assets/images_components/v2.13.0/text-bbCode-color.png)

```xml
<View>
  <Text color='pluscolor-primary-light' fontSize='xxs'>
    [i][u]Text com bbCode e color.[/u][/i]
  </Text>
</View>
```

---

É possível passar o componente Text dentro do próprio componente para alterar as propriedades de partes específicas dos textos.

![view](assets/images_components/v2.13.0/text-inside-text.png)

```xml
<Text>
  Componentes de apresentação <Text color='amecolor-primary-medium'>primária</Text> dos assuntos. Vamos começar
  pelos componentes Header, que podem ter vários tamanhos.
</Text>
```

---

Exemplo do da prop `target`. Apensar de trazer configurações pré definidas, é possível alterar propriedades colo o `color` para ser aplicado ao Componente **Text**.

![view](assets/images_components/v2.16.0/text-ex-target.png)

```xml
<View>
  <Text target='title'>Título do texto</Text>
  <Text target='subtitle' color='pluscolor-primary-dark'>
    Subtítulo com alguma informação complementar
  </Text>
  <Spacing size='xs' />
  <Text target='paragraph'>Parágrafo do corpo do texto.</Text>
  <Spacing size='xxgs' />
  <Text target='description' color='amecolor-primary-dark'>Pequena descrição</Text>
</View>
```
