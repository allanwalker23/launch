---
id: version-2.16.0-banner
title: Banner
sidebar_label: 5.1 Banner
original_id: banner
---

Utilizado para a exibição de imagens, podendo ter uma ação de toque.

![banner](assets/images_components/v2.0.0/banner.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/ilustra%C3%A7%C3%B5es-banner--basic)

<br>

## Utilização

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

| Propriedade | Descrição                                                                | Type             | Default |
|-------------|--------------------------------------------------------------------------|------------------|---------|
| images      | Endereço HTTPS das imagens ou endereço da imagens locais usando require. | string           | null    |
| onClick     | Retorna o index da imagem dentro do array no images.                     | Function         | null    |
| height      | Define uma altura para as imagens.'                                      | Number ou String | auto    |
| disabled    | Bloqueia o usuário de interagir com a imagem.                            | Boolean          | false   |
| autoplay    | Define que os slides passem de forma automática.                         | Boolean          | false   |

<br>

## Exemplos

<br>

![banner](assets/images_components/v2.16.0/banner_ex1.png)
```xml
<Window>
    <Banner
      images={[
       require('../assets/images/crie-um-mini-app.jpg'),
       require('../assets/images/crie-um-mini-app.jpg'),
      ]}
      height='136'
      onClick={index => console.log(index)}
    />
</Window>
```
<br>

![banner](assets/images_components/v2.16.0/banner_ex2.png)
```xml
<Window>
    <Banner
      images={['https://images.pexels...']}
      onClick={index => console.log(index)}
    />
</Window>
```
<br>

![banner](assets/images_components/v2.16.0/banner_ex3.png)
```xml
<Window>
    <Banner
      height={150}
      disabled={true}
      images={['https://images.pexels...']}
      onClick={index => console.log(index)}
    />
</Window>
```