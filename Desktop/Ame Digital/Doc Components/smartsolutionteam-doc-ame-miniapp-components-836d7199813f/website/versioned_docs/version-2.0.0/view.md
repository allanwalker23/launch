---
id: version-2.0.0-view
title: Componente View
sidebar_label: 3.3 View
original_id: view
---


Talvez um dos componentes mais úteis para construir telas, se trata da menor unidade de divisão de conteúdo.

## Exemplo

![view](assets/old_versions/view.png)

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

![view](assets/old_versions/view2.jpg)

O View acima foi representado pelo código abaixo

```xml
<View background="amecolor-primary-medium" squish="md" borderRadius="sm">
    <Paragraph color="neutralcolor-lightest">
        Este parágrafo está dentro da view
    </Paragraph>
</View>
``` 
