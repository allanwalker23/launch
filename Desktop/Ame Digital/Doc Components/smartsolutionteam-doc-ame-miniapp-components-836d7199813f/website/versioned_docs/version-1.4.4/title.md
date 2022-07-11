---
id: version-1.4.4-title
title: Title
sidebar_label: Title
original_id: title
---

Como o nome diz, são componentes que permitem incluir título.
<br>
Sempre usados para exibir um título (h1, h2, h3, h4, h5 e h6).

>  [**`Title`**]() estende o componente [**`BaseComponent`**](text.md), herdando suas propriedades.

```jsx
<Title>Vamos Começar!</Title>
```

![title](assets/old_versions/title.png)

## Parâmetros 
![](assets/badge_required.svg)<br>

Aceita apenas **String** como valor, exemplo: ```Olá, Mundo!```

Defina a propriedade children para determinar o texto do elemento.<br>

Exemplo:
```jsx harmony
<Title>Olá, Mundo!</Title>
```

### size 

Defina a propriedade size para definir o tamanho do título<br>

Aceita somente os valores: ```{1}```, ```{2}```, ```{3}```, ```{4}```, ```{5}``` ou ```{6}```. Caso nenhum parâmetro seja passado, o valor padrão é ```1```.

Exemplo:
```jsx harmony
<Title size={5}>Título com tamanho 5</Title>
```

### lineHeight 

Defina a propriedade lineHeight para determinar a altura do título<br>

Aceita **String** ou **Number** como valor, exemplo: ```lineHeight={'normal'}``` ou ```lineHeight={2.5}```.

Exemplo:
```jsx harmony
<Title lineHeight={'normal'}>
    Altura da linha com propriedade em título
</Title>
```

### fontSize 

Defina a propriedade fontSize para determinar o tamanho da fonte do título.<br>

Aceita **String** ou **Number** como valor, exemplo: ```fontSize={'10%'}```  ou ```fontSize={15}```

Exemplo:
```jsx harmony
<Title fontSize={25}>
    Tamanho do título com propriedade em número
</Title>
```

### fontWeight 

Defina a propriedade fontWeight para determinar o peso da fonte.<br>

Aceita **String** ou **Number** como valor, exemplo: ```fontWeight={'normal'}``` ou ```fontWeight={900}```

Exemplo:
```jsx harmony
<Title fontWeight={100}>Título com espessura fina</Title>
```

### fontFamily 

Defina a propriedade fontFamily para definir a família de fonte a ser utilizada<br>

Aceita somente **String**, exemplo: ```fontFamily={"Ubuntu"}```

Exemplo:
```jsx harmony
<Title fontFamily={'Open-Sans'}>
    Fonte Open-Sans no Título
</Title>
```

### color

Defina a propriedade color para determinar a cor do título.<br>

Aceita apenas **String** como valor, exemplo: ```color={'#eee'}```.

Exemplo:
```jsx harmony
<Title color={'#ededed'}>
    Este Título possui uma cor personalizada
</Title>
```

### marginTop

Defina a propriedade marginTop para determinar a margem superior<br>

Aceita **String** ou **Number** como valor, exemplo: ```marginTop={'5%'}``` ou ```marginTop={10}```.

Exemplo:
```jsx harmony
<Title marginTop={2}>
    Este Título possui uma margem superior em pixels
</Title>
```

### marginBottom

Defina a propriedade marginBottom para determinar a margem superior<br>

Aceita **String** ou **Number** como valor, exemplo: ```marginBottom={'5%'}``` ou ```marginBottom={10}```.

Exemplo:
```jsx harmony
<Title marginBottom={'10%'}>
    Este Título possui uma margem inferiro em porcentagem
</Title>
```

### marginLeft

Defina a propriedade marginLeft para determinar a margem superior<br>

Aceita **String** ou **Number** como valor, exemplo: ```marginLeft={'5%'}``` ou ```marginLeft={10}```.

Exemplo:
```jsx harmony
<Title marginLeft={'10%'}>
    Este Título possui uma margem esquerda em porcentagem
</Title>
```

### marginRight

Defina a propriedade marginRight para determinar a margem superior<br>

Aceita **String** ou **Number** como valor, exemplo: ```marginRight={'5%'}``` ou ```marginRight={10}```.

Exemplo:
```jsx harmony
<Title marginRight={2}>
    Este Título possui uma margem direita em pixels
</Title>
```