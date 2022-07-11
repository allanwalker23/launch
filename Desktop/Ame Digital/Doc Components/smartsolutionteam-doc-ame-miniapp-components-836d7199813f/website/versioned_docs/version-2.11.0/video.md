---
id: version-2.11.0-video
title: Componente Video
sidebar_label: 5.5 Video
original_id: video
---

## Video

Componente para renderização de vídeo.

**No Android, mesmo a propriedade `autoPlay={true}`, para que o vídeo seja reproduzido automaticamente, é necessário que `muted={true}`**

![video](assets/images_components/v2.0.0/video.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/ilustra%C3%A7%C3%B5es-video--basic)

<br>

Exemplo:

```jsx harmony
<Video source='https://s3.amazonaws.com/calindra.com.br/ame.mp4' />
```
## Propriedades

### source

- Type: String
- Obrigatório

Aceita arquivos de vídeo em formato MP4 e alguns players externos como: YouTube, DailyMotion e Vimeo. - **String** 

Exemplo:

```jsx harmony
<Video source='https://s3.amazonaws.com/calindra.com.br/ame.mp4' />
```

### width

- Type: String or Number
- Opcional

Define a largura do componente.<br/>

Aceita **String** ou **Number** como valor, exemplo: `width="10%"` ou `width={25}`.<br>
Valor padrão: `width="100%"`

Exemplo:

```jsx harmony
<Video source='https://s3.amazonaws.com/calindra.com.br/ame.mp4' width='100%' />
```

### height

- Type: String or Number
- Opcional

Define a altura do componente.<br/>

Aceita **String** ou **Number** como valor, exemplo: `height="10%"` ou `height={25}`.<br>
Valor padrão: `height="100%"`

Exemplo:

```jsx harmony
<Video source='https://s3.amazonaws.com/calindra.com.br/ame.mp4' height='50%' />
```

### controls

- Type: Boolean
- Opcional

Se esse atributo for verdadeiro, oferecerá controles para permitir o usuário controlar a reprodução do vídeo, incluindo volume, navegação, e pausa/continuação da reprodução.<br/>

Aceita somente **Boolean** como valor, exemplo: `controls`, `controls={true}` ou `controls={false}`.<br>
Valor padrão: `controls={false}`

Exemplo:

```jsx harmony
<Video source='https://s3.amazonaws.com/calindra.com.br/ame.mp4' controls />
```

### autoPlay

- Type: Boolean
- Opcional

O vídeo é executado automaticamente.<br/>

Aceita somente **Boolean** como valor, exemplo: `autoPlay`, `autoPlay={true}` ou `autoPlay={false}`.<br>
Valor padrão: `autoPlay={false}`

Exemplo:

```jsx harmony
<Video source='https://s3.amazonaws.com/calindra.com.br/ame.mp4' autoPlay />
```

### thumbnail

- Type: String
- Opcional

Imagem para a capa do vídeo enquanto não carregado.<br/>

Aceita somente **String** como valor, exemplo: `thumbnail="capa_do_video.jpg"`.

> Essa propriedade não é aplicada em videos de players externos, como Youtube.

Exemplo:

```jsx harmony
<Video
  source='https://s3.amazonaws.com/calindra.com.br/ame.mp4'
  thumbnail='./path/image_de_capa.jpg'
/>
```

### muted

- Type: Boolean
- Opcional

Inicia o vídeo mutado.

Aceita somente **Boolean** como valor, exemplo: `muted`, `muted={true}` ou `autoPlay={false}`.<br>
Valor padrão: `muted={false}`

Exemplo:

```jsx harmony
<Video source='https://s3.amazonaws.com/calindra.com.br/ame.mp4' muted />
```
