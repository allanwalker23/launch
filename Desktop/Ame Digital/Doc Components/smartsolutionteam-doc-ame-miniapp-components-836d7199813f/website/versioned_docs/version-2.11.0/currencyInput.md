---
id: version-2.11.0-currencyInput
title: CurrecyInput
sidebar_label: 6.5 CurrencyInput
original_id: currencyInput
---

Exibe uma entrada de valor monetário na tela.

## Exemplo

![currencyinput](assets/images_components/v2.0.0/currencyinput.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-currencyinput--basic)

<br>

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

### onChange

- Type: Function
- Opcional

Função a ser executada quando o valor é alterado.

```xml
<CurrencyInput onChange={valueInCents => console.log(valueInCents)} />
```

### prefix

- Type: String
- Opcional

Prefixo do tipo de moeda utilizada. Padrão é R$

```xml
<CurrencyInput prefix="€"/>
```

### maxLength

- Type: Number
- Opcional

Quantidade máxima de algorismos. Padrão é 9.

```xml
<CurrencyInput maxLength={8}/>
```

### value

- Type: Number
- Opcional

Valor inicial que será renderizado no componente.

### disableEdit

- Type: Boolean
- Opcional

Esconder o botão Editar

### flat

- Type: Boolean
- Opcional

Deixa o CurrencyInput com as mesmas aparências do input. Essa propriedade recebe true ou false.

### label

- Type: String
- Opcional

Aparece o label acima do input, funciona somente com a propriedade flat ativada.
