---
id: version-2.16.0-video
title: Componente Video
sidebar_label: 5.5 Video
original_id: video
---

## Video

Componente para renderização de vídeo.

![video](assets/images_components/v2.0.0/video.jpg)


## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/ilustra%C3%A7%C3%B5es-video--basic)

Exemplo:

```jsx harmony
<Video source="https://s3.amazonaws.com/calindra.com.br/ame.mp4" />
```

## Propriedades

| Propriedade | Descrição                                                                                                                                 | Type             | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| source      | Aceita arquivos de vídeo em formato MP4 e alguns players externos como: YouTube, DailyMotion e Vimeo.                                     | string           | null    |
| width       | Define a largura do componente.                                                                                                           | string ou number | null    |
| width       | Define a altura do componente.                                                                                                            | string ou number | null    |
| controls    | Permite o usuário controlar a reprodução do vídeo, incluindo volume, navegação, e pausa/continuação da reprodução.                        | boolean          | null    |
| autoPlay    | O vídeo é executado automaticamente.                                                                                                      | boolean          | null    |
| thumbnail   | Imagem para a capa do vídeo enquanto não carregado. **OBS: Essa propriedade não é aplicada em videos de players externos, como Youtube.** | string           | null    |
| muted       | Inicia o vídeo mutado.                                                                                                                    | boolean          | null    |


**No Android, mesmo a propriedade `autoPlay={true}`, para que o vídeo seja reproduzido automaticamente, é necessário que `muted={true}`**