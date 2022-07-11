---
id: version-2.0.0-timePicker
title: TimePicker
sidebar_label: 6.9 TimePicker
original_id: timePicker
---

Este componente funciona como uma área interativa que, quando tocada, chama ou seleciona a hora nativa (hora e minuto) de cada plataforma.

## Exemplo


![TimePicker](assets/old_versions/timePicker.png)
<br>

## Utilização


```jsx harmony
changeTime = value => {
  console.log('retorna o valor:', value)
  this.setState({ time: value })
};
<TimePicker
    onChange={this.changeTime}
    value="12:00"
    disabled={false}
    minTime="10:00"
    maxTime="15:00"
/>
```
<br>

## Propriedades

### MinTime

O menor tempo aceitável.<br>


```jsx harmony
<TimePicker minTime="10:00"/>
```

### MaxTime
 
O maior tempo aceitável.<br>

```jsx harmony
<TimePicker maxTime="15:00"/>
```

### Disabled

Define se o TimePicker está inativo.<br>


```jsx
<TimePicker disabled={true}/>
```

### Value

Permite definir um horário pelo componente pai.<br>

```jsx harmony
<TimePicker value="12:00"/>
```

### OnChange

O tempo definido pelo TimePicker pode ser retornado ao componente pai, usando a função **`onChange`**.<br>

```jsx harmony
<TimePicker onChange={this.changeTime}/>
```
