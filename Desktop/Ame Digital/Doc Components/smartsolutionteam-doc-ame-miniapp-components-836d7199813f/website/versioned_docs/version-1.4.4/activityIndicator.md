---
id: version-1.4.4-activityIndicator
title: ActivityIndicator
sidebar_label: ActivityIndicator
original_id: activityIndicator
---

Utilizado para exibir um spinner quando estiver em um loader.

> [**`ActivityIndicator`**]() extende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx
<ActivityIndicator 
    color={'#EF3867'}
    direction={"cw"} 
    loading={true} />
```
![Activity Indicator](assets/old_versions/activityIndicator.png)


## Propriedades

### loading 

Realiza a exibição do componente. 

Aceita somente **Boolean** como valor, exemplo: ```loading={false}``` 

Exemplo: 

```jsx
<ActivityIndicator loading={true} />
```

### size 

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

altera o tamanho do componente. 

Aceita somente os valores: ```size={"small"}```, ```size={"medium"}``` e ```size={"large"}```.

<br>

Tamanho do componente.
-   ```small```   
    -   height: 15px
    -   width: 15px
       
        
-   ```medium```
   
    -   height: 65px
    -   width: 65px
       
        
-   ```large```
   
    -   height: 95px
    -   width: 95px
       
       
-   ```default```
   
    -   height: 35px
    -   width: 35px
     
 

Exemplo: 

```jsx
<ActivityIndicator size={'medium'} />
```

### color

Cor do spinner load.


Aceita somente **String** como valor, exemplo: ```color={"red"}``` 

Exemplo: 

```jsx
<ActivityIndicator color={"red"} />
```

### direction

Direção na qual o spinner load irá girar. ```cw```: clockwise e ```ccw```: counterclockwise.


Aceita somente **String**  como valor, exemplo: ```direction={"cw"}``` 

Exemplo: 

```jsx
<ActivityIndicator direction={"cw"} />
```
