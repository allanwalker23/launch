---
id: version-2.0.0-banner
title: Banner
sidebar_label: 5.1 Banner
original_id: banner
---

Utilizado para a exibição de imagens, podendo ter uma ação de toque.

## Exemplo

![banner](assets/images_components/v2.0.0/banner.jpg)



```xml
<Window>
    <Banner image={require('...path para sua imagem')} />
</Window>
```

Ou ainda:

```xml
<Window>
    <Banner image={'https://endereco.com'} />
</Window>
```

## Propriedades

### Image

Endereço HTTPS da imagem ou endereço da imagem local usando require.

### OnClick

Uma função para ser utilizada sempre que o usuário interagir com a imagem.

### Disabled

Bloqueia o usuário de interagir com a imagem.
