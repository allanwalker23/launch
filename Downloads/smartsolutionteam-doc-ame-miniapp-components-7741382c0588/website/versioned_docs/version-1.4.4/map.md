---
id: version-1.4.4-map
title: Map
sidebar_label: Map
original_id: map
---

Componente utilizado para a exibir a localização no mapa.

>  [**`Map`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

Exemplo da utilização do Map

```jsx harmony
<Map
    apiKey={"GOOGLE_API_KEY"}
    center={[-22.94980821, -43.19095194]}
    height={500}
    markers={[
        {
            lat: - 22.970722,
            lng: - 43.182365,
            pin: (
                <View>
                    <Image source={require('.././assets/images/Piname.svg')}
                        width={16} height={16} />
                </View>
            ),
            legend: 'Copacabana',
        },
    ]}
/>
``` 
<br>

![map](assets/old_versions/map.png)

<br>

## Parâmetros

### apiKey  
![map](assets/badge_required.svg)
<br> 


Chave de Api **String** fornecida pelo Google para a exibição de um Mapa.

Exemplo:

```jsx harmony
 <Map apiKey={"GOOGLE_API_KEY"} />
```

### zoom

Define o zoom no mapa. **Number** ```zoom={8}```

Exemplo:

```jsx harmony
 <Map zoom={12} />
```

### center  
![tabNavigator](assets/badge_required.svg)


Define a geolocalização inicial no mapa. **Number** ```center={[-22.94980821, -43.19095194]}```

Exemplo:

```jsx harmony
 <Map center={[-22.94980821, -43.19095194]} />
```

### height  
![tabNavigator](assets/badge_required.svg)


Define a altura do mapa. **Number** ```height={500}```

Exemplo:

```jsx harmony
 <Map  height={500} />
```


### markers  
![tabNavigator](assets/badge_required.svg)


Lista de Pins no mapa. **Map**.

 Aceita **Array** como valor, 
 
 Exemplo: 

```jsx harmony
<Map
    markers={[
        {
            lat: - 22.970722,
            lng: - 43.182365,
            pin: (
                //conteúdo a ser inserido.
            ),
            legend: 'Copacabana',
        },                                
    ]}
/>
```

### onMarkerPress

Ação de clique em cada marker:

Exemplo:

```jsx harmony
onMarkerPressHandler = (item) => {
        console.log('onMarkerPress Clicked', item)
}

<Map onMarkerPress={this.onMarkerPressHandler} />
```

### lat e lng
![Map](assets/badge_required.svg)
<br> 
<br>

Define a latitude e longitude de cada Pin no mapa. **number**. Exemplo: ```lat: - 22.970722, lng: - 43.182365,```
 
Exemplo: 

```jsx harmony
<Map
    markers={[
        {                
            lat: - 22.970722,
            lng: - 43.182365,
            pin: (
                //conteúdo a ser inserido.
            ),
            legend: 'Copacabana',
        },                                
    ]}
/>
```

### pin

Agrupa a view com a legenda ou os Pins **Any** 

Exemplo:

```jsx harmony
<Map
    markers={
        [
            {
                lat: - 22.970722,
                lng: - 43.182365,
                pin: (
                   <View>
                        <Image source={require('.././assets/images/Piname.svg')}
                            width={16}
                            height={16}
                        />
                    </View>
                ),
                legend: 'Copacabana',
            },
        ]}
/>
```

### legend 

Legenda exibida em cada Pin **Any** 

Exemplo:

```jsx harmony
<Map
    markers={[
        {
            lat: - 22.970722,
            lng: - 43.182365,
            pin: (
                //conteúdo a ser inserido.
            ),
            legend: 'Copacabana',
        },                                
    ]}
/>
```
