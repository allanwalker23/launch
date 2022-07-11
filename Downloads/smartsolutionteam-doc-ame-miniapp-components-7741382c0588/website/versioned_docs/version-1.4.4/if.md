---
id: version-1.4.4-if
title: If
sidebar_label: If
original_id: if
---

Utilizado para exibir conteúdo, de acordo com a condição.

```jsx
<If test={"algum tipo de dado"}>
  <Title size={2}>Título do Title</Title>
</If>
```

![If](assets/old_versions/if.png)

## Propriedades

### test  
![if](assets/badge_required.svg)
<br>

Tipo de condição a ser testada.<br>Realiza a validação do resultado em `true` ou `false`, e em caso verdadeiro o conteúdo é exibido.

Tipos de dados aceitos neste componente: ```String```, ```Number```, ```Array```, ```Object``` e ```Boolean```.


Conteúdo a ser exibido, ou não, de acordo com o teste.

Exemplo:
```jsx harmony
<If test={"abc" === "abc"}>
  Conteúdo a ser exibido caso o teste seja verdadeiro
</If>
```
