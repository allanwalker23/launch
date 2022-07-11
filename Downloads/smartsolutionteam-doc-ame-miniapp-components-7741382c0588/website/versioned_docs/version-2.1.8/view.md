---
id: version-2.1.8-view
title: Componente View
sidebar_label: 3.3 View
original_id: view
---


Talvez um dos componentes mais úteis para construir telas, se trata da menor unidade de divisão de conteúdo.

## Exemplo

![view](assets/images_components/v2.0.0/view.jpg)

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
* `borderRadius`
* `borderColor`

[Saiba mais sobre bordas](border.md)

### Cores

* `background`

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
