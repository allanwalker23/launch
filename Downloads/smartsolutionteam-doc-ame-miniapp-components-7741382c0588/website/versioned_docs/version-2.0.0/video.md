---
id: version-2.0.0-video
title: Componente Video
sidebar_label: 5.4 Video
original_id: video
---


## Video
Componente para renderização de vídeo.



**No Android, mesmo a propriedade ```autoPlay={true}```, para que o vídeo seja reproduzido automaticamente, é necessário que ```muted={true}```**

![video](assets/images_components/v2.0.0/video.jpg)


Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4"  />
```

### source
![](assets/badge_required.svg)<br>

Aceita somente arquivo de vídeo em formato MP4 - **String**.

Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4"  />
```

### width

Define a largura do componente.<br/>

Aceita **String** ou **Number** como valor, exemplo: ```width="10%"``` ou ```width={25}```.<br>
Valor padrão: ```width="100%"```

Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4" width="100%" />
```

### height

Define a altura do componente.<br/>

Aceita **String** ou **Number** como valor, exemplo: ```height="10%"``` ou ```height={25}```.<br>
Valor padrão: ```height="100%"```

Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4" height="50%" />
```

### controls

Se esse atributo for verdadeiro, oferecerá controles para permitir o usuário controlar a reprodução do vídeo, incluindo volume, navegação, e pausa/continuação da reprodução.<br/>

Aceita somente **Boolean** como valor, exemplo: ```controls```, ```controls={true}``` ou ```controls={false}```.<br>
Valor padrão: ```controls={false}```

Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4" controls />
```

### autoPlay

O vídeo é executado automaticamente.<br/>

Aceita somente **Boolean** como valor, exemplo: ```autoPlay```, ```autoPlay={true}``` ou ```autoPlay={false}```.<br>
Valor padrão: ```autoPlay={false}```

Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4" autoPlay />
```

### thumbnail

Imagem para a capa do vídeo enquanto não carregado.<br/>

Aceita somente **String** como valor, exemplo: ```thumbnail="capa_do_video.jpg"```.

Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4" thumbnail="./path/image_de_capa.jpg" />
```

### muted

Imagem para a capa do vídeo enquanto não carregado.<br/>

Aceita somente **Boolean** como valor, exemplo: ```muted```, ```muted={true}``` ou ```autoPlay={false}```.<br>
Valor padrão: ```muted={false}```

Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4" muted />
```
