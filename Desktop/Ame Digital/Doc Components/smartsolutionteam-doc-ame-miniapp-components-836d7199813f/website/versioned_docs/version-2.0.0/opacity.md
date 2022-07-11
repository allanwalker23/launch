---
id: version-2.0.0-opacity
title: Opacidade
sidebar_label: 2.1.6 Opacidade
original_id: opacity
---

Em determinados momentos você pode sentir a necessidade de tornar um elemento um pouco translúcido.

Para isto você deve verificar se o componente presente aceita a propriedade **opacity**.


### Valores aceitos

Veja abaixo os valores aceitos pela propriedade opacity, começando da menor para a maior transparência:

* semiopaque: `semiopaque`
* intense: `intense`
* medium: `medium`
* light: `light`
* transparent: `transparent`

![OpacityLevels](assets/images_prop_base/OpacityLevels.svg)


### Modo de uso

Basta utilizar um dos valores acima dentro da propriedade opacity. 

Exemplo:
```xml
<Window>
    <View opacity="transparent">
        <Paragraph>Este texto está transparente</Paragraph>
    </View>
</Window>
```
