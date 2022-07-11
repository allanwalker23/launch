---
id: version-2.1.1-datePicker
title: DatePicker
sidebar_label: 6.7 DatePicker
original_id: datePicker
---

Este componente funciona como uma área interativa, quando tocado ele invoca ou seleciona a data nativa de cada plataforma.

## Exemplo

<br>

![DatePicker](assets/old_versions/datePicker1.png)

## Utilização

<br>

```jsx harmony
constructor() {
 super() this.state = { date: '' } this.getValue = this.getValue.bind(this)}

changeDate = value => {
  console.log('retorna valor: ', value)
  this.setState({date: value})
}

<DatePicker
    onChange={this.changeDate}
    value={this.state.date}
/>

// Ou com conteúdo customizado

<DatePicker
    minDate={Date(2019, 8, 7)}
    maxDate="2019-10-10"
    disabled={false}
    onChange={this.changeDate}
    value={this.state.date}
    color="blue"
    borderColor="#ededed"
    borderRadius={30}
    format="DD/MMM/YYYY">
    <Text>Selecione uma Data</Text>
</DatePicker>
```

Formatos de data aceitos (VALUE):

- YYYY-MM-DD
- YYYYMMDD

Formatos de data aceitos (FORMAT):

- DD/MM/YYYY - Retorna: 12/08/2019
- D [de] MMMM [de] YYYY - Retorna: 12 de Agosto de 2019

## Propriedades

![](assets/badge_required.svg)<br>

Any - Conteúdo Obrigatório.

```jsx harmony
<DatePicker
  minDate={Date(2019, 8, 7)}
  maxDate='2019-10-10'
  disabled={false}
  onChange={this.changeDate}
  value={this.state.date}
  color='blue'
  borderColor='#ededed'
  borderRadius={30}
  format='DD/MMM/YYYY'>
  <Text>Selecione uma Data</Text>
</DatePicker>
```

### minDate

A menor data aceitável.<br>

```jsx harmony
<DatePicker minDate={Date(2019, 03, 20)} />
```

### maxDate

A maior data aceitável.<br>

```jsx harmony
<DatePicker maxDate='2019-10-10' />
```

### disabled

Desabilita o DatePicker.<br>

```jsx harmony
<DatePicker disabled={true} />
```

### value

Permite definir uma data pelo componente pai.<br>

```jsx harmony
<DatePicker value={this.state.date} />
```

<br>

### format

Permite definir um formato para a data.<br>

```jsx harmony
<DatePicker format='DD/MMM/YYYY' />
```

### onChange

A data definida pelo DatePicker pode ser retornada ao componente pai, usando a função **`onChange`** .<br>

```jsx harmony
<DatePicker onChange={this.changeDate} />
```
