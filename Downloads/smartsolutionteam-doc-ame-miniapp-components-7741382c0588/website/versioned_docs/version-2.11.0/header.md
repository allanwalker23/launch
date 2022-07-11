---
id: version-2.11.0-header
title: Header
sidebar_label: 4.2 Header
original_id: header
---


Exibe um cabeçalho na tela

## Exemplo

![header](assets/images_components/v2.0.0/header.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/textos-header--basic)

<br>

## Utilização

```xml
<Window>
    <Header size="lg"> ... </Header>
    <Header size="default"> ... </Header>
    <Header size="md"> ... </Header>
    <Header size="sm"> ... </Header>
    <Header size="xs"> ... </Header>
</Window>
```
### Suporte para BBCode

O componente Header aceita BBCode em seu corpo.

### Exemplo

```xml
<Window>
    <Header size="lg">[b]Texto em negrito[/b]</Header>
</Window>
```

## Propriedades

### size

- Type: String
- Opcional

Defina a propriedade **size** para definir o tamanho do cabeçalho:

* default: `default`
* display: `display`
* large: `large`
* sm: `sm`
* xl: `xl`
* xs: `xs`

### Outras propriedades

Além disso, também aceita todas as propriedades de texto:

* [color](colorText.md)
* [fontSize](fontSizes.md)
* [fontHeight](fontHeight.md)
* [fontWeight](fontWeight.md)
* [textAlign](textAlign.md)
