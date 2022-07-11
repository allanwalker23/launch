---
id: version-1.4.4-imageBackground
title: ImageBackground
sidebar_label: ImageBackground
original_id: imageBackground
---

Utilizado para imagem de fundo.

>  [**`ImageBackground`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx
<ImageBackground
  source={"http://lorempixel.com/250/70/food/"}
  width={250}
  height={70}
  backgroundSize={"cover"}
  backgroundPosition={"center"}
  parallax={50}
/>
```

![ImageBackground](assets/old_versions/imageBackground.png)

## Propriedades

### source 
![ImageBackground](assets/badge_required.svg)

<br>

Aceita apenas **String** como valor, exemplo: ```{'http://lorempixel.com/300/300/food/'}```

Link da imagem que será exibida.

Aceita apenas **String** como valor, exemplo: ```source={'http://lorempixel.com/300'}```

Exemplo:
```jsx harmony
<ImageBackground source={'http://lorempixel.com/300/300/food/'} />
```

### backgroundSize

Aceita **String** ou **Number**, exemplo: ```{'contain'}``` ou ```{300}```

Define o tamanho a imagem de fundo.

Aceita **String** ou **Number**, exemplo: ```backgroundSize={'45%'}``` ou ```backgroundSize={300}```

Exemplo:
```jsx harmony
<Image backgroundSize={'contain'} source={'http://lorempixel.com/300/'} />
```

```jsx harmony
<ImageBackground backgroundSize={890} source={'http://lorempixel.com/300/'} />
```

### backgroundPosition

Aceita **String** ou **Number**, exemplo: ```{'25%'}``` ou ```{100}```

Determina a posição da imagem de fundo.

Aceita **String** ou **Number**, exemplo: ```backgroundPosition={'25%'}``` ou ```backgroundPosition={100}```

Exemplo:
```jsx harmony
<ImageBackground backgroundPosition={'10%'} source={'http://lorempixel.com/300/'} />
```

### backgroundAttachment

Aceita os valores: ```{'inherit'}```, ```{'scroll'}```, ```{'fixed'}``` ou ```{'local'}```.

Determina se a imagem de fundo é fixa ou não.

Aceita os valores: ```{'inherit'}```, ```{'scroll'}```, ```{'fixed'}``` ou ```{'local'}```.

Exemplo:
```jsx harmony
<ImageBackground backgroundAttachment={'fixed'} source={'http://lorempixel.com/300/'} />
```

### backgroundRepeat
Aceita os valores: ```{'repeat-x'}```, ```{'repeat-y'}```, ```{'repeat'}```, ```{'space'}```, ```{'round'}``` ou ```{'no-repeat'}```.

Define se a imagem de fundo irá se repetir.

Aceita os valores: ```{'repeat-x'}```, ```{'repeat-y'}```, ```{'repeat'}```, ```{'space'}```, ```{'round'}``` ou ```{'no-repeat'}```.

Exemplo:
```jsx harmony
<ImageBackground backgroundRepeat={'space'} source={'http://lorempixel.com/300/'} />
```

### backgroundClip
Aceita os valores: ```{'border-box'}```, ```{'padding-box'}```, ```{'content-box'}```, ```{'text'}```, ```{'inherit'}```, ```{'initial'}``` ou ```{'unset'}```.

Fundo de um elemento, seja cor ou imagem, se estende debaixo de sua borda.

Aceita os valores: ```{'border-box'}```, ```{'padding-box'}```, ```{'content-box'}```, ```{'text'}```, ```{'inherit'}```, ```{'initial'}``` ou ```{'unset'}```.


Exemplo:
```jsx harmony
<ImageBackground backgroundClip={'inherit'} source={'http://lorempixel.com/300/'} />
```

### parallax
Aceita somente **Number**, exemplo: ```{2}```

Define o fator de efeito parallax.

Aceita somente **Number**, exemplo: ```parallax={2}```

Exemplo:
```jsx harmony
<ImageBackground parallax={10} source={'http://lorempixel.com/300/'} />
```