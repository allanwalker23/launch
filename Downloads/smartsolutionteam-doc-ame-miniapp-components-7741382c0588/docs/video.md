---
id: video
title: Componente Video
sidebar_label: 5.5 Video
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

| Propriedade | Descrição                                                                                                          | Type             | Default | Obrigatório |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | ---------------- | ------- | ----------- |
| source      | Aceita arquivos de vídeo em formato MP4 e player externo como o Vimeo.                                             | string           | null    | Não         |
| youtubeId   | Aceita o ID de um vídeo do youtubeId. OBS: O ID pode ser encontrado na URL do vídeo apois o caracter '='.          | string           | null    | Não         |
| width       | Define a largura do componente.                                                                                    | string ou number | 100%    | Não         |
| height      | Define a altura do componente.                                                                                     | string ou number | 100%    | Não         |
| controls    | Permite o usuário controlar a reprodução do vídeo, incluindo volume, navegação, e pausa/continuação da reprodução. | boolean          | false   | Não         |
| autoPlay    | O vídeo é executado automaticamente. OBS: Funciona apenas com a propriedade source.                                | boolean          | false   | Não         |
| thumbnail   | Imagem para a capa do vídeo enquanto não carregado. OBS: Funciona apenas com a propriedade source.                 | string           | null    | Não         |
| muted       | Inicia o vídeo mutado.                                                                                             | boolean          | false   | Não         |

**No Android, mesmo a propriedade `autoPlay={true}`, para que o vídeo seja reproduzido automaticamente, é necessário que `muted={true}`**
