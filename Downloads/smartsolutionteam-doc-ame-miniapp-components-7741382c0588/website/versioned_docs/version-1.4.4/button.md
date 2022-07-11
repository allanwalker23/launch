---
id: version-1.4.4-button
title: Button
sidebar_label: Button
original_id: button
---

Este componente é um componente genérico no qual possui propriedades em comum para os componentes SolidButton, GhostButton e SoftButton.
Este componente não deve ser utilizado, pois sua estrutura não foi projetada para uso solo e sim através dos seus descendentes.

> [**```Button```**]() estende de [**`Touchable`**](touchable.md), herdando suas propriedades.

```jsx harmony
<GhostButton size={"small"}>Ghost</GhostButton>
```
![button-block](assets/old_versions/button-block.png)


## Propriedades

### disabled
 
Desabilita as ações do botão.
<br>

Aceita somente **Boolean**, exemplo: ```disabled```, ```disabled={true}``` ou ```disabled={false}```.

Exemplo:
```jsx harmony
<SolidButton disabled>Botão desabilitado</SolidButton>
```

### size
 
Define o tamanho do botão.
<br>

Aceita somente os valores: ```size={"small"}```, ```size={"medium"}``` e ```size={"large"}```.
<br>

Altura do botão e tamanho do texto predefinidos.
-   ```small```
    -   Fonte: 12px
    -   height: 30px
    -   width: auto
        -   *width: 30px (somente ```CircleButton```)*
        -   *iconSize: 10px (somente ```CircleButton```)*
        
-   ```medium```
    -   Fonte: 16px
    -   height: 40px
    -   width: auto
        -   *width: 40px (somente ```CircleButton```)*
        -   *iconSize: 20px (somente ```CircleButton```)*
        
-   ```large```
    -   Fonte: 20px
    -   height: 80px
    -   width: auto
        -   *width: 80px (somente ```CircleButton```)*
        -   *iconSize: 40px (somente ```CircleButton```)*
       
-   ```default```
    -   Fonte: 18
    -   height: 50px
    -   width: auto
        -   *width: 50px (somente ```CircleButton```)*
        -   *iconSize: 26px (somente ```CircleButton```)*
       



<br>
![Botões](assets/old_versions/button-size.png)

<br>

### block
 
Define o tamanho do botão em 100% de largura.
<br>

Aceita somente **Boolean**, exemplo: ```block```, ```block={true}``` ou ```block={false}```.

Exemplo:
```jsx harmony
<GhostButton block>Botão com tamanho em 100% de largura</GhostButton>
```

<br>
![Botões](assets/old_versions/button-block.png)
<br>

### backgroundColor
 
Cor de fundo do botão.
<br>

Aceita somente **String**, exemplo: ```backgroundColor={"#ffadaa"}```.

Exemplo:
```jsx harmony
<SolidButton backgroundColor={"#EF3867"}>Definindo a cor de fundo personalizada do botão.</SolidButton>
```


### backgroundColorHover

Cor de fundo do botão quando pressionado pelo usuário.
<br>

Aceita somente **String**, exemplo: ```backgroundColorHover={"#fff0a0"}```.

Exemplo:
```jsx harmony
<SolidButton backgroundColorHover={"#EF3867"}>Definindo a cor de fundo personalizada do botão.</SolidButton>
```


### backgroundColorDisabled

Cor de fundo do botão quando o botão esta inativo.
<br>

Aceita somente **String**, exemplo: ```backgroundColorDisabled={"#ececec"}```.

Exemplo:
```jsx harmony
<SolidButton backgroundColorDisabled={"#a2a2a2"}> Cor do botão inativo </SolidButton>
```

### borderRadius

Tamanho do arredondamento da borda do botão.
<br>

Aceita **Number** ou **String**, exemplo: ```borderRadius={"5%"}``` ou ```borderRadius={20}```

Exemplo:
```jsx harmony
<SoftButton borderRadius={10}> Definindo o radio da borda </SoftButton>
```

### borderWidth

Define o tamanho da borda do botão.
<br>

Aceita **Number** ou **String**, exemplo: ```borderWidth={"5%"}``` ou ```borderWidth={20}```

Exemplo:
```jsx harmony
<GhostButton borderWidth={1}> Espessura da borda </GhostButton>
```

### borderColor

Define a cor da borda
<br>

Aceita somente **String**, exemplo: ```borderColor={"#fff0a0"}```.

Exemplo:
```jsx harmony
<SolidButton borderColor={"#8a8aab"}> Cor da borda do botão </SolidButton>
```

### borderColorHover

Define a cor da borda quando pressionada.
<br>

Aceita somente **String**, exemplo: ```borderColorHover={"#a9a1ad"}```.

