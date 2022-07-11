---
id: version-2.17.0-fontsize
title: Tamanho
sidebar_label: 2.2.2 Tamanho
original_id: fontsize
---

Geralmente o tamanho de um texto já é definido pelo componente, mas caso você queira alterar, poderá utilizar
um dos valores abaixo:

### Valores aceitos

Esta é a lista dos valores de tamanho de texto, do maior para o menor.

* Nano: `nano` = 10px
* Micro: `micro` = 12px
* Extra extra extra small: `xxxs` = 14px
* Extra extra small: `xxs` = 16px
* Extra small: `xs` = 20px
* Small: `sm` = 24px
* Medium: `md` = 28px
* Large: `large` = 32px
* Extra large: `xl` = 40px
* Extra extra large: `xxl` = 52px
* Display: `display` = 80px
* Giant: `giant` = 96px
 

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
