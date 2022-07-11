---
id: version-2.9.0-springLayout
title: SpringLayout
sidebar_label: 7.3 SpringLayout
original_id: springLayout
---

Componente com formatação de tela padrão.

## Exemplo

![springLayout](assets/images_components/v2.0.0/springLayout.png)

## Utilização

```xml
 <SpringLayout
head={(
<Paragraph>Cabeçalho</Paragraph>
)}
body={(
    <Group>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur dignissimos earum ex fugiat illum nulla placeat quae quos repellat tenetur? Dicta, earum?</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur dignissimos earum ex fugiat illum nulla placeat quae quos repellat tenetur? Dicta, earum?</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur dignissimos earum ex fugiat illum nulla placeat quae quos repellat tenetur? Dicta, earum?</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur dignissimos earum ex fugiat illum nulla placeat quae quos repellat tenetur? Dicta, earum?</Paragraph>
    </Group>
)}
footer={(
    <Paragraph>Rodapé</Paragraph>
)}
/>
```


## Propriedades

### head

- Type: String
- Opcional

Elemento que componhe o cabeçalho da tela.

### body

- Type: String
- Opcional

Corpo de um texto descritivo.

### footer

- Type: String
- Opcional

Elemento que componhe o rodapé da tela.
