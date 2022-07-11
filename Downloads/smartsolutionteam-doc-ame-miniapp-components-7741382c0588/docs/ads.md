---
id: ads
title: Ads
sidebar_label: 5.1 Ads
---

Componente Ads para renderização de anuncios.

![ads](assets/images_components/3.0/ads.png)

## Utilização

```xml
<Ads
  path='/12345678912/circulo_3'
  size={['fluid', [76, 76]]}
  id={'div-gpt-ad-1234567891234-0'}
/>
```

## Propriedades

| Propriedade | Descrição                                               | Type   | Default | Obrigatório |
| ----------- | ------------------------------------------------------- | ------ | ------- | ----------- |
| path        | Valor do path relacionado ao anúncio a ser renderizado. | String | null    | sim         |
| size        | Tamanho desejado para renderização do anúncio.          | Array  | null    | sim         |
| id          | Valor do Id relacionado ao anúncio a ser renderizado.   | String | null    | sim         |
