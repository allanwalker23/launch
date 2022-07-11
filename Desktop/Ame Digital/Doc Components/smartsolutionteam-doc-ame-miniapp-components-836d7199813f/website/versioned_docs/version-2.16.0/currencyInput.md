---
id: version-2.16.0-currencyInput
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

| Propriedade | Descrição                                                                                       | Type     | Default |
|-------------|-------------------------------------------------------------------------------------------------|----------|---------|
| label       | Aparece o label acima do input, funciona somente com a propriedade flat ativada.                | String   | null    |
| onChange    | Função a ser executada quando o valor é alterado.                                               | Function | null    |
| prefix      | Prefixo do tipo de moeda utilizada. Padrão é R$                                                 | string   | R$      |
| maxLength   | Quantidade máxima de algorismos.                                                                | Number   | 9       |
| value       | Valor inicial que será renderizado no componente.                                               | Number   | 0       |
| disableEdit | Esconder o botão Editar                                                                         | Boolean  | false   |
| flat        | Deixa o CurrencyInput com as mesmas aparências do input. Essa propriedade recebe true ou false. | Boolean  | false   |


## Exemplos

Abaixo, alguns exemplos usando o CurrencyInput:

<br>

![CurrencyInput](assets/images_components/v2.16.0/currency_ex1.png)

```xml
<Window>
    <CurrencyInput
        maxLength={8}
        prefix='R$'
        value={300}
        onChange={value => {
            console.log(value);
        }}
    />
<Window>
```
<br>

![CurrencyInput](assets/images_components/v2.16.0/currency_ex2.png)

```xml
<Window>
    <CurrencyInput
        flat
        maxLength={8}
        prefix='R$'
        value={0}
    />
<Window>
```