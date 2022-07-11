---
id: version-1.4.4-datePicker
title: DatePicker
sidebar_label: DatePicker
original_id: datePicker
---

Este componente funciona como uma área interativa, quando tocado ele invoca ou seleciona a data nativa de cada plataforma.

>  [**`DatePicker`**]() estende o componente  [**`BaseComponent`**](components_base.md), herdando suas propriedades.

Exemplo:
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
    maxDate={'2019-10-10'} 
    disabled={false}
    onChange={this.changeDate} 
    value={this.state.date}
    color={'blue'}
    borderColor={'#ededed'}
    borderRadius={30}
    format={'DD/MMM/YYYY'}>
    <Text>Selecione uma Data</Text>
</DatePicker>
```
<br>

![DatePicker](assets/old_versions/datePicker1.png)

<br>

Formatos de data aceitos (VALUE):
-   YYYY-MM-DD
-   YYYYMMDD

Formatos de data aceitos (FORMAT):
-   DD/MM/YYYY - Retorna: 12/08/2019
-   D [de] MMMM [de] YYYY - Retorna: 12 de Agosto de 2019

## Propriedades 
![](assets/badge_required.svg)<br>



Any - Conteúdo Obrigatório. 
   

Exemplo:
```jsx harmony
<DatePicker
    minDate={Date(2019, 8, 7)} 
    maxDate={'2019-10-10'} 
    disabled={false}
    onChange={this.changeDate} 
    value={this.state.date}
    color={'blue'}
    borderColor={'#ededed'}
    borderRadius={30}
    format={'DD/MMM/YYYY'}>
    <Text>Selecione uma Data</Text>
</DatePicker>
```

### minDate
 
A menor data aceitável.<br>

Aceita **Object** ou **String**, exemplo: ```minDate={Date(2020, 8, 7)}``` ou ```minDate={'2020-02-21'}```

Exemplo:
```jsx harmony
<DatePicker minDate={Date(2019, 03, 20)} />
```

### maxDate
 
A maior data aceitável.<br>

Aceita **Object** ou **String**, exemplo: ```maxDate={Date(2020, 8, 7)}``` ou ```maxDate={'2020-02-21'}```

Exemplo:
```jsx harmony
<DatePicker maxDate={'2019-10-10'} />
```

### disabled
 
Desabilita o DatePicker.<br>

Aceita somente Boolean, exemplo: ```disabled```, ```disabled={true}``` ou ```disabled={false}```

Exemplo:
```jsx harmony
<DatePicker disabled={true} />
```

### value

Permite definir uma data pelo componente pai.<br>

Aceita **Object** ou **String**, exemplo: ```value={Date(2020, 03, 20)}``` ou ```value={'2020-03-20'}```

Exemplo:
```jsx harmony
<DatePicker value={this.state.date} />
```
<br>

### format

Permite definir um formato para a data.<br>

Aceita somente **String**, exemplo: ```format={'DD-MM-YYYY'}```.

Exemplo:
```jsx harmony
<DatePicker format={'DD/MMM/YYYY'} />
```

### onChange
 
A data definida pelo DatePicker pode ser retornada ao componente pai, usando a função **`onChange`** .<br>

Aceita somente **Function**, exemplo: ```onChange={this.changeDate}```.

Exemplo:
```jsx harmony
<DatePicker onChange={this.changeDate} />
```

### borderColor
 
Permite definir a cor da borda.<br>

Aceita somente **String**, exemplo: ```borderColor={'#ededed'}```.

Exemplo:
```jsx harmony
<DatePicker borderColor={'#ededed'} />
```

### borderRadius
 
Permite definir a espessura do raio da borda 

Aceita **Number** ou **String**, exemplo: ```borderRadius={30}``` ou ```borderRadius={"10%"}```.

Exemplo:
```jsx harmony
<DatePicker borderRadius={30} />
```

### color
 
Permite definir a cor do texto da data.<br>

Aceita somente **String**, exemplo: ```color={'#f9381c}```.

Exemplo:
```jsx harmony
<DatePicker color={'blue'} />
```