Exemplo:
```jsx harmony
<SolidButton borderColorHover={"#3adada"}> Cor da borda do botão quando pressionada </SolidButton>
```

### borderColorDisabled

Cor da borda quando botão está inativo.
<br>

Aceita somente **String**, exemplo: ```borderColorDisabled={"#3bad8a"}```.

Exemplo:
```jsx harmony
<SolidButton borderColorDisabled={"#f7f7f7"}> Cor da borda do botão quando inativo </SolidButton>
```

### color

Define a cor do texto do botão.
<br>

Aceita somente **String**, exemplo: ```color={"#7a6a6a"}```.

Exemplo:
```jsx harmony
<SolidButton color={"#a5a5ca"}> Cor do texto desse botão </SolidButton>
```

### colorHover

Define a cor do texto do botão quando pressionado.
<br>

Aceita somente **String**, exemplo: ```colorHover={"#0a0a0a"}```.

Exemplo:
```jsx harmony
<SolidButton colorHover={"#f10faf"}> Este botão foi pressionado </SolidButton>
```

### colorDisabled

Define a cor do texto do botão quando inativo.
<br>

Aceita somente **String**, exemplo: ```colorDisabled={"#ece2ec"}```.

Exemplo:
```jsx harmony
<SolidButton color={"#a2a2a2"}> Botão inativo. </SolidButton>
```

### fontWeight

Define a espessura da fonte do texto do botão.
<br>

Aceita **Number** ou **String**, exemplo: ```fontWeight={900}``` ou ```fontWeight={"normal"}```

Exemplo:
```jsx harmony
<SolidButton fontWeight={40}> Texto em tamanho grande </SolidButton>
```

### fontFamily

Define a família de fonte do texto.
<br>

Aceita somente **String**, exemplo: ```fontFamily={"Ubuntu"}```.

Exemplo:
```jsx harmony
<SolidButton fontFamily={"OpenSans"}> Texto com fonte Open Sans </SolidButton>
```

### icon

Atribui um ícone do botão.
<br>

Aceita somente **String**, exemplo: ```icon={"./assets/qrcode_scanner.jpeg"}```.

Exemplo:
```jsx harmony
<GhostButton icon={"./assets/qrcode_scanner.jpeg"}> Este botão possui um ícone </GhostButton>
```

![Botões](assets/old_versions/button-icon.png)


### loading

Atribui um ícone de carregamento (loading) ao botão.
<br>

Aceita somente **Boolean**, exemplo: ```loading```, ```loading={true}``` ou ```loading={false}```.

Exemplo:
```jsx harmony
<SoftButton loading> Botão em carregamento... </SoftButton>
```

![Botões](assets/old_versions/button-loading.png)


### fontSize

Define o tamanho da fonte do texto do botão.
<br>

Aceita **Number** ou **String**, exemplo: ```fontSize={25}``` ou ```fontSize={"10%"}```.

Exemplo:
```jsx harmony
<SolidButton fontSize={12}> Tamanho da fonte alterado. </SolidButton>
```

### buttonType

*Propriedade definida automaticamente para definir os estilos do botão.*
<br>

Possui dos dos valores: ```buttonType={"SolidButton"}```, ```buttonType={"GhostButton"}``` ou ```buttonType{"SoftButton"}```.

Exemplo:
```jsx harmony
<SolidButton buttonType={"SolidButton"}> Botão com propriedade definida automaticamente </SolidButton>
```

## Variações

![Botões](assets/old_versions/button-types.png)


### SolidButton

Botão primário, utilizado para chamadas de ação do usuário.<br>

> [**```SolidButton```**]() estende o componente [**`Button`**](button.md), herdando suas propriedades.<br>

```jsx
<SolidButton>Meu primeiro botão</SolidButton>
```

### GhostButton

Botão de uso secundário, para ações que são alternativas ao fluxo perfeito do usuário.<br>

> [**```GhostButton```**]() estende o componente [**`Button`**](button.md), herdando suas propriedades.<br>

```jsx harmony
<GhostButton>Botão secundário</GhostButton>
```
<br>

### SoftButton
Botão de uso proibitivo, para ações destrutivas ao fluxo perfeito do usuário.<br>

> [**```SoftButton```**]() estende o componente [**`Button`**](button.md), herdando suas propriedades.

```jsx harmony
<SoftButton>Botão proibitivo</SoftButton>
```

### CircleButton
Botão que contém somente ícone e uma ação. Sem texto, somente ilustração.

> [**`CircleButton`**]() é um componente que estende de [**`Touchable`**](touchable.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx harmony
<CircleButton icon={require("../assets/images/icone_adicionar.svg")}/>
<CircleButton icon={require("../assets/images/icone_remover.svg")}/>
```
![Botões](assets/old_versions/circleButton.png)
