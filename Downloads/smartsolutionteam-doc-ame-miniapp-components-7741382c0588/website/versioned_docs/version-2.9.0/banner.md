---
id: version-2.9.0-banner
title: Banner
sidebar_label: 5.1 Banner
original_id: banner
---

Utilizado para a exibição de imagens, podendo ter uma ação de toque.

## Exemplo

![banner](assets/images_components/v2.0.0/banner.jpg)



```xml
<Window>
    <Banner
      images={[
        require('../assets/images/crie-um-mini-app.jpg'),
        require('../assets/images/crie-um-mini-app.jpg'),
      ]}
    />
</Window>
```

Ou ainda:

```xml
<Window>
    <Banner images={['https://endereco.com']} />
</Window>
```

## Propriedades

### images

- Type: String
- Obrigatório

Endereço HTTPS das imagens ou endereço da imagens locais usando require.

### onClick

- Type: Function
- Opcional

Uma função para ser utilizada sempre que o usuário interagir com a imagem, essa função retorna o index da imagem dentro do array no images.

### Disabled

- Type: Boolean
- Opcional

Bloqueia o usuário de interagir com a imagem.