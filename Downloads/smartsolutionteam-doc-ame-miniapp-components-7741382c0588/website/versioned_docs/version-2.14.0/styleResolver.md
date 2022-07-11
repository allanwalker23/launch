---
id: version-2.14.0-styleResolver
title: StyleResolver
sidebar_label: StyleResolver
original_id: styleResolver
---

É um conjunto de métodos estáticos, que tem como objetivo ajudar no manuseio e configuração do estilo dos componentes.

Sua utilização exige que se faça a importação no arquivo js correspondente.

```jsx harmony

import {StyleResolver} from 'ame-miniapp-components'

```

## Métodos set

### setPrimaryFont(font)

 Altera o estilo de fonte padrão utilizado pelo navegador. É necessário passar uma string, definindo o estilo da fonte.

 

 Exemplo:

```jsx harmony

StyleResolver.setPrimaryFont()

```

### setPrimaryColor(color)

Altera a definição de cor primária utilizada pelo navegador. É necessário passar uma string, definindo qual a cor deve ser definida como a cor primária do navegador.

```jsx harmony

StyleResolver.setPrimaryColor()

```

### setSecondaryColor(color)

Altera a definição de cor secundária utilizada pelo navegador. É necessário passar uma string, definindo qual a cor deve ser definida como a cor secundária do navegador.

```jsx harmony

StyleResolver.setSecondaryColor()

```

### setTertiaryColor(color)

 Altera a definição de cor terciária utilizada pelo navegador. É necessário passar uma string, definindo qual a cor deve ser definida como a cor terciária do navegador.

 ```jsx harmony

StyleResolver.setTertiaryColor()

```

### setTextColor(color)

 Altera a definição de cor de texto padrão utilizada pelo navegador. É necessário passar uma string, definindo qual a cor deve ser definida como a cor de texto padrão do navegador.

 ```jsx harmony

StyleResolver.setTextColor()

```

### setBorderColor(color)
 Altera a definição de cor de borda padrão utilizada pelo navegador. É necessário passar uma string, definindo qual a cor deve ser definida como a cor de borda padrão do navegador.

 ```jsx harmony

StyleResolver.setBorderColor()

```

### setBackgroundColor(color)
 Altera a definição de cor de background padrão utilizada pelo navegador. É necessário passar uma string, definindo qual a cor deve ser definida como a cor de background padrão do navegador.

 ```jsx harmony

StyleResolver.setBackgroundColor()

```

## Métodos get

### getPrimaryFont()

 Retorna o estilo de fonte padrão, do navegador.

  ```jsx harmony

StyleResolver.getPrimaryFont()

```

### getPrimaryColor()
 Retorna a cor definida como cor primária do navegador.

  ```jsx harmony

StyleResolver.getPrimaryColor()

```

### getSecondaryColor()
 Retorna a cor definida como cor secundária do navegador.

  ```jsx harmony

StyleResolver.getSecondaryColor()

```

### getTertiaryColor()
 Retorna a cor definida como cor terciária do navegador.

  ```jsx harmony

StyleResolver.getTertiaryColor()

```

### getTextColor()

 Retorna a cor definida como cor de texto padrão do navegador.

  ```jsx harmony

StyleResolver.getTextColor()

```

### getBorderColor()
 Retorna a cor definida como cor de borda padrão do navegador.

  ```jsx harmony

StyleResolver.getBorderColor()

```

### getBackgroundColor()

 Retorna a cor definida como cor de background padrão do navegador.

  ```jsx harmony

StyleResolver.getBackgroundColor()

```

### getDisabledColor()

 Retorna a cor padronizada para elementos que assumem a propriedade disabled.

  ```jsx harmony

StyleResolver.getDisabledColor()

```

## Outros Métodos

### brightness(color, percent)

 Recebe dois parâmetros color(String) e percent(Number), os quais são utilizados para determinar o grau de brilho da cor passada.

  ```jsx harmony

StyleResolver.brightness(color, 10)

```

### darken(color, percent)
 Recebe dois parâmetros color(String) e percent(Number), os quais são utilizados para determinar o grau de contraste da cor passada.

  ```jsx harmony

StyleResolver.darken(color, 10)

```

### getColors()

Retorna um objeto com os atributos primaryColor, secondaryColor, tertiaryColor, textColor, borderColor e backgroundColor. O valor de cada propriedade é o valor que foi definido como padrão para o navegador, utilizando as funções set. Se o valor padrão do atributo não for definido através das funções set, serão utilizados valores padrões definidos internamente. é o elemento a ser exibido em uma coluna.

 ```jsx harmony

StyleResolver.getColors()

```

--- 
