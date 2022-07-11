---
id: version-1.4.4-tabNavigator
title: TabNavigator
sidebar_label: TabNavigator
original_id: tabNavigator
---

Utilizado sempre para a navegação. Os itens serão transformados em abas.<br>

>  [**`TabNavigator`**]() extende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

**• Mínimo de itens: 2**<br>
**• Máximo de itens: 6**<br>

Sendo passado número de itens inferior a 2 ou superior a 6 o componente não é exibido.

>  [**`TabNavigator`**]() extende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx harmony
<TabNavigator
  items={[
    {
      title: "Dogs",
      content: <Image source="http://lorempixel.com/500/500/food/1/" />
    },
    
    {
      title: "Cats",
      content: <Image source="http://lorempixel.com/500/500/sports/1/" />
    },
    {
      title: "Another",
      content: <Image source="http://lorempixel.com/500/500/sports/1/" />
    }
  ]}
/>
```

![tabNavigator](assets/old_versions/tabNavigator.png)

## Propriedades

### items 
![](assets/badge_required.svg)<br>


Lista de itens de conteúdos.

Exemplo:
```jsx harmony
<TabNavigator
  items={[
    {
      title: "Dogs",
      content: <Image source="http://lorempixel.com/500/500/food/1/" />
    },
    {
      title: "Cats",
      content: <Image source="http://lorempixel.com/500/500/transport/1/" />
    }
    
  ]}
/>
```

### title 
![](assets/badge_required.svg)<br>

Título para a aba de navegação.

Exemplo:
```jsx harmony
<TabNavigator
  items={[
    {
      title: "Food",
      content: <Image source="http://lorempixel.com/500/500/food/1/" />
    },
    {
      title: "Transport",
      content: <Image source="http://lorempixel.com/500/500/transport/1/" />
    },
    {
      title: "Sports",
      content: <Image source="http://lorempixel.com/500/500/sports/1/" />
    }
  ]}
/>
```

### content 
![](assets/badge_required.svg)<br>
Conteúdo a ser exibido.

Exemplo:
```jsx harmony
<TabNavigator
  items={[
    {
      title: "Food",
      content: <Image source="http://lorempixel.com/500/500/food/1/" />
    },
    {
      title: "Transport",
      content: <Image source="http://lorempixel.com/500/500/transport/1/" />
    },
    {
      title: "Sports",
      content: <Image source="http://lorempixel.com/500/500/sports/1/" />
    }
  ]}
/>
```

### tabDirection 

Defina a propriedade tabDirection define se as abas serão exibidas na parte de superior ou inferior do conteúdo.<br>

Possui o ```top``` como valor padrão.

Aceita somente os valores ```tabDirection={"top"}``` ou ```tabDirection={"bottom"}```.

```jsx harmomy
<TabNavigator
  tabDirection={"top"}
  items={[
    {
      title: "Dogs",
      content: <Image source="http://lorempixel.com/500/500/food/1/" />
    },
  ]}
/>
```


```jsx harmomy
<TabNavigator
  tabDirection={"bottom"}
  items={[
    {
      title: "Dogs",
      content: <Image source="http://lorempixel.com/500/500/food/1/" />
    },
     {
      title: "Cats",
      content: <Image source="http://lorempixel.com/500/500/food/1/" />
    },
  ]}
/>
```