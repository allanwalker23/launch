---
id: version-2.0.0-gradients
title: Gradientes
sidebar_label: 2.1.5 Gradientes
original_id: gradients
---

Os padrões de design estabelem que os gradientes abaixo podem ser utilizadas.

## Lista de gradientes e valores

### Cores gradientes

<div style="height: 140px; display: flex; justify-content: center; align-items: center; background-image: linear-gradient( rgba(255,45,85,1) 0%, rgba(237,0,89,1) 14%, rgba(23,0,133,1) 100% ); min-width: 240px; color: #fff; padding: 4px;">amegradient-primary</div>
<br>
<div style="height: 140px; display: flex; justify-content: center; align-items: center; background-image: linear-gradient( rgba(23,0,133,1) 0%, rgba(237,0,89,1) 78%, rgba(242,112,118,1) 100% ); min-width: 240px; color: #fff; padding: 4px;">amegradient-secondary</div>
<br>
<div style="height: 140px; display: flex; justify-content: center; align-items: center; background-image: linear-gradient( rgba(237,0,89,1) 0%, rgba(242,112,118,1) 100% ); min-width: 240px; color: #fff; padding: 4px;">amegradient-tertiary</div>


### Cores gradientes adicionais

<div style="height: 140px; display: flex; justify-content: center; align-items: center; background-image: linear-gradient( rgba(50,197,255,1) 0%, rgba(0,145,255,1) 100% ); min-width: 240px; color: #fff; padding: 4px;">plusgradient-primary</div>
<br>
<div style="height: 140px; display: flex; justify-content: center; align-items: center; background-image: linear-gradient( rgba(12,94,194,1) 0%, rgba(23,0,133,1) 100% ); min-width: 240px; color: #fff; padding: 4px;">amegradient-secondary</div>

## Onde posso utilizar estes valores?

Todos os gradientes podem ser utilizados para cor de fundo. 

### Cor de fundo

Define a cor de um elemento como uma View.

#### background

Aceita os parâmetros citados acima, **String** como valor, exemplo: ``` background="amegradient-secondary" ``` 

Exemplo:
```xml harmony
<Window>
<View background="amegradient-secondary">
</View>
 </Window>
```
