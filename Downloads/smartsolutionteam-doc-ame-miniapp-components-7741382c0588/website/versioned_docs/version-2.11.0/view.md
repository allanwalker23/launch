---
id: version-2.11.0-view
title: Componente View
sidebar_label: 3.3 View
original_id: view
---


Talvez um dos componentes mais úteis para construir telas, se trata da menor unidade de divisão de conteúdo.

## Exemplo

![view](assets/images_components/v2.0.0/view.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/componentes-simples-view--basic)

<br>

## Utilização

O exemplo acima foi feito com a seguinte estrutura:

```xml
<View background="neutralcolor-medium" inset="xs">
    <Paragraph>
        Este parágrafo está dentro da view
    </Paragraph>
</View>
```

## Propriedades

### Bordas

* `border`

- Type: String
- Opcional

* `borderRadius`

- Type: String
- Opcional

* `borderColor`

- Type: String
- Opcional

[Saiba mais sobre bordas](border.md)

### Cores

* `background`

- Type: String
- Opcional

[Saiba mais sobre cores](color.md)

### Direções e alinhamentos

* `direction`

- Type: String
- Opcional

* `align`

- Type: String
- Opcional

* `justify`

- Type: String
- Opcional


[Saiba mais sobre direções e alinhamentos](flex.md)

### Espaçamentos

* `inset`

- Type: String
- Opcional

* `squish`

- Type: String
- Opcional

[Saiba mais sobre espaçamentos](space.md)

### Visibilidade

* `visibility`

- Type: String
- Opcional

[Saiba mais sobre visibilidade](visibility.md)
## Outros exemplos

![view](assets/images_components/v2.0.0/view2.jpg)

O View acima foi representado pelo código abaixo

```xml
<View background="amecolor-primary-medium" squish="md" borderRadius="sm">
    <Paragraph color="neutralcolor-lightest">
        Este parágrafo está dentro da view
    </Paragraph>
</View>
```
