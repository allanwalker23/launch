---
id: version-1.4.4-image
title: Image
sidebar_label: Image
original_id: image
---

Utilizado para a exibição de imagens.

>  [**`Image`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx harmony
<Image source={'http://lorempixel.com/300'} />
```
<br>

![Image](assets/old_versions/image.png)

<br>

## Propriedades

### source 
![Image](assets/badge_required.svg)

Link da imagem que será exibida<br>

Aceita apenas **String** como valor, exemplo: ```source={'http://lorempixel.com/300'}```

Exemplo:
```jsx harmony
<Image source={'http://lorempixel.com/300/300/food/'} />
```

### round

Exibe a imagem em formato circular<br>

Aceita apenas **Boolean** como valor, exemplo: ```round```, ```round={true}``` ou ```round={false}```

Exemplo:
```jsx harmony
<Image round source={'http://lorempixel.com/300/300/food/'}/>
```

### height

Define a altura da imagem<br>

Aceita **String** ou **Number** como valor, exemplo: ```height={'10%'}``` ou  ```height={5}```

Exemplo:
```jsx harmony
<Image height={'80%'} source={'http://lorempixel.com/300/300/food/'}/>
```

### width

Define a largura da imagem<br>

Aceita **String** ou **Number** como valor, exemplo: ```width={'10%'}``` ou  ```width={5}```


Exemplo:
```jsx harmony
<Image width={200} source={'http://lorempixel.com/300/300/food/'}/>
```

### borderRadius

Define o tamanho do arredondamento da borda<br>

Aceita **String** ou **Number** como valor, exemplo: ```borderRadius={'20%'}``` ou  ```borderRadius={10}```

Exemplo:
```jsx harmony
<Image borderRadius={'50%'} source={'http://lorempixel.com/300/300/food/'}/>
```
<br>

### onLoad 

Manipulador de evento que detecta quando as imagens concluíram o carregamento, sucesso ao carregar.<br>

Aceita **Function** como valor, exemplo: ```{e => console.log(e)}```

Exemplo:
```jsx harmony
onLoad={e => console.log(e)}
```

### onError

Manipulador de evento que detecta quando as imagens não concluíram o carregamento, falha ao carregar.<br>

Aceita **Function** como valor, exemplo: ```{e => console.log(e)}```

Exemplo:
```jsx harmony
onError={e => console.log(e)}
```
