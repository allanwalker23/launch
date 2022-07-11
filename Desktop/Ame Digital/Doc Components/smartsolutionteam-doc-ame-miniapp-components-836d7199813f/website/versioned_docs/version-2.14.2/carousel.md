---
id: version-2.14.4-carousel
title: Componente Carrossel
sidebar_label: 7.4 Carousel
original_id: carousel
---


Componente auxiliar para mostrar conteúdos dentro de um carrossel.
Os conteúdos podem ser qualquer estrutura de componente (View, Banner, Card)
propriedades.

## Exemplo

![optin](assets/images_components/v2.0.0/Carousel.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-carousel--basic)

<br>

## Utilização


Defina uma lista de componentes a serem exibidos, nesse caso colocamos o Paragraph, mas você pode inserir qualquer componente.

```xml harmony
<Carousel autoplay>
  <Paragraph>Slide 1</Paragraph>
  <Paragraph>Slide 2</Paragraph>
</Carousel>
```

## Propriedades

### dots

- Type: Boolean
- Opcional

Mostrar indicadores de ponto, por default eles já aparecem no carrossel mas se você quiser desabilitar é só passar false na propriedade.

```xml harmony
<Carousel dots={false}>
    ...
</Carousel>
```

### speed

- Type: Number
- Opcional

Velocidade de animação de slide / fade em milisegundos, por default está setado para 5000 milisegundos que equivale a 5 segundos.

### autoplay

- Type: Boolean
- Opcional

Define que os slides passem de forma automática.

### slidePerView

- Type: Number
- Opcional

Nessa propriedade você pode passar quantos slides devem aparecer em cada bloco, por default o valor é 1.


```
slidePerView={2}
```

### slideposition

**_Deprecated_**

> Em versões futuras esta propriedade será descontinuada!

- Type: Number
- Opcional

Nessa propriedade você pode passar a posição em que o slide deve ser renderizado inicilamente, onde 0 significa a primeira posição.

### slidePosition

- Type: Number
- Opcional

Nessa propriedade você pode passar a posição em que o slide deve ser renderizado inicilamente, onde 0 significa a primeira posição.

```
slideposition={1}
```

### lastSlide

- Type: Function
- Opcional

Função que retorna true sempre que o último slide estiver sendo exibido.

```
lastSlide={e => { console.log('lastSlide: ', e); }}
```

### firstSlide

- Type: Function
- Opcional

Função que retorna true quando o primeiro slide estiver sendo exibido.

```
firstSlide={e => { console.log('firstSlide: ', e); }}
```

### currentSlide

- Type: Function
- Opcional

Função que retorna o index do slide que está sendo exibido.

```
currentSlide={e => { console.log('currentSlide: ', e); }}
```