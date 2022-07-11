---
id: version-2.6.0-styleResolver
title: Definindo Cores
sidebar_label: Definindo Cores
original_id: styleResolver
---

Você pode usar as cores manualmente ou importar um utilitário de cores padrão do app.

Caso queira utilizar a classe utilitária faça primeiro a importação dela no seu código:
```js
import { StyleResolver } from 'ame-miniapp-components'
```
Esta classe possui algumas cores padronizadas para uso.

## Cor do texto

A cor do texto padrão é utilizada em todo o app e você pode obter o valor fazendo o seguinte código:

```javascript
// Cor padrão do texto
StyleResolver.getTextColor()

// Cor primária padrão
StyleResolver.getPrimaryColor()

// Cor secondária padrão
StyleResolver.getSecondaryColor()

// Cor padrão de fundo
StyleResolver.getBackgroundColor()

// Cor padrão das bordas
StyleResolver.getBorderColor()
```

##### Utilização no markup

```jsx harmony
<Text color={StyleResolver.getTextColor()}></Text>
```


## Alterando as cores padrão

Da mesma forma que pode-se obter globalmente as cores, há também como alterar as cores padrão do sistema de cores.
Para isso basta utilizar as funções de alteração.

> Atenção: Ao alterar uma das cores padrão, seu efeito será repassado para todos os componentes.

```javascript
// Cor padrão do texto
StyleResolver.setTextColor('#444')

// Cor primária padrão
StyleResolver.setPrimaryColor('#990000')

// Cor secondária padrão
StyleResolver.setSecondaryColor('#009900')

// Cor padrão de fundo
StyleResolver.setBackgroundColor('#e5e5e5')

// Cor padrão das bordas
StyleResolver.setBorderColor('#555555')
```

## Obtendo variações de cor

Existem funções auxiliares para utilizar variações de cor baseados no esquema padrão.

### Função Brightness

Aumenta o brilho de uma cor baseado em percentual.

```javascript
StyleResolver.brightness(color, percent)
```

#### Parâmetros

* __Color__: (String) A cor base que você deseja alterar
* __percent__: (Number) O nível de ajuste

#### Exemplo de utilização

```javascript
const baseColor = StyleResolver.getPrimaryColor()

// Esta cor é 25% mais clara que a cor base
const baseColorBright = StyleResolver.brightness(baseColor, 25)
```

### Função Darken

Reduz o brilho de uma cor baseado em percentual.

```javascript
StyleResolver.darken(color, percent)
```

#### Parâmetros

* __Color__: (String) A cor base que você deseja alterar
* __percent__: (Number) O nível de ajuste

#### Exemplo de utilização

```javascript
const baseColor = StyleResolver.getPrimaryColor()

// Esta cor é 25% mais escura que a cor base
const baseColorDark = StyleResolver.darken(baseColor, 25)
```
