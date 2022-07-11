---
id: version-2.18.0-carousel
title: Componente Carrossel
sidebar_label: 7.4 Carousel
original_id: carousel
---


Componente auxiliar para mostrar conteúdos dentro de um carrossel.
Os conteúdos podem ser qualquer estrutura de componente (View, Banner, Card)
propriedades.

![optin](assets/images_components/v2.0.0/Carousel.png)

 Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-carousel--basic)

## Utilização

Defina uma lista de componentes a serem exibidos, nesse caso colocamos o Paragraph, mas você pode inserir qualquer componente.

```xml harmony
<Carousel autoplay>
  <Paragraph>Slide 1</Paragraph>
  <Paragraph>Slide 2</Paragraph>
</Carousel>
```

## Propriedades

| Propriedade   | Descrição                                                                                                                           | Type     | Default | Obrigatório |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------|----------|---------|-------------|
| dots          | Mostrar indicadores de ponto                                                                                                        | Boolean  | true    | não         |
| speed         | Velocidade de animação de slide / fade em milisegundos                                                                              | Number   | 5000    | não         |
| autoplay      | Define que os slides passem de forma automática.                                                                                    | Boolean  | false   | não         |
| slidePerView  | Nessa propriedade você pode passar quantos slides devem aparecer em cada bloco                                                      | Number   | 1       | não         |
| slidePosition | Nessa propriedade você pode passar a posição em que o slide deve ser renderizado inicilamente, onde 0 significa a primeira posição. | Number   | 0       | não         |
| lastSlide     | Função que retorna true sempre que o último slide estiver sendo exibido.                                                            | Function | null    | não         |
| firstSlide    | Função que retorna true quando o primeiro slide estiver sendo exibido.                                                              | Function | null    | não         |
| currentSlide  | Função que retorna o index do slide que está sendo exibido.                                                                         | Function | null    | não         |


### Deprecated

| Propriedade   | Descrição                                                                                                                           | Type   | Default | Obrigatório |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------|--------|---------|-------------|
| slideposition | Nessa propriedade você pode passar a posição em que o slide deve ser renderizado inicilamente, onde 0 significa a primeira posição. | Number | 0       | não         |

## Exemplos

Abaixo, alguns exemplos usando o Carousel:

![Carousel](assets/images_components/v2.18.0/carousel_ex1.png)

```xml
<View>
    <Carousel>
      <img
        src={require('../assets/images/crie-um-mini-app.jpg')}
        alt='carousel'
      />
      <img
        src={require('../assets/images/crie-um-mini-app.jpg')}
        alt='carousel'
      />
    </Carousel>
  </View>
```

---

Abaixo um exemplo com todas as propriedades do Carousel.

![Carousel](assets/images_components/v2.18.0/carousel_ex2.png)

```xml
<View>
    <Carousel
      dots={false}
      speed={2000}
      autoplay={true}
      slidePerView={2}
      currentSlide={e => {
        console.log('currentSlide: ', e);
      }}
      lastSlide={e => {
        console.log('lastSlide: ', e);
      }}
      firstSlide={e => {
        console.log('firstSlide: ', e);
      }}>
        <img
          src={require('../assets/images/crie-um-mini-app.jpg')}
          alt='carousel'
        />
        <img
          src={require('../assets/images/crie-um-mini-app.jpg')}
          alt='carousel'
        />
        <img
          src={require('../assets/images/crie-um-mini-app.jpg')}
          alt='carousel'
        />
        <img
          src={require('../assets/images/crie-um-mini-app.jpg')}
          alt='carousel'
        />
      </Carousel>
  </View>
```
