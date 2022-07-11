---
id: version-1.4.4-baseComponent
title: Base Component
sidebar_label: Base Component
original_id: baseComponent
---

No decorrer da documentação você irá notar que uma grande parte dos componentes
tem como base este componente. Com isso, cada componente já traz uma série de
atributos e comportamentos padrões.

Você não conseguirá utilizar BaseComponent diretamente em seu projeto, mas
estará utilizando ele de forma indireta na maioria dos componentes que utilizará
futuramente.

## Cores

Todos os componentes possuem o padrão visual já usado no super-app e apenas algumas leves alterações são necessárias
para obter sucesso na concepção do seu app. 

As cores podem ser definidas através de algumas propriedades mensionadas abaixo:<br>

### color
Aceita apenas String como valor, exemplo: ```#eee```

Defina a propriedade color para determinar uma cor ao texto do elemento.<br>
Exemplo:
```jsx harmony
<Text color={'#444'}>Um texto colorido</Text>
```
### backgroundColor
Aceita valores de cor como String, exemplo: ```{'#444'}```

Exemplo:
```jsx harmony
<View backgroundColor={'#e5e5e5'}>
    <Text>Este texto possui um fundo colorido</Text>
</View>
```
### overflow

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

Aceita apenas String como valor, exemplo: ```{'visible'}```, ```{'hidden'}```,```{'scroll'}```,```{'auto'}``` ou ```{'inherit'}``` 
Determina se um elemento deve exibir ou não uma barra de rolagem.<br>
Exemplo:
```jsx harmony

<View overflow={'visible'}>
<Text color={'#444'}>Um texto</Text>
<Text color={'#444'}>Outro texto</Text>
<Text color={'#444'}>Um texto</Text>
<Text color={'#444'}>outro texto</Text>
</View>

```
### backgroundImage
Aceita valores em String para endereços de imagem ou arquivos dentro do projeto usando ```require()```

Exemplos:
```jsx harmony
<View backgroundImage={'https://endereco.com/imagemqualquer.jpg'}>
    <Text>Este texto possui um fundo com imagem da web</Text>
</View>
```
```jsx harmony
<View backgroundImage={require('../imagens/minhaimagem.jpg')}>
    <Text>Este texto possui um fundo com imagem interna</Text>
</View>
```
### backgroundRepeat
Aceita valores de cor como String, exemplo: ```{'#444'}```

Exemplo:
```jsx harmony
<View backgroundColor={'#e5e5e5'}>
    <Text>Este texto possui um fundo colorido</Text>
</View>
```


## Margens e Afastamentos

As margens e afastamentos são utilizados para gerar os espaços vazios fora e dentro dos elementos.<br>
São esses espaços vazios que permitem orientar melhor o uso do mini-app.
Veja abaixo as propriedades utilizadas:

### margin
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo margin define o valor de afastamento em todas as direções de uma só vez.
Qualquer valor de propriedade de margem mais específico sobrescreve o valor da propriedade margin.

Exemplo de uso:
```jsx harmony
<View margin={10}>
    <Text>Conteúdo com margem</Text>
</View>
```

### marginHorizontal
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo marginHorizontal define o valor de afastamento esquerdo e direito de uma só vez.
Qualquer valor de propriedade de margem mais específico sobrescreve o valor da propriedade margin.

Exemplo de uso:
```jsx harmony
<View margin={10} marginHorizontal={20}>
    <Text>As margens horizontais sobrescrevem as margens padrão</Text>
</View>
```

### marginVertical
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo marginVertical define o valor de afastamento superior e inferior de uma só vez.
Qualquer valor de propriedade de margem mais específico sobrescreve o valor da propriedade margin.

Exemplo de uso:
```jsx harmony
<View margin={10} marginVertical={20}>
    <Text>As margens verticais sobrescrevem as margens padrão</Text>
</View>
```

### marginLeft
Aceita valores númericos de unidade e também valores String como por exemplo: ```"50%"``` ou ```"10vw"```

O atributo marginLeft define o valor de afastamento esquerdo.

Exemplo de uso:
```jsx harmony
<View margin={10} marginLeft={50}>
    <Text>A margem à esquerda sobrescreve as margens padrão</Text>
</View>
```

### marginRight
Aceita valores númericos de unidade e também valores String como por exemplo: ```"50%"``` ou ```"10vw"```

O atributo marginRight define o valor de afastamento direito.

Exemplo de uso:
```jsx harmony
<View margin={10} marginRight={50}>
    <Text>A margem à direita sobrescreve as margens padrão</Text>
</View>
```
### marginTop
Aceita valores númericos de unidade e também valores String como por exemplo: ```"50%"``` ou ```"10vw"```

