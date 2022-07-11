---
id: version-2.1.8-currencyInput
title: CurrecyInput
sidebar_label: 6.5 CurrencyInput
original_id: currencyInput
---

Exibe uma entrada de valor monetário na tela.

## Exemplo

![currencyinput](assets/images_components/v2.0.0/currencyinput.jpg)

## Utilização

```xml
<CurrencyInput
    maxLength={8}
    prefix={€}
    value={459}
    onChange={value => { ... }}
/>
```

## Propriedades

### OnChange

Função a ser executada quando o valor é alterado.

```xml
<CurrencyInput onChange={valueInCents => console.log(valueInCents)} />
```

### Prefix

Prefixo do tipo de moeda utilizada. Padrão é R$

```xml
<CurrencyInput prefix="€"/>
```

### MaxLength

Quantidade máxima de algorismos. Padrão é 9.

```xml
<CurrencyInput maxLength="5"/>
```

### Value

Valor inicial que será renderizado no componente. Não é obrigatório.
