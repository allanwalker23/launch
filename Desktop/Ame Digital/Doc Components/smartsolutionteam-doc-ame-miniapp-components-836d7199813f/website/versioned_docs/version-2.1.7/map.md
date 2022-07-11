---
id: version-2.1.7-map
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

## Parâmetros

### apiKey

![map](assets/badge_required.svg)
<br>

Chave de Api **String** fornecida pelo Google para a exibição de um Mapa.

Exemplo:

```jsx harmony
<Map apiKey={'GOOGLE_API_KEY'} />
```

### mapOptions

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

Função a ser executada que recebe como parametro o mapa criado e os markers iniciais criados via props na construção do mapa. Use-a para armazenar o mapa e markers em um estado para usa-lo se necessario no google map.

### height

![tabNavigator](assets/badge_required.svg)

Define a altura do mapa. **Number** `height={500}`

Exemplo:

```jsx harmony
<Map height={500} />
```

### markers

![tabNavigator](assets/badge_required.svg)

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
