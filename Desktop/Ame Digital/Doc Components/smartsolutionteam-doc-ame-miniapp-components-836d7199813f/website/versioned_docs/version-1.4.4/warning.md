---
id: version-1.4.4-warning
title: Warning
sidebar_label: Warning
original_id: warning
---

Utilizado para exibir uma mensagem de alerta.

>  [**`Warning`**]() extende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.


```jsx
<Warning>Este Warning não é manipulado pelo estado.</Warning>
```
<br>

![Warning](assets/old_versions/warning.png)

<br>

```jsx
constructor() {
super();
    this.state = {
        value: true
    };
}
 
handleRender = () => {
    this.setState({ value: !this.state.value });
};
 
<Warning display={this.state.value} onClose={this.handleRender}>
    Este Warning é manipulado pelo estado.
</Warning>

<SolidButton block size={"medium"} onClick={this.handleRender}>
    {this.state.value ? "Esconder Alerta" : "Mostrar Alerta"}
</SolidButton>
```
<br>

## Propriedades

### text

Conteúdo da mensagem, de acordo com o tipo.

Aceita **String** como valor, exemplo: ```text={"Olá"}``` 

Exemplo:

```jsx
<Warning text={"Olá"}>
</Warning>
 ```

### color 

Define uma cor para o texto e botão ```x``` (fechar).

Aceita **String** como valor, exemplo: ```color={"blue"}``` 

Exemplo: 

```jsx
<Warning color={"red"}>
</Warning>
 ```

### backgroundColor

Define uma cor para o fundo do alerta. 

Aceita **String** como valor, exemplo: ```backgroundColor={"red"}``` 

Exemplo: 

```jsx
<Warning backgroundColor={"red"}>
</Warning>
 ```

### onClose

Função a ser executada em casa o ```warning``` seja fechado através do estado (state).

Aceita **Function** como valor, exemplo: ```onClose={this.handleRender}``` 

Exemplo: 

```jsx
 <Warning display={this.state.value} onClose={this.handleRender}>
 </Warning>
 ```

### display

Exibe ou oculta o alerta através do estado (state).

Aceita **Boolean** como valor, exemplo: ```display={this.state.value}``` 

Exemplo: 

```jsx
 <Warning display={this.state.value}>
 </Warning>
 ```


--- 
