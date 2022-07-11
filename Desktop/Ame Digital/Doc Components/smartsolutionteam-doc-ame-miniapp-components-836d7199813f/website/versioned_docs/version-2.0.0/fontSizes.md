---
id: version-2.0.0-fontsize
title: Tamanho
sidebar_label: 2.2.2 Tamanho
original_id: fontsize
---

Geralmente o tamanho de um texto já é definido pelo componente, mas caso você queira alterar, poderá utilizar
um dos valores abaixo:

### Valores aceitos

Esta é a lista dos valores de tamanho de texto, do maior para o menor.

* Nano: `nano`
* Micro: `micro`
* Extra extra extra small: `xxxs`
* Extra extra small: `xxs`
* Extra small: `xs`
* Small: `sm`
* Medium: `md`
* Large: `large`
* Extra large: `xl`
* Extra extra large: `xxl`
* Display: `display`
* Giant: `giant`
 

### Modo de uso

Verifique se o componente utilizado aceita a propriedade **fontSize**.

Exemplo:

```xml
<Window>
    <View>
        <Paragraph fontSize="nano"> ... </Paragraph>
        <Paragraph fontSize="micro"> ... </Paragraph>
        <Paragraph fontSize="xxxs"> ... </Paragraph>
        <Paragraph fontSize="xxs"> ... </Paragraph>
        <Paragraph fontSize="xs"> ... </Paragraph>
        <Paragraph fontSize="sm"> ... </Paragraph>
        <Paragraph fontSize="md"> ... </Paragraph>
        <Paragraph fontSize="large"> ... </Paragraph>
        <Paragraph fontSize="xl"> ... </Paragraph>
        <Paragraph fontSize="xxl"> ... </Paragraph>
        <Paragraph fontSize="display"> ... </Paragraph>
        <Paragraph fontSize="giant"> ... </Paragraph>
    </View>
</Window>
```
