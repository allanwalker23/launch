---
id: version-2.11.0-map
title: Map
sidebar_label: 6.13 Map
original_id: map
---

Componente utilizado para a exibir a localização no mapa, a partir da API do Google Map.

Documentação da API: https://developers.google.com/maps/documentation/javascript/overview

#### _Está tag é autofechável_

Exemplo da utilização do Map

```jsx harmony
<Map
  apiKey={'GOOGLE_API_KEY'}
  mapOptions={{
    center: {
      lat: -22.94980821,
      lng: -43.19095194,
    },
    zoom: 12,
  }}
  getMap={(map, markers) => {
    this.setState({ map, markers });
  }}
  onMarkerPress={marker => {
    let info = new window.google.maps.InfoWindow({
      content: 'teste',
    });
    info.open(this.state.map, marker);
  }}
  markers={[
    {
      lat: -22.970722,
      lng: -43.182365,
      options: {
        title: 'Copacabana',
        clickable: false,
        icon:
          'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png',
      },
    },
    {
      lat: -22.9511,
      lng: -43.1809,
      options: {
        title: 'Botafogo',
        draggable: true,
      },
    },
  ]}
/>
```

<br>

![map](assets/images_components/v2.0.0/map.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-map--basic)

<br>

## Parâmetros

### apiKey

- Type: String
- Obrigatório

<br>

Chave de Api **String** fornecida pelo Google para a exibição de um Mapa.

Exemplo:

```jsx harmony
<Map apiKey={'GOOGLE_API_KEY'} />
```

### mapOptions

- Type: Object
- Opcional

Aqui vão, obrigatoriamente em formato de objeto, todas as opções para a criação do mapa, como: center, zoom, disableDefaultUI...

Exemplo:

```jsx harmony
<Map
  mapOptions={{
    center: {
      lat: -22.94980821,
      lng: -43.19095194,
    },
    zoom: 12,
    disableDefaultUI: true,
  }}
/>
```

### getMap

- Type: Function
- Opcional

Função a ser executada que recebe como parametro o mapa criado via props na construção do mapa. Use-a para armazenar o mapa em um estado para usa-lo se necessario no google map.

### height

- Type: Number
- Opcional

Define a altura do mapa. **Number** `height={500}`

Exemplo:

```jsx harmony
<Map height={500} />
```

### markers

- Type: Array
- Opcional

Lista de Pins no mapa. **Map**.

Aceita **Array** como valor e deve conter um objeto no valor dos indices,

Exemplo:

```jsx harmony
<Map
  markers={[
    {
      lat: -22.970722,
      lng: -43.182365,
      options: {
        title: 'Copacabana',
        clickable: false,
        icon:
          'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png',
      },
    },
    {
      lat: -22.9511,
      lng: -43.1809,
      options: {
        title: 'Botafogo',
        draggable: true,
      },
    },
  ]}
/>
```

As informações principai necessárias para a criação de um Marker são lat: (latitude) e lng: (longitude), porem, em options, você pode colocar todas as opções que desejar para o marker, como **title**, **clickable** e **draggable**.

### onMarkerPress

- Type: Function
- Opcional

Ação de clique em cada marker. Recebe como parametro da função um objeto **marker**. Tem como valor o marker que está sendo pressionado, para ser utilizado em funções que o requeira.

Exemplo:

```jsx harmony
onMarkerPressHandler = marker => {
  let info = new window.google.maps.InfoWindow({
    content: 'teste',
  });
  info.open(this.state.map, marker);
};

<Map onMarkerPress={this.onMarkerPressHandler} />;
```