---
id: version-2.1.7-carousel
title: Componente Carrossel
sidebar_label: 7.4 Carousel
original_id: carousel
---


Componente auxiliar para mostrar conteúdos dentro de um carrossel.
Os conteúdos podem ser qualquer estrutura de componente (View, Banner, Card)
propriedades.

## Exemplo

![optin](assets/images_components/v2.0.0/Carousel.png)

## Utilização


Defina uma lista de componentes a serem exibidos, nesse caso colocamos o Paragraph, mas você pode inserir qualquer componente.

```xml harmony
<Carousel autoplay>
  <Paragraph>Slide 1</Paragraph>
  <Paragraph>Slide 2</Paragraph>
</Carousel>
```

## Propriedades

### Dots

Mostrar indicadores de ponto, por default eles já aparecem no carrossel mas se você quiser desabilitar é só passar false na propriedade.

```xml harmony
<Carousel dots={false}>
    ...
</Carousel>
```

### Speed

Velocidade de animação de slide / fade em milisegundos, por default está setado para 5000 milisegundos que equivale a 5 segundos.

### Autoplay

Define que os slides passem de forma automática.

### SlidesPerView

Nessa propriedade você pode passar quantos slides devem aparecer em cada bloco, por default o valor é 1.


```
slidesPerView={2}
```

### LastSlide

Função que retorna true sempre que o último slide estiver sendo exibido.

```
lastSlide={e => { console.log('lastSlide: ', e); }}
```

### FirstSlide

Função que retorna true quando o primeiro slide estiver sendo exibido.

```
firstSlide={e => { console.log('firstSlide: ', e); }}
```

### CurrentSlide

Função que retorna o index do slide que está sendo exibido.

```
currentSlide={e => { console.log('currentSlide: ', e); }}
```