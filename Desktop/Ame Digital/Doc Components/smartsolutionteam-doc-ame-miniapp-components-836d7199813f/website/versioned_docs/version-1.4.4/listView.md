---
id: version-1.4.4-listView
title: ListView
sidebar_label: ListView
original_id: listView
---

Este componente fornece uma lista útil para ser usada como um navegador, exibir produtos ou outras coisas.

>  [**`ListView`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

Exemplo:

```jsx harmony
<ListView
    items={[
        {
        key: '1',
        title: 'Título do Item (Opcional)',
        subtitle: 'Subtítulo (Opcional)',
        image: 'Path para Imagem (Opcional)'
        },
        //... Outros itens
        ]
    }
    backgroundColor={"#ffffff"} 
    borderColor={"#c5c5c5"} 
    color={"#353535"} 
    onItemSelect={(item, index) => {
    //...
    }}
    renderImage={(image, title) =>
        <Image source={image} />
    }
/>
```

<br>

![listView](assets/old_versions/listView.png)

<br>

## Parâmetros 

### items 
![ListView](assets/badge_required.svg)



Coleção de itens que será disposta no **ListView**.

 Aceita **Array** como valor, exemplo: 
```javascript
<ListView
    items={[
        {
            key: '1',
            title: 'Título do Item (Opcional)',
            subtitle: 'Subtítulo (Opcional)',
            image: 'Path para Imagem (Opcional)'
        },
        //... Outros itens
        ]
    }
/>
```


### backgroundColor

Aplica uma cor de fundo.

Aceita **String** como valor, exemplo: ```backgroundColor={"#ffffff"}```

Exemplo:

```jsx harmony
<ListView backgroundColor={"#ffffff"} items={[{/*items*/}]} />
```

### color

Aplica uma cor ao texto.

Aceita **String** como valor, exemplo: ```color={"#ffffff"}```

Exemplo:

```jsx harmony
<ListView color={"#ffffff"} items={[{/*items*/}]} />
```

### borderColor

Altera a cor da borda.

Aceita **String** como valor, exemplo: ```borderColor={"#ffffff"}```

Exemplo:

```jsx harmony
<ListView borderColor={"#ffffff"} items={[{/*items*/}]} />
```

### onItemSelect 

Função que é invocada a cada interação no item .

Aceita **Function** como valor, exemplo: 

```javascript
onItemSelect={
  (item, index) => {
    console.log()
  }
}
```

Exemplo:

```jsx harmony
<ListView
    onItemSelect={[
        {
            key: '1',
            title: 'Título do Item (Opcional)',
            subtitle: 'Subtítulo (Opcional)',
            image: 'Path para Imagem (Opcional)'
        }
    ]}
/>
```



### renderImage

Função de renderização de imagem. 
 
Aceita **Function** como valor, exemplo: ```renderImage={(imagem,title) => {}}```

Exemplo:

```jsx harmony
<ListView 
    items={[{/*items*/}]}
    renderImage={() => {
        return(<Image source={'https://i.picsum.photos/id/395/200/300.jpg'} />)
    }}
/> 
```
<br>

### renderTitle  

Função de renderização do título.
 
Aceita **Function** como valor, exemplo: ```renderTitle={ renderTitle(subtitle, color) => {}}```

Exemplo:

```jsx harmony
<ListView
    items={[{/*items*/}]}
    renderTitle={() => {
        return(<Title>título</Title>)
    }}
/> 
```

### renderSubtitle  

Função de renderização do subtítulo .
 
Aceita **Function** como valor, exemplo: ```rendersubTitle={ subTitle(subtitle, color) => {}}```

Exemplo:

```jsx harmony
<ListView
    items={[{/*items*/}]}
    rendersubTitle={() => {
        return(<Text>subtítulo</Text>)
    }}
/>
```
