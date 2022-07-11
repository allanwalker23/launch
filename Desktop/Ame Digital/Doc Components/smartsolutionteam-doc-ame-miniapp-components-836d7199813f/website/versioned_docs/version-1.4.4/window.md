---
id: version-1.4.4-window
title: Window
sidebar_label: Window
original_id: window
---

> Utilize o componente [**`Window`**]() como um componente mestre que envolve toda tela. Seu uso é **obrigatório** e ele deverá ser o primeiro nó de todas as telas. Nunca utilize [**`Window`**]() dentro de outro [**`Window`**]().


### Importação do componente: ![window](assets/badge_required.svg)

```jsx harmony
import { Window } from 'miniapp-components'
``` 

Você deve usar o componente Window como no exemplo abaixo.


Exemplo: 

```jsx harmony
<Window>...outras tags maravilhosas</Window>
```

## Parâmetros

### pullToRefresh 

Você também pode incluir uma função a ser chamada quando o usuário usa o *pull to refresh* para atualizar.

Defina uma função (Promise) ao ser chamada quando o usuário fizer um **pull to refresh** para atualizar a ação, essa função deve retornar uma Promise, que deverá retornar sucesso para interromper o estado de atualização.

Aceita apenas **Function** como valor, exemplo:<br>
```javascript
const updateList = () => {
  return new Promise(resolve => {
      setTimeout(resolve, 5000)
  })
}
```

Exemplo:

```jsx harmony
<Window pullToRefresh={updateList}> ...outras tags maravilhosas </Window>
``` 
