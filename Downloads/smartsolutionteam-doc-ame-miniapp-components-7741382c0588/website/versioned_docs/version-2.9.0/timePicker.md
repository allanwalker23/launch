---
id: version-2.9.0-timePicker
title: TimePicker
sidebar_label: 6.8 TimePicker
original_id: timePicker
---

Este componente funciona como uma área interativa que, quando tocada, chama ou seleciona a hora nativa (hora e minuto) de cada plataforma.

## Exemplo

![TimePicker](assets/images_components/v2.0.0/timePicker.png)
<br>

## Utilização

```jsx harmony
changeTime = value => {
  console.log('retorna o valor:', value);
  this.setState({ time: value });
};
<TimePicker
  onChange={this.changeTime}
  value='12:00'
  disabled={false}
  minTime='10:00'
  maxTime='15:00'
/>;
```

<br>

## Propriedades

### minTime

- Type: String
- Opcional

O menor tempo aceitável.<br>

```jsx harmony
<TimePicker minTime='10:00' />
```

### maxTime

- Type: String
- Opcional

O maior tempo aceitável.<br>

```jsx harmony
<TimePicker maxTime='15:00' />
```

### disabled

- Type: Boolean
- Opcional

Define se o TimePicker está inativo.<br>

```jsx
<TimePicker disabled={true} />
```

### value

- Type: String
- Obrigatório

Permite definir um horário pelo componente pai.<br>

```jsx harmony
<TimePicker value='12:00' />
```

### onChange

- Type: Function
- Opcional

O tempo definido pelo TimePicker pode ser retornado ao componente pai, usando a função **`onChange`**.<br>

```jsx harmony
<TimePicker onChange={this.changeTime} />
```
