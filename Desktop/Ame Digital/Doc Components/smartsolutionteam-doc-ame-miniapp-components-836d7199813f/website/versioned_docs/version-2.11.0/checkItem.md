---
id: version-2.11.0-checkItem
title: CheckItem
sidebar_label: 6.9 CheckItem
original_id: checkItem
---

Caixa de seleção que permite que o usuário selecione um ou mais itens de um conjunto.

## Exemplo

![checkitem](assets/images_components/v2.0.0/checkitem.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-checkitem--basic)

<br>

## Utilização

```xml
  <CheckItem
  onChange={e => {
  this.onChangeHandler(e)
  }}
  checked={this.state.checked}
  text="Aceito Termos" />
```

## Propriedades

### text

- Type: Sring
- Opcional
- Suporta BBCode

Texto exibido ao lado do checkBox

### Checked

- Type: Boolean
- Opcional

Exibe os estados em selecionado ou não selecionado.

### onChange

- Type: Function
- Opcional

Função executada ao escolher uma das opções .

## Outros exemplos

![checkitem](assets/images_components/v2.0.0/checkitem2.png)

O Checkitem acima foi representado pelo código abaixo

```xml
  <CheckItem
  onChange={e => {
  this.onChangeHandler(e)
  }}
  checked={this.state.checked}
  text="Aceito Termos" />
```
