---
id: version-2.0.0-textLink
title: TextLink
sidebar_label: 4.6 TextLink
original_id: textLink
---

Executa a função semelhante a um link html. Evite o uso excessivo.



```jsx harmony
<TextLink onClic={() => ""}>Manual do usuário</TextLink>
```
![TextLink](assets/old_versions/textLink.png)

## Propriedades 
![](assets/badge_required.svg)<br>

Texto com link. 

Exemplo:
```jsx harmony
<TextLink>Children</TextLink>
```

### onClick

Função a ser realizada. 

```jsx harmony
<TextLink onClick={() => { ...ação qualquer }}>Manual do usuário</TextLink>
```

### color

Cor do texto do link.<br>

Aceita somente **String**, exemplo: ```color={"#00aabb"}```.

```jsx harmony
<TextLink color={"#bb77aa"}>Manual do usuário</TextLink>
```

### colorHover

Cor do texto do link.<br>

Aceita somente **String**, exemplo: ```colorHover={"#fcaabb"}```.

```jsx harmony
<TextLink colorHover={"#f9a"}>Manual do usuário</TextLink>
```

### disabled

Desativa o link.<br>

Aceita somente **Boolean**, exemplo: ```disabled```, ```disabled={true}``` ou ```disabled={false}```

Exemplo:
```jsx
<TextLink disabled={true}>Manual do usuário</TextLink>
```
 
### disabledColor

Cor atribuída se o componente tiver a propriedade desativada com um valor verdadeiro (verdadeiro). 

Aceita somente **String**, exemplo: ```disabledColor={"#00aabb"}```.

```jsx harmony
<TextLink disabledColor={"green"}>Manual do usuário</TextLink>
```

### textDecoration

Aplique um dos 4 estilos: *none*, *overline*, *lineThrough* ou *underline*) ao componente. 

Exemplo:
```jsx harmony
<TextLink textDecoration={"underline"}>Manual do usuário</TextLink>
```
