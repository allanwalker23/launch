---
id: version-2.11.0-subtitle
title: Subtitle
sidebar_label: 4.3 Subtitle
original_id: subtitle
---

Exibe um subtítulo na tela

## Exemplo

![subtitle](assets/images_components/v2.0.0/subtitle.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/textos-subtitle--basic)

<br>

## Utilização

```xml
<Window>
    <Subtitle size="lg"> ... </Subtitle>
    <Subtitle size="default"> ... </Subtitle>
    <Subtitle size="md"> ... </Subtitle>
    <Subtitle size="sm"> ... </Subtitle>
    <Subtitle size="xs"> ... </Subtitle>
</Window>
```

### Suporte para BBCode

O componente Subtitle aceita BBCode em seu corpo.

### Exemplo

```xml
<Window>
    <Subtitle size="lg">[b]Texto em negrito[/b]</Subtitle>
</Window>
```

## Propriedades

### size

- Type: String
- Opcional

Defina a propriedade **size** para definir o tamanho do subtitulo:

* default: `default`
* lg: `lg`
* md: `md`
* sm: `sm`
* xs: `xs`

### Outras propriedades

Além disso, também aceita todas as propriedades de texto:

* [color](colorText.md)
* [fontSize](fontSizes.md)
* [fontHeight](fontHeight.md)
* [fontWeight](fontWeight.md)
* [textAlign](textAlign.md)
