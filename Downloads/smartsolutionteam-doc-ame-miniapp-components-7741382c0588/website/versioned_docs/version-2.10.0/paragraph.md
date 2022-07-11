---
id: version-2.10.0-paragraph
title: Paragraph
sidebar_label: 4.1 Paragraph
original_id: paragraph
---

Exibe um parágrafo na tela

## Exemplo

![paragraph](assets/images_components/v2.0.0/paragraph.jpg)

## Utilização

```xml
<Window>
    <Paragraph size="lg"> ... </Paragraph>
    <Paragraph size="default"> ... </Paragraph>
    <Paragraph size="md"> ... </Paragraph>
    <Paragraph size="sm"> ... </Paragraph>
    <Paragraph size="xs"> ... </Paragraph>
</Window>
```

### Suporte para BBCode

O componente Paragraph aceita BBCode em seu corpo.

### Exemplo

```xml
<Window>
    <Paragraph size="lg">[b]Texto em negrito[/b]</Paragraph>
</Window>
```

## Propriedades

### size

- Type: String
- Opcional

Defina a propriedade **size** para definir o tamanho do paragraph:

- lg: `lg`
- default: `default`
- md: `md`
- sm: `sm`
- xs: `xs`

### selectable

Essa propriedade quando true torna o texto selecionável

### Outras propriedades

Além disso, também aceita todas as propriedades de texto:

- [color](colorText.md)
- [fontSize](fontSizes.md)
- [fontHeight](fontHeight.md)
- [fontWeight](fontWeight.md)
- [textAlign](textAlign.md)
