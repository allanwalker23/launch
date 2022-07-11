---
id: version-2.11.0-invoiceInput
title: Invoice Input
sidebar_label: 6.22 Invoice Input
original_id: invoiceInput
---

## Exemplo
![modal](assets/images_components/v2.0.0/invoice-input.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-invoiceinput--basic)

<br>

## Utilização

```xml
<InvoiceInput
  placeholder='0000-0000-0000-0000-0000-0000-0000-0000-0000-0000-0000'
  separator='-'
  numberSeparator={4}
  maxlength={44}
  label='Label do invoice'
/>
```

## Propriedades

### placeHolder

- Type: String
- Opcional

Essa propriedade recebe uma string com o placeholder que irá aparecer no input.

### separator

- Type: String
- Opcional

Propriedade para definir qual será o separador dos números, por default será -.

### numberSeparator

- Type: Number
- Opcional

Propriedade que define de quantos em quantos números deve ir o separador, por default será 4.

### maxlength

- Type: Number
- Opcional

Propriedade que define qual o máximo de números o input poderá receber, esse número não conta com o separador.

### label

- Type: String
- Opcional

Propriedade que recebe uma string com o label que irá aparecer acima do input, caso esteja vazio o label não irá renderizar na tela.
