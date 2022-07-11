---
id: version-2.11.0-priceformat
title: PriceFormat
sidebar_label: 4.4 PriceFormat
original_id: priceformat
---

Utilizado para formatação de preços, não possui estilo próprio, ela usará o estilo da tag pai.

## Exemplo

![priceformat](assets/images_components/v2.0.0/priceformat.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/textos-priceformat--basic)

<br>

## Utilização

```xml
<Header>
    <PriceFormat amount={156699} currency="USD " />
</Header>
```

Ou ainda:

```xml
<Paragraph>
    <PriceFormat amount="156699"/>
</Paragraph>
```

## Propriedades

### amount

- Type: String
- Opcional

Defina a propriedade amount para enviar a quantia em centavos.
Pode ser enviada no formato Number ou String.

### currency

- Type: String
- Opcional

Informa o tipo de moeda.
Aceita somente uma String.
