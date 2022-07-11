---
id: version-1.4.4-touchable
title: Touchable
sidebar_label: Touchable
original_id: touchable
---

São componentes que permitem a interaçãodo usuário, veja a lista abaixo

>  [**`Touchable`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.


## Propriedades

### onClick 
![](assets/badge_required.svg)<br>

Função que será chamada ao tocar no componente.<br>

Aceita somente **Function**, exemplo: ```onClick={() => console.log('Ame Digital')}```

Exemplo: 
```jsx harmony
<Touchable onClick={(evt) => {console.log(evt)}}>
  Conteúdo clicável qualquer
</Touchable>
```

### disabled

Desabilita o toque.<br>

Aceita somente **Boolean**, exemplo: ```disabled```, ```disabled={true}``` ou ```disabled={false}```

Exemplo:
```jsx harmony
<Touchable disabled onClick={(evt) => {console.log(evt)}}>
  Conteúdo está indisponível
</Touchable>
```

### block

Componente atinge 100% de largura.<br>

Aceita somente **Boolean**, exemplo: ```block```, ```block={true}``` ou ```block={false}```

Exemplo:
```jsx harmony
<Touchable block onClick={()=>{""}}>
  Conteúdo com 100% de largura
</Touchable>
```
### loading

Atribui o valor de carregamento, impedindo que o botão possa receber toque.<br>

Aceita somente **Boolean**, exemplo: ```loading```, ```loading={true}``` ou ```loading={false}```

Exemplo:
```jsx harmony
<Touchable loading onClick={(evt) => {console.log(evt)}}>
  Conteúdo carregando...
</Touchable>
```
### onTouchStart

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

O evento é disparado quando o usuário toca em um elemento da tela. <br>

Aceita somente **Function**, exemplo: ```onTouchStart={()=> {}}```

Exemplo:
```jsx harmony
<Touchable onTouchStart={(evt) => {console.log(evt)}}>
</Touchable>
```


### onTouchEnd

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

O evento é disparado quando o usuário remove o dedo de um elemento da tela. <br>

Aceita somente **Function**, exemplo: ```onTouchEnd={()=> {}}```

Exemplo:
```jsx harmony
<Touchable onTouchEnd={(evt) => {console.log(evt)}}>
</Touchable>
```

### onTouchMove

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

O evento ocorre quando o usuário move o dedo pela tela. <br>

Aceita somente **Function**, exemplo: ```onTouchMove={()=> {}}```

Exemplo:
```jsx harmony
<Touchable onTouchMove={(evt) => {console.log(evt)}}>
</Touchable>
```

### onTouchCancel

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

O evento é  disparado quando há toque em ações diferentes, o evento touch é interrompido. <br>

Aceita somente **Function**, exemplo: ```onTouchCancel={()=> {}}```

Exemplo:
```jsx harmony
<Touchable onTouchCancel={(evt) => {console.log(evt)}}>
</Touchable>
```
