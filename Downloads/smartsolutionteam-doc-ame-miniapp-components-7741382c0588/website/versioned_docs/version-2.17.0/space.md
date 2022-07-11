---
id: version-2.17.0-space
title: Espaçamentos
sidebar_label: 2.1.7 Espaçamentos
original_id: space
---

## Espaçamento

Em determinados momentos você precisará de uso de espaçamentos, para isso você poderá usar as propriedades **inset**,**padding** e **margin**.

### Valores aceitos

Abaixo segue uma lista dos valores de espaçamento para a propriedade **inset**, **padding** e **margin**, do maior para o menor.

- None: `none = 0px`
- Quarck: `quarck = 1px`
- Nano: `nano = 5px`
- Extra extra extra small: `xxxs = 10px`
- Extra extra small: `xxs = 15px`
- Extra small: `xs = 20px`
- Small: `sm = 25px`
- Medium: `md = 30px`
- Large: `lg = 40px`
- Extra large: `xl = 80px`

![SpacingInset](assets/images_prop_base/SpacingInset.svg)

Abaixo segue uma lista dos valores de espaçamento para a propriedade **squish**, do maior para o menor

**_Deprecated_**

- Quarck: `quarck` = 5px 10px
- Nano: `nano` = 5px 15px
- Extra small: `xs` = 10px 20px
- Small: `sm` = 10px 30px
- Medium: `md` = 15px 30px
- Large: `lg` = 20px 40px

![SpacingSquish](assets/images_prop_base/SpacingSquish.svg)

No squish as dimensões são ligeiramente maiores na horizontal.

### Modo de uso

Exemplo:

```xml
<Window>
    <View inset="none"> ... </View>
    <View inset="quarck"> ... </View>
    <View padding="nano"> ... </View>
    <View padding="xxxs"> ... </View>
    <View margin="xxs"> ... </View>
    <View margin="xs"> ... </View>
</Window>
```
