---
id: version-2.0.0-touchable
title: Touchable
sidebar_label: 6.4 Touchable
original_id: touchable
---

Envolva um componente com Touchable para que ele passe a ter interação.

## Propriedades

### OnClick 
![](assets/badge_required.svg)<br>

Função que será chamada ao tocar no componente.<br>

Aceita somente **Function**.


```xml
<Touchable onClick={(evt) => {console.log(evt)}}>
  Conteúdo clicável qualquer
</Touchable>
```

### Disabled

Desabilita o toque.<br>

#### Aceita os valores: 

* ```disabled```
* ```disabled={true}``` 
* ```disabled={false}```

```xml
<Touchable disabled onClick={(evt) => {console.log(evt)}}>
  Conteúdo está indisponível
</Touchable>
```

### Block

Componente atinge 100% de largura.<br>

#### Aceita os valores:

* ```block``` 
* ```block={true}``` 
* ```block={false}```

```xml
<Touchable block onClick={()=>{""}}>
  Conteúdo com 100% de largura
</Touchable>
```
### Loading

Atribui o valor de carregamento, impedindo que o botão possa receber toque.<br>

#### Aceita os valores: 

* ```loading``` 
* ```loading={true}``` 
* ```loading={false}```

```xml
<Touchable loading onClick={(evt) => {console.log(evt)}}>
  Conteúdo carregando...
</Touchable>
```
### OnTouchStart

O evento é disparado quando o usuário toca em um elemento da tela. <br>

```xml
<Touchable onTouchStart={(evt) => {console.log(evt)}}>
</Touchable>
```
### OnTouchEnd

O evento é disparado quando o usuário remove o dedo de um elemento da tela. <br>


```xml
<Touchable onTouchEnd={(evt) => {console.log(evt)}}>
</Touchable>
```

### OnTouchMove

O evento ocorre quando o usuário move o dedo pela tela. <br>



```xml
<Touchable onTouchMove={(evt) => {console.log(evt)}}>
</Touchable>
```

### OnTouchCancel

O evento é  disparado quando há toque em ações diferentes, o evento touch é interrompido. <br>


```xml
<Touchable onTouchCancel={(evt) => {console.log(evt)}}>
</Touchable>
```
