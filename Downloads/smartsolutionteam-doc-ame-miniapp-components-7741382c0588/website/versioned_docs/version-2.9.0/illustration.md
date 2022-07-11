---
id: version-2.9.0-ilustration
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

### image

- Type: String
- Opcional

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### base64Image

- Type: String
- Opcional

Código da imagem em Base64. Ex:

```xml
 <Illustration base64Image={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXkAAABgCA...'} />
```

### width

- Type: Number
- Opcional

Define a largura da caixa onde ficará a imagem.
Caso você não defina, a caixa ficará com largura de 100%.

### height

- Type: Number
- Opcional

Define a altura da caixa onde ficará a imagem.
Caso você não defina, a caixa terá altura mínima de 20.

### autoHeight

- Type: Boolean
- Opcional

Aplica uma largura de 100% com a altura automática.