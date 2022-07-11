---
id: version-2.0.0-stepper
title: Stepper
sidebar_label: Stepper
original_id: stepper
---

Usado para diminuir ou incrementar um valor.

>  Este componente será descontinuado e removido em versões futuras.



#### *Está tag é autofechável*

Exemplo:
```jsx harmony
<Stepper
  fontSize={12}
  onDecrease={this.decreaseAction}
  onIncrease={this.increaseAction}
  value={this.state.value}
  iconDecrease={require("../assets/images/icone_remover.svg")}
  iconIncrease={require("../assets/images/icone_adicionar.svg")}
/>
```

<br>

![Steper](assets/old_versions/stepper.png)

<br>

## Propriedades

### value

Valor a ser diminuído ou aumentado.<br>

Exemplo:
```jsx harmony
<Stepper value={this.state.value} />
```

### color

Muda a cor do texto do valor.<br>

Aceita somente **String**, exemplo: ```color={"#00ff88"}```

Exemplo:
```jsx harmony
<Stepper color={"red"}/>
```

### buttonTextColor 

Altera a cor do texto do botão de decremento e incremento.<br>

Aceita somente **String**, exemplo: ```buttonTextColor={"#2fafab"}```

Exemplo:
```jsx harmony
<Stepper buttonTextColor={"#2fafab"}/>
```


### fontSize

Define o tamanho da fonte dos textos e valores dos botões.<br>

Aceita **String** ou **Number**, exemplo: ```fontSize={"10%"}``` ou ```fontSize={25}```

Exemplo:
```jsx harmony
<Stepper fontSize={12}/>
```

### onIncrease

Função de incremento.<br>

Aceita somente **Function**, exemplo: ```onIcrease={this.decreaseAction}```

Exemplo:
```jsx harmony
<Stepper onIncrease={this.increaseAction}/>
```
<br>

### onDecrease

Função Decrementar.<br>

Aceita somente **Function**, exemplo: ```onDecrease={this.decreaseAction}```

Exemplo:
```jsx harmony
<Stepper onDecrease={this.decreaseAction}/>
```
<br>

### fontFamily

Fonte padrão.<br>

Aceita somente **String**, exemplo: ```fontFamily={"Ubuntu"}```

Exemplo:
```jsx harmony
<Stepper fontFamily={"Ubuntu"}/>
```

### buttonBackgroundColor

Cor de fundo do botão.<br>

Aceita somente **String**, exemplo: ```buttonBackgroundColor={"#fff000"}```.

Exemplo:
```jsx harmony
<Stepper buttonBackgroundColor={"red"} />
```
<br>

### iconDecrease

Ícone de Decrementar<br>

Aceita somente **String**, exemplo: ```iconDecrease={require("../assets/images/icone_remover.svg")}```

Exemplo:
```jsx harmony
<Stepper iconDecrease={require("../assets/images/icone_remover.svg")}/>
```
<br>

### iconIncrease

Ícone de Incrementar.<br>

Aceita somente **String**, exemplo: ```iconIncrease={require("../assets/images/icone_adicionar.svg")}```

Exemplo:
```jsx harmony
<Stepper iconIncrease={require("../assets/images/icone_adicionar.svg")}/>
```
