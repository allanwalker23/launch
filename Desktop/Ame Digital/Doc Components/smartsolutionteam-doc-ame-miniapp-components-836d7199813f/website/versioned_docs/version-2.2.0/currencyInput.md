---
id: version-2.2.0-currencyInput
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

### DisableEdit

Booleano para esconder o botão Editar

### Flat

Deixa o CurrencyInput com as mesmas aparências do input. Essa propriedade recebe true ou false.

### Label

Aparece o label acima do input, funciona somente com a propriedade flat ativada.
