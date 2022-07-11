---
id: version-2.0.0-border
title: Bordas
sidebar_label: 2.1.2 Bordas
original_id: border
---

Vários componentes experimentam o uso de bordas. Em todos eles você poderá alterar propriedades básicas de borda como espessura ou cor.

## Espessura da Borda

O nome da propriedade já diz muito a respeito, você determina os valores e o componente respeita.

### Valores aceitos 

Os valores abaixo indicam espessuras de borda, começando da mais fina para a mais grossa:

* Sem borda: `none`
* Borda mais fina: `hairline` 
* Borda pouco fina: `thin` 
* Borda grossa: `thick`
* Borada mais grossa: `heavy`

![borderWidths](assets/images_prop_base/BorderWidths.svg)

### Modo de uso

Basta verificar na documentação do componente se ele aceita a propriedade **border**. 

Exemplo:

```xml
<Window>
    <View border="none">...</View>
    <View border="hairline">...</View>
    <View border="thin">...</View>
    <View border="thick">...</View>
    <View border="heavy">...</View>
</Window>
```


## Arredondamento da Borda

Nossos padrões de design possuem um conjunto de formas para arredondamento de borda. 
Eles permitem que as curvas sejam todas padronizadas. 

### Valores aceitos

Segue abaixo a lista dos valores aceitos para arredondamento de borda, mais abaixo temos um exemplo de todas as bordas.

* none: `none`
* sm: `sm`
* md: `md`
* bottom: `bottom`
* inside: `inside`
* pill: `pill`
* circular: `circular`

![borderRadius](assets/images_prop_base/BorderRadius.svg)

### Modo de uso 

Basta verificar se o componente aceita a propriedade borderRadius e usar um dos valores. 

Exemplo:

```xml
<Window>
    <View borderRadius="none"> ... </View>
    <View borderRadius="sm"> ... </View>
    <View borderRadius="md"> ... </View>
    <View borderRadius="bottom"> ... </View>
    <View borderRadius="inside"> ... </View>
    <View borderRadius="pill"> ... </View>
    <View borderRadius="circular"> ... </View>
</Window>
```
