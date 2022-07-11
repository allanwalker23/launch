---
id: version-1.4.4-timePicker
title: TimePicker
sidebar_label: TimePicker
original_id: timePicker
---

Este componente funciona como uma área interativa que, quando tocada, chama ou seleciona a hora nativa (hora e minuto) de cada plataforma.

>  [**`TimePicker`**]() estende o componente  [**`BaseComponent`**](components_base.md), herdando suas propriedades.

```jsx harmony
changeTime = value => {
  console.log('retorna o valor:', value)
  this.setState({ time: value })
};
<TimePicker
    onChange={this.changeTime}
    value={'12:00'}
    disabled={false}
    minTime={'10:00'}
    maxTime={'15:00'}
/>
```

![TimePicker](assets/old_versions/timePicker.png)

<br>

## Propriedades

### minTime

O menor tempo aceitável.<br>

Aceita somente **String**, exemplo: ```minTime={"08:00"}```.

Exemplo:
```jsx harmony
<TimePicker minTime={'10:00'}/>
```

### maxTime
 
O maior tempo aceitável.<br>

Aceita somente **String**, exemplo: ```maxTime={"17:00"}```.

Exemplo:
```jsx harmony
<TimePicker maxTime={'15:00'}/>
```

### disabled

Define se o TimePicker está inativo.<br>

Aceita somente **Boolean**, exemplo: ```disabled```, ```disabled={true}``` ou ```disabled={false}```

```jsx
<TimePicker disabled={true}/>
```

### value

Permite definir um horário pelo componente pai.<br>

Aceita somente **String**, exemplo: ```value={'15:37'}```

Exemplo:
```jsx harmony
<TimePicker value={'12:00'}/>
```
<br>

### onChange

O tempo definido pelo TimePicker pode ser retornado ao componente pai, usando a função **`onChange`**.<br>

Aceita somente **Function**, exemplo: ```onChange={this.changeTime}```.

Exemplo:
```jsx harmony
<TimePicker onChange={this.changeTime}/>
```
<br>

### color

Altera a cor do texto exibido no campo Time.<br>

Aceita somente **String**, exemplo: ```color={"#fdfdcb"}```.

Exemplo:
```jsx harmony
<TimePicker color={"#acffaa"} />
```
