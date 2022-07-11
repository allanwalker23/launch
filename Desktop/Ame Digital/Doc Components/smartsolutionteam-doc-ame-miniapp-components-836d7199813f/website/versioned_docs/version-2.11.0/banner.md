---
id: version-2.11.0-banner
title: Banner
sidebar_label: 5.1 Banner
original_id: banner
---

Utilizado para a exibição de imagens, podendo ter uma ação de toque.

## Exemplo

![banner](assets/images_components/v2.0.0/banner.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/ilustra%C3%A7%C3%B5es-banner--basic)

<br>

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