O atributo marginTop define o valor de afastamento superior.

Exemplo de uso:
```jsx harmony
<View margin={10} marginTop={50}>
    <Text>A margem superior sobrescreve as margens padrão</Text>
</View>
```

### marginBottom
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo marginBottom define o valor de afastamento inferior.

Exemplo de uso:
```jsx harmony
<View margin={10} marginBottom={20}>
    <Text>A margem inferior sobrescreve as margens padrão</Text>
</View>
```

### padding
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo padding define o valor de preenchimento em todas as direções.
Qualquer valor de propriedade padding mais específico sobrescreve o valor da propriedade padding.

Exemplo de uso:
```jsx harmony
<View padding={10}>
    <Text>Um texto sendo preenchido com espaço ao redor</Text>
</View>
```

### paddingBottom
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo padding define o valor de preenchimento em todas as direções.
Qualquer valor de propriedade padding mais específico sobrescreve o valor da propriedade padding.

Exemplo de uso:
```jsx harmony
<View padding={10}>
    <Text>Um texto sendo preenchido com espaço ao redor</Text>
</View>
```

### paddingHorizontal
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo paddingHorizontal define o valor de preenchimento esquerdo e direito.
Qualquer valor de propriedade padding mais específico sobrescreve o valor da propriedade padding.

Exemplo de uso:
```jsx harmony
<View padding={10}>
    <Text>Um texto sendo preenchido com espaço ao redor</Text>
</View>
```
### paddingVertical
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo paddingVertical define o valor de preenchimento superior e inferior.
Qualquer valor de propriedade padding mais específico sobrescreve o valor da propriedade padding.

Exemplo de uso:
```jsx harmony
<View padding={10} paddingVertical={40}>
    <Text>O paddingVertical sobrescreve os valores definidos por padding</Text>
</View>
```

### paddingLeft
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo paddingLeft define o valor de preenchimento esquerdo.

Exemplo de uso:
```jsx harmony
<View padding={10} paddingLeft={40}>
    <Text>O paddingLeft sobrescreve os valores definidos por padding</Text>
</View>
```

### paddingRight
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

O atributo paddingRight define o valor de preenchimento esquerdo.

Exemplo de uso:
```jsx harmony
<View padding={10} paddingRight={40}>
    <Text>O paddingRight sobrescreve os valores definidos por padding</Text>
</View>
```

## Formato

As propriedades abaixo definem a forma de um elemento, elas podem ser fixas ou ter limitações máximas e mínimas.<br>

> Os componentes podem não obedecer aos tamanhos definidos quando eles estão dentro de um componente [FlexBox](flexbox.md),
> neste caso o ideal é utilizar o atributo [flex](components_base.md#flex)


### width
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo deixa o componente com largura fixa.

Exemplo:
```jsx harmony
<View width={50}>
    <Text>Um elemento com 50 de largura</Text>
</View>
```

### minWidth
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo deixa o componente com largura minima limitada ao valor atribuído.

Exemplo:
```jsx harmony
<View minWidth={50}>
    <Text>Um elemento com pelo menos 50 de largura</Text>
</View>
```

### maxWidth
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo deixa o componente com largura máxima limitada ao valor atribuído.

Exemplo:
```jsx harmony
<View maxWidth={50}>
    <Text>Um elemento com até 50 de largura</Text>
</View>
```

### height
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo deixa o componente com altura fixa.

Exemplo:
```jsx harmony
<View height={50}>
    <Text>Um elemento com até 50 de altura</Text>
</View>
```

### minHeight
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo deixa o componente com altura mínima limitada ao valor atribuído.

Exemplo:
```jsx harmony
<View minHeight={50}>
    <Text>Um elemento com até 50 de altura</Text>
</View>
```

### maxHeight
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo deixa o componente com altura máxima limitada ao valor atribuído.

Exemplo:
```jsx harmony
<View maxHeight={50}>
    <Text>Um elemento com até 50 de altura</Text>
</View>
```

### flex
Aceita valor numérico que diz respeito a proporção tomada em relação aos demais componentes no mesmo nó da árvore.
Exemplo:
```jsx harmony
<FlexBox >
    <View flex={1}>
        <Text>Este elemento ocupa metade do espaço do segundo elemento.</Text>
    </View>
    <View flex={2}>
        <Text>Este elemento ocupa o dobro do espaço do primeiro elemento.</Text>
    </View>
</FlexBox>
```

## Posicionamento

Existem atributos que determinam o posicionamento dos elementos na tela. <br>
Eles são:

### fixed
Aceita como valor apenas as palavras ```top``` ou ```bottom```

Use a propriedade fixed para fazer com que um elemento se torne fixo na tela, tanto na parte de baixo quando na parte de cima.<br>
Exemplo: 
```jsx harmony
<View fixed={'top'}>
    <Text>Este texto ficará no topo do mini-app</Text>
</View>
```

### drop
Aceita como valor apenas as palavras ```top``` ou ```bottom```

Ao inserir os valores desta propriedade o elemento se direciona para fora da tela.
Os valores de top ou bottom definem a direção. <br>
Exemplo:
```jsx harmony
<View drop={'bottom'}>
    <Text>Este texto ficará no topo do mini-app</Text>
</View>
```

### textTransform 

Defina a propriedade textTransform para transformar o texto em uma das opções de "estilização"<br>

Aceita os valores: ```{'initial'}```, ```{'capitalize'}```, ```{'uppercase'}```, ```{'lowercase'}``` ou ```{'unset'}```.

Exemplo:
```jsx harmony
<Text textTransform={'uppercase'}>
    TEXTO COM A PROPRIEDADE UPPERCASE
</Text>
```

### textAlign
Aceita os valores ```{'left'}```, ```{'right'}```, ```{'center'}```, ```{'justify'}```, ```{'justify-all'}```

Este atributo atua especialmente nos textos que estão dentro do componente.
```jsx harmony
<Text block textAlign={'right'}>Este texto está alinhado à direita</Text>
```

### visibility
Aceita os valores ```{'visible'}```, ```{'hidden'}```, ```{'collapse'}```

Este atributo faz relação direta com a visibilidade do componente.

Exemplo:
```jsx harmony
<View visibility={'hidden'}>
    <Text>Este conteúdo é invisível</Text>
</View>
```

### zIndex
Aceita como valor apenas números

Ao inserir os valores desta propriedade o elemento se desloca no eixo z em relação à árvore de elementos.

Exemplo:
```jsx harmony
<View zIndex={5}>
    <Text>Um texto de exemplo</Text>
</View>
```


## Bordas

Bordas são elementos de estilo que propiciam destacar um conteúdo. <br> 
Os atributos para bordas são: 

### borderWidth
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a espessura da borda de um elemento quando presente.

Exemplo de uso:
```jsx harmony
<View borderWidth={2} borderColor={'#ccc'} borderStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda de 2 unidades de espessura</Text>
</View>
```

### borderColor
Aceita valores de cor como String exemplo ```{'#eee'}```.<br>

Este atributo define a cor de uma borda quando presente.

Exemplo de uso:
```jsx harmony
<View borderWidth={2} borderColor={'#900'} borderStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda vermelha</Text>
</View>
```
### borderStyle
Aceita apenas os valores:```{'solid'}```, ```{'dotted'}```, ```{'dashed'}``` ou ```{'none'}```

Este atributo define o estilo de borda.

Exemplo de uso:
```jsx harmony
<View borderWidth={2} borderColor={'#900'} borderStyle={'dotted'}>
    <Text>O Texto está envolvido com uma borda pontilhada</Text>
</View>
```
### borderTopWidth
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a espessura da borda superior de um elemento quando presente.

Exemplo de uso:
```jsx harmony
<View borderTopWidth={2} borderTopColor={'#ccc'} borderTopStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda superior de 2 unidades de espessura</Text>
</View>
```
### borderTopColor
Aceita valores de cor como String exemplo ```{'#eee'}```.<br>

Este atributo define a cor de uma borda superior quando presente.

Exemplo de uso:
```jsx harmony
<View borderTopWidth={2} borderTopColor={'#900'} borderTopStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda superior vermelha</Text>
</View>
```
### borderTopStyle
Aceita apenas os valores:```{'solid'}```, ```{'dotted'}```, ```{'dashed'}``` ou ```{'none'}```

Este atributo define o estilo de borda superior.

Exemplo de uso:
```jsx harmony
<View borderTopWidth={2} borderTopColor={'#900'} borderTopStyle={'dotted'}>
    <Text>O Texto está envolvido com uma borda superior pontilhada</Text>
</View>
```
### borderBottomWidth
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a espessura da borda inferior de um elemento quando presente.

Exemplo de uso:
```jsx harmony
<View borderBottomWidth={2} borderBottomColor={'#ccc'} borderBottomStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda inferior de 2 unidades de espessura</Text>
</View>
```
### borderBottomColor
Aceita valores de cor como String exemplo ```{'#eee'}```.<br>

Este atributo define a cor de uma borda inferior quando presente.

Exemplo de uso:
```jsx harmony
<View borderInferiorWidth={2} borderInferiorColor={'#900'} borderInferiorStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda inferior vermelha</Text>
</View>
```
### borderBottomStyle
Aceita apenas os valores:```{'solid'}```, ```{'dotted'}```, ```{'dashed'}``` ou ```{'none'}```

Este atributo define o estilo de borda inferior.

Exemplo de uso:
```jsx harmony
<View borderBottomWidth={2} borderBottomColor={'#900'} borderBottomStyle={'dotted'}>
    <Text>O Texto está envolvido com uma borda inferior pontilhada</Text>
</View>
```
### borderLeftWidth
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a espessura da borda esquerda de um elemento quando presente.

Exemplo de uso:
```jsx harmony
<View borderLeftWidth={2} borderLeftColor={'#ccc'} borderLeftStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda esquerda de 2 unidades de espessura</Text>
</View>
```
### borderLeftColor
Aceita valores de cor como String exemplo ```{'#eee'}```.<br>

Este atributo define a cor de uma borda esquerda quando presente.

Exemplo de uso:
```jsx harmony
<View borderLeftWidth={2} borderLeftColor={'#900'} borderLeftStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda esquerda vermelha</Text>
</View>
```
### borderLeftStyle
Aceita apenas os valores:```{'solid'}```, ```{'dotted'}```, ```{'dashed'}``` ou ```{'none'}```

Este atributo define o estilo de borda esquerda.

Exemplo de uso:
```jsx harmony
<View borderLeftWidth={2} borderLeftColor={'#900'} borderLeftStyle={'dotted'}>
    <Text>O Texto está envolvido com uma borda esquerda pontilhada</Text>
</View>
```
### borderRightWidth
Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a espessura da borda direita de um elemento quando presente.

Exemplo de uso:
```jsx harmony
<View borderRightWidth={2} borderRightColor={'#ccc'} borderRightStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda direita de 2 unidades de espessura</Text>
</View>
```
### borderRightColor
Aceita valores de cor como String exemplo ```{'#eee'}```.<br>

Este atributo define a cor de uma borda direita quando presente.

Exemplo de uso:
```jsx harmony
<View borderRightWidth={2} borderRightColor={'#900'} borderRightStyle={'solid'}>
    <Text>O Texto está envolvido com uma borda direita vermelha</Text>
</View>
```
### borderRightStyle
Aceita apenas os valores:```{'solid'}```, ```{'dotted'}```, ```{'dashed'}``` ou ```{'none'}```

Este atributo define o estilo de borda direita.

Exemplo de uso:
```jsx harmony
<View borderRightWidth={2} borderRightColor={'#900'} borderRightStyle={'dotted'}>
    <Text>O Texto está envolvido com uma borda direita pontilhada</Text>
</View>
```

### borderTopLeftRadius
<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a extremidade superior esquerda do elemento.

Exemplo de uso:
```jsx harmony
<Card borderWidth={2} borderColor={'#ccc'} borderTopLeftRadius={20}>
    <Text>O Texto está envolvido com uma borda de 2 unidades de espessura e com o canto superior exquerdo arredondado</Text>
</Card>
```

### borderTopRightRadius
<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a extremidade superior direita do elemento.

Exemplo de uso:
```jsx harmony
<Card borderWidth={2} borderColor={'#ccc'} borderTopRightRadius={20}>
      <Text>O Texto está envolvido com uma borda de 2 unidades de espessura e com o canto superior direito arredondado</Text>
</Card>
```


### borderBottomLeftRadius
<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a extremidade inferior esquerda do elemento.

Exemplo de uso:
```jsx harmony
<Card borderWidth={2} borderColor={'#ccc'} borderBottomLeftRadius={20}>
    <Text>O Texto está envolvido com uma borda de 2 unidades de espessura e com o canto inferior exquerdo arredondado</Text>
</Card>
```

### borderBottomRightRadius
<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

Aceita valores númericos de unidade e também valores String.<br>
Alguns exemplos de valores: ```{50}```, ```{"50%"}``` ou ```{"10vw"}```

Este atributo altera a extremidade inferior direita do elemento.

Exemplo de uso:
```jsx harmony
<Card borderWidth={2} borderColor={'#ccc'} borderBottomRightRadius={20}>
     <Text>O Texto está envolvido com uma borda de 2 unidades de espessura e com o canto inferior direito arredondado</Text>
</Card>
```
