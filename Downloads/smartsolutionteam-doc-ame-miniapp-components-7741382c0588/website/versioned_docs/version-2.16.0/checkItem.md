---
id: version-2.16.0-checkItem
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

| Propriedade | Descrição                                           | Type     | Default |
|-------------|-----------------------------------------------------|----------|---------|
| text        | Texto exibido ao lado do checkBox.                  | String   | null    |
| Checked     | Exibe os estados em selecionado ou não selecionado. | Boolean  | false   |
| onChange    | Função executada ao escolher uma das opções .       | Function | false   |


## Exemplos

Abaixo, alguns exemplos usando o CurrencyInput:

<br>

Exemplo com o uso do bbCode na propriedade text.

![checkitem](assets/images_components/v2.16.0/checkItem_x1.png)

```xml
  <Window>
    <CheckItem
      checked={this.state.checkedSeconds}
      text={'[b][color=categorycolor-success]Aceito Termos[/color][/b]'}
      onChange={e => this.setState({ checkedSeconds: e })}
    />
  </Window>
```
