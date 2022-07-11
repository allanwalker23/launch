---
id: version-1.4.4-view
title: Componente View
sidebar_label: View
original_id: view
---


## View

View padrão, menor unidade de divisão de conteúdo.

>  [**`View`** ]()estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

Exemplo:

```jsx harmony
<View>
    <Text>Este é um conteúdo de visualização</Text>
</View>
``` 


### style

Estilização geral para a **View**.

Aceita apenas estilos *CSS* como valor.

Exemplo:

```jsx harmony
<View style={{ backgroundColor: "green" }} >
    <Text>Este é um conteúdo de visualização</Text>
</View>
``` 

<br>

![View](assets/old_versions/view.png)

<br>

### horizontal

Altera a disposição da View para horizontal. O padrão é vertical.

Aceita **Boolean** como valor, exemplo: ```horizontal```

Exemplo:

```jsx harmony
<View horizontal>
    <Text>Este é um conteúdo de visualização</Text>
</View>
``` 

### borderRadius

Permite definir o tamanho do arredondamento da borda.

Aceita **String** ou **Number** como valor, exemplo: ```borderRadius={"5%"}``` ou ```borderRadius={4}```

Exemplo:
```jsx harmony
<View borderRadius={4}>
    <Text>Este é um conteúdo de visualização</Text>
</View>
```
<br>

### boxShadow 

É utilizado para adicionar efeitos de sombra em volta de um elemento ou Glow componente. 

Aceita **String** ou **Number** como valor, exemplo: ```boxShadow={"inherit"}``` ou ```boxShadow={60}```

Exemplo:

```jsx harmony
<View boxShadow={60}>
    <Text>Este é um conteúdo de visualização</Text>
</View>
```

<br>