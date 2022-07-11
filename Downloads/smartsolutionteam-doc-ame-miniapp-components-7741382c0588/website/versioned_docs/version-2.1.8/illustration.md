---
id: version-2.1.8-ilustration
title: Ilustration
sidebar_label: 5.2 Ilustration
original_id: ilustration
---

Exibe uma imagem centralizada em sua caixa

## Exemplo

![illustration](assets/images_components/v2.0.0/illustration.jpg)

## Utilização

```xml
<Window>
 <Illustration height={300} image={'https://endereco-da-imagem'} />
</Window>
```

## Propriedades

### Image

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### Width

Define a largura da caixa onde ficará a imagem.
Caso você não defina, a caixa ficará com largura de 100%.

### Height

Define a altura da caixa onde ficará a imagem.
Caso você não defina, a caixa terá altura mínima de 20.
