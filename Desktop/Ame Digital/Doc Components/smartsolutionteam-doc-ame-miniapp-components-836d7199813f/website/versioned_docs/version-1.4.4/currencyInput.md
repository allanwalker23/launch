---
id: version-1.4.4-currencyInput
title: CurrecyInput
sidebar_label: CurrencyInput
original_id: currencyInput
---

Utilizado para formatação de moeda em tempo real

>  [**`CurrencyInput`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx
<CurrencyInput
  maxLength={8}
  value={"10,00"}
  onChange={value => console.log(value)}
/>
```

![CurrencyInput](assets/old_versions/currencyInput.png)


## Propriedades


### height

Define a altura do input.<br>

Aceita **String** ou **Number**, exemplo: ```height={'10%'}``` ou ```height={500}```.

Exemplo:
```jsx harmony
<CurrencyInput height={'10%'}/>
```

### onChange

Função a ser executada quando o valor é alterado.<br>

Aceita somente **Function**, exemplo: ```onChange={e => console.log(e)}```.

Exemplo:
```jsx harmony
<CurrencyInput onChange={value => console.log(value)}/>
```

### value

Valor do campo input.<br>

Aceita somente **String**, exemplo: ```value={'23,49'}```
<br>

Exemplo:
```jsx harmony
<CurrencyInput value={"10,00"}/>
```

### fontSize

Tamanho da fonte do texto.<br>

Aceita **String** ou **Number**, exemplo: ```fontSize={'25vw'}``` ou  ```fontSize={50}```.

Exemplo:
```jsx harmony
<CurrencyInput fontSize={'10%'}/>
```

### fontWeight

"Peso" da fonte do texto.<br>

Aceita **String** ou **Number**, exemplo: ```fontWeight={'bold'}``` ou  ```fontWeight={600}```

Exemplo:
```jsx harmony
<CurrencyInput fontWeight={'normal'}/>
```

### lineHeight

Altura da linha do input.<br>

Aceita **String** ou **Number**, exemplo: ```lineHeight={'10%'}``` ou  ```lineHeight={5}```.

Exemplo:
```jsx harmony
<CurrencyInput lineHeight={'10vw'}/>
```

### prefix

Prefixo do tipo de moeda utilizada.<br>

Aceita somente **String**, exemplo: ```prefix={'U$D'}```.

Exemplo:
```jsx harmony
<CurrencyInput prefix={'€'}/>
```

### maxLength

Quantidade máxima de algorismos.<br>

Aceita somente String, exemplo: ```maxLength={'4'}```.

Exemplo:
```jsx harmony
<CurrencyInput maxLength={'5'}/>
```