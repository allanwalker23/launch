---
id: version-2.18.0-timepicker
title: TimePicker
sidebar_label: 6.8 TimePicker
original_id: timepicker
---

Este componente funciona como uma área interativa que, quando tocada, chama ou seleciona a hora nativa (hora e minuto) de cada plataforma.

## Exemplo

![TimePicker](assets/images_components/v2.0.0/timePicker.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-timepicker--basic)

<br>

## Utilização

```jsx harmony
changeTime = (value) => {
  console.log("retorna o valor:", value);
  this.setState({ time: value });
};
<TimePicker
  onChange={this.changeTime}
  value="12:00"
  disabled={false}
  minTime="10:00"
  maxTime="15:00"
/>;
```

<br>

## Propriedades

| Propriedade | Descrição                                                  | Type     | Default |
|-------------|------------------------------------------------------------|----------|---------|
| value       | Permite definir um horário pelo componente pai.            | String   | null    |
| minTime     | O menor tempo aceitável.                                   | String   | null    |
| maxTime     | O maior tempo aceitável.                                   | String   | null    |
| disabled    | Define se o TimePicker está inativo.                       | Boolean  | false   |
| onChange    | Retorna o tempo definido pelo TimePicker ao componente pai | Function | false   |

