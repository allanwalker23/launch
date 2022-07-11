---
id: version-1.4.4-priceformat
title: PriceFormat
sidebar_label: PriceFormat
original_id: priceformat
---

Utilizado para formatação de preços

> O componente [**`PriceFormat`**]() estende o componente [**`Text`**](text.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx
<PriceFormat amount={3658.0} currency={"r$"} />
```
![priceFormat](assets/old_versions/priceFormat.png)

## Propriedades

### amount 
![](assets/badge_required.svg)<br>
Defina a propriedade amount para enviar a quantia.<br>

Aceita somente **Number**, exemplo: ```amount={399.90}```

> O valor da propriedade `amount` deverá ser float, onde as casas decimais (caso existam) equivalem aos centavos.

### currency
 ![](assets/badge_required.svg)<br>
Defina a propriedade currency para enviar a moeda.<br>

Aceita somente **String**, exemplo: ```currency={'r$'}```


Exemplo:
```jsx harmony
<PriceFormat aumount={12.99} currency={'r$'} />
```
