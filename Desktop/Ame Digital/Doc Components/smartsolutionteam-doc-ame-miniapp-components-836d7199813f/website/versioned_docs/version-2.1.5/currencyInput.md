---
id: version-2.1.5-currencyInput
title: CurrecyInput
sidebar_label: 6.5 CurrencyInput
original_id: currencyInput
---

Exibe uma entrada de valor monetário na tela.

## Exemplo

![currencyinput](assets/old_versions/currencyinput.png)

## Utilização

```xml
<CurrencyInput
    maxLength={8}
    value={value}
    onChange={value => { ... }}
/>
```

## Propriedades

### OnChange

Função a ser executada quando o valor é alterado.

```xml
<CurrencyInput onChange={valueInCents => console.log(valueInCents)} />
```

### Value

Valor do campo input em centavos

```xml
<CurrencyInput value={1000}/>
```

### Prefix

Prefixo do tipo de moeda utilizada.

```xml
<CurrencyInput prefix="€"/>
```

### MaxLength

Quantidade máxima de algorismos. Padrão é 9.

```xml
<CurrencyInput maxLength="5"/>
```
