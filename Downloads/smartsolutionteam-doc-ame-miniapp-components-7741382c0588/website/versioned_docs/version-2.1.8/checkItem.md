---
id: version-2.1.8-checkItem
title: CheckItem
sidebar_label: 6.9 CheckItem
original_id: checkItem
---

Caixa de seleção que permite que o usuário selecione um ou mais itens de um conjunto.

## Exemplo

![checkitem](assets/images_components/v2.0.0/checkitem.png)

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

### Text

Texto exibido ao lado do checkBox

### Checked

Exibe os estados em selecionado ou não selecionado.

### OnChange

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
