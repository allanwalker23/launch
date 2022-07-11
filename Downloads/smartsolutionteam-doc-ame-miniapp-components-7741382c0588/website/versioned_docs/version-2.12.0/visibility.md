---
id: version-2.12.0-visibility
title: Visibilidade
sidebar_label: 2.1.8 Visibilidade
original_id: visibility
---

Esta propriedade define quando um componente fica visível ou invisível. 
Por padrão todos os componentes possuem este valor nulo, ficando visíveis.
Caso você queira ocultar um elemento, dado uma condição qualquer, 
é recomendável utilizar a propriedade visibility com o valor hidden.

## Propriedades


### visibility

- Type: String
- Opcional

## Valores aceitos 

* hidden: `hidden`
* visible: `visible`

## Modo de uso 

Aceita apenas um único valor, deixando o componente invisível: 

```visibility="hidden"```

Exemplo:
```xml
<Window>
    <View visibility="hidden">Este item não está visível</View>
    <View visibility="visible">Este item está visível</View>
</Window>
```
