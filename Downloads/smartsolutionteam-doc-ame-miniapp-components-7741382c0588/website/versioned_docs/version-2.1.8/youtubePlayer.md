---
id: version-2.1.8-youtubePlayer
title: YoutubePlayer
sidebar_label: 5.6 YoutubePlayer
original_id: youtubePlayer
---

Player para exibição de vídeos do Youtube, sem usar Iframes.


> [**`Este componente está disponível a partir da versão 1.4.3`**]()


```jsx
<YoutubePlayer
url="https://www.youtube.com/watch?v=XBPjVzSoepo"
playing={true}
controls={false}
volume={50}
/>
```

![youtubePlayer](assets/images_components/v2.0.0/youtubePlayer2.png)



## Propriedades

### url
![ListView](assets/badge_required.svg)

Determina o url do video a ser exibido<br>

Exemplo:
```jsx
<YoutubePlayer
url="https://www.youtube.com/watch?v=XBPjVzSoepo"/>
```


### playing

Determina se o video será executado automaticamente.

Aceita somente **Boolean** como valor, exemplo: ```playing={false}```

Exemplo:
```jsx
<YoutubePlayer
url="https://www.youtube.com/watch?v=XBPjVzSoepo"
playing={true}
/>
```


### controls

Determina se o player exibira os controles (Play/Pause, stop).

Aceita somente **Boolean** como valor, exemplo: ```controls={false}```

Exemplo:
```jsx
<YoutubePlayer
url="https://www.youtube.com/watch?v=XBPjVzSoepo"
controls={false}
/>
```

<!-- ![youtubePlayer](assets/youtubePlayer2.png) -->

### volume

Determina o valor para controle de volume do player..

Aceita somente **number** como valor, exemplo: ```volume={48}```

Exemplo:
```jsx
<YoutubePlayer
url="https://www.youtube.com/watch?v=XBPjVzSoepo"
volume={50}
/>
```
