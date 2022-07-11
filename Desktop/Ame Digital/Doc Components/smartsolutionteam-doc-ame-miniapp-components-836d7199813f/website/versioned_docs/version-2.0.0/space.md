---
id: version-2.0.0-space
title: Espaçamentos
sidebar_label: 2.1.7 Espaçamentos
original_id: space
---

## Espaçamento interno

Em determinados momentos você precisará de espaço entre o conteúdo de um componente e sua borda, para isso você precisará usar
a propriedade **inset**.

### Valores aceitos 

Abaixo segue uma lista dos valores de espaçamento para a propriedade **inset**, do maior para o menor.

* None: `none`
* Quarck: `quarck`
* Nano: `nano`
* Extra extra extra small: `xxxs`
* Extra extra small: `xxs`
* Extra small: `xs`
* Small: `sm`
* Medium: `md`
* Large: `lg`
* Extra large: `xl`

![SpacingInset](assets/images_prop_base/SpacingInset.svg)

Abaixo segue uma lista dos valores de espaçamento para a propriedade **squish**, do maior para o menor

* Quarck: `quarck`
* Nano: `nano`
* Extra small: `xs`
* Small: `sm`
* Medium: `md`
* Large: `lg`

![SpacingSquish](assets/images_prop_base/SpacingSquish.svg)

A diferença do inset para o squish fica por conta das dimensões, no inset as dimensões verticais e horizontais são iguais. Já no squish as dimensões são ligeiramente maiores na horizontal.

### Modo de uso 

Procure saber se o componente que você está trabalhando aceita a propriedade **inset** e utilize um dos valores acima descrito, veja o exemplo abaixo: 

```xml
<Window>
    <View inset="none"> ... </View>
    <View inset="quarck"> ... </View>
    <View inset="nano"> ... </View>
    <View inset="xxxs"> ... </View>
    <View inset="xxs"> ... </View>
    <View inset="xs"> ... </View>
    <View inset="sm"> ... </View>
    <View inset="md"> ... </View>
    <View inset="lg"> ... </View>
    <View inset="xl"> ... </View>
    <View squish="quarck"> ... </View>
    <View squish="nano"> ... </View>
    <View squish="xs"> ... </View>
    <View squish="sm"> ... </View>
    <View squish="md"> ... </View>
    <View squish="lg"> ... </View>
</Window>
```
