---
id: version-2.18.0-springlayout
title: SpringLayout
sidebar_label: 7.3 SpringLayout
original_id: springlayout
---

Componente com formatação de tela padrão.

## Exemplo

![springLayout](assets/images_components/v2.0.0/springLayout.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-springlayout--basic)

<br>

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