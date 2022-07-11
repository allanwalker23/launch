---
id: version-1.4.4-text
title: Text
sidebar_label: Text
original_id: text
---

Sempre usados para exibir um texto.

>  [**`Text`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

```jsx
<Text>
  Lorem ipsum dolor sit amet, consectetur adipiscing.
</Text>
```

![Text](assets/old_versions/text.png)

## Propriedades 
![](assets/badge_required.svg)<br>

Aceita apenas String como valor, exemplo: ```Olá, Mundo!```

Defina a propriedade children para determinar o texto do elemento..<br>

Exemplo:
```jsx harmony
<Text>Olá, Mundo!</Text>
```

### color

Defina a propriedade color para determinar a cor do texto.<br>

Aceita apenas **String** como valor, exemplo: ```color={'#eee'}```

Exemplo:
```jsx harmony
<Text color={'#ededed'}>
  Este texto possui uma cor personalizada
</Text>
```

### lineHeight 

Defina a propriedade lineHeight para determinar a altura do texto.<br>

Aceita **String** ou **Number** como valor, exemplo: ```lineHeight={'normal'}``` ou ```lineHeight={2.5}```

Exemplo:
```jsx harmony
<Text lineHeight={'normal'}>
  Altura da linha com propriedade em texto
</Text>
```

### fontSize 

Defina a propriedade fontSize para determinar o tamanho da fonte do texto.<br>

Aceita **String** ou **Number** como valor, exemplo: ```fontSize={'10%'}```  ou ```fontSize={15}```

Exemplo:
```jsx harmony
<Text fontSize={'20%'}>
  Tamanho do texto com propriedade em texto
</Text>
```

### fontWeight 

Defina a propriedade fontWeight para determinar o peso da fonte.<br>

Aceita **String** ou **Number** como valor, exemplo: ```fontWeight={'normal'}``` ou ```fontWeight={900}```.

Exemplo:
```jsx harmony
<Text fontWeight={100}>
  Texto em negrito
</Text>
```

### fontStyle 
<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>


Defina a propriedade fontSize para determinar o tamanho da fonte do texto.<br>

Aceita **String** ou **Number** como valor, exemplo: ```normal```, ```italic```  ou ```oblique```

Exemplo:
```jsx harmony
<Text fontStyle={'italic'}>
  Aque temos um texto em itálico.
</Text>
```

### textShadow 

Defina a propriedade textShadow para acrescentar sombras ao texto.<br>

Aceita **String** ou **Number** como valor, exemplo: ```textShadow={'initial'}``` ou ```textShadow={2}```

Exemplo:
```jsx harmony
<Text textShadow={'none'}>
  Texto sem sombras
</Text>
```

### textIndent 

Defina a propriedade texIndent para definir a indentação de cada texto<br>

Aceita **String** ou **Number** como valor, exemplo:  ```textIndent={'30%'}``` ou ```textIndent={0}```.

Exemplo:
```jsx harmony
<Text textIndent={0}>
  Texto sem indentação
</Text>
```

### wordSpacing 

Defina a propriedade wordSpacing para definir o espaço entre as palavras<br>

Aceita **String** ou **Number** como valor, exemplo: ```wordSpacing={'20%'}``` ou ```wordSpacing={4}```.

Exemplo:
```jsx harmony
<Text wordSpacing={2}>
  Espaço de 2 pixels entre as palavras.
</Text>
```

### whiteSpace 

Defina a propriedade whiteSpace para definir o espaçamento entre os caracteres<br>

Aceita **String** ou **Number** como valor, exemplo: ```whiteSpace={'17%'}``` ou ```whiteSpace={1}```.

Exemplo:
```jsx harmony
<Text whiteSpace={'5%'}>
  Texto com 5% espaçamento entre os caracteres.
</Text>
```

### textOrientation 

Defina a propriedade textOrientation para definir a orientação do texto<br>

Aceita os valores: ```{'inherit'}```, ```{'initial'}```, ```{'unset'}```, ```{'mixed'}```, ```{'upright'}```, ```{'sideways-right'}```, ```{'sideways'}``` ou ```{'use-glyph-orientation'}```.

Exemplo:
```jsx harmony
<Text textOrientation={'mixed'}>
  Gira os caracteres dos scripts horizontais 90° no sentido horário.
</Text>
```

### textAlign 

Defina a propriedade textAlign para alinhar o texto<br>

Aceita os valores: ```{'initial'}```, ```{'left'}```, ```{'center'}```, ```{'right'}``` ou ```{'justify'}```..

Exemplo:
```jsx harmony
<Text textAlign={'center'}>
    Texto alinhado ao centro
</Text>
```

### fontFamily 

Defina a propriedade fontFamily para definir a família de fonte a ser utilizada<br>

Aceita somente **String**, exemplo: ```fontFamily={"Ubuntu"}```.

Exemplo:
```jsx harmony
<Text fontFamily={'Open-Sans'}>
    Fonte Open-Sans no texto
</Text>
```

### block 

Defina a propriedade block para definir se o texto será exibido em bloco ou inline<br>

Aceita somente **Boolean**, exemplo: ```block```, ```block={true}``` ou ```block={false}```.

Exemplo:
```jsx harmony
<Text block>
    Texto sendo exibido em bloco
</Text>
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

### textDecoration 

Defina a propriedade textDecoration para atribuir linhas no texto.<br>

Aceita os valores: ```{'normal'}```, ```{'underline'}```, ```{'line-through'}```, ou ```{'overline'}```.

Exemplo:
```jsx harmony
<Text textDecoration={'normal'}>
    Text decoration sem nenhuma linha
</Text>
```

### verticalAlign 

Defina a propriedade verticalAlign para definir verticalmente a exibição do texto<br>

Aceita os valores: ```{'baseline'}```, ```{'textTop'}```, ```{'textBottom'}```, ```{'sub'}``` ou ```{'super'}```.

Exemplo:
```jsx harmony
<Text verticalAlign={'baseline'}>
    Texto alinhado verticalmente de acordo com seu componente pai.
</Text>
```

### wordBreak 

Defina a propriedade wordBreak quebrar linha do texto<br>

Aceita os valores: ```{'normal'}```, ```{'break-all'}```, ```{'keep-all'}```, ```{'inherit'}```, ```{'initial'}``` ou ```{'unset'}```.

Exemplo:
```jsx harmony
<Text wordBreak={'normal'}>
    Um Hello World! sendo exibido sem quebra de linha
</Text>
```

### letterSpacing 

Defina a propriedade letterSpacing para realizar o espaçamento entre os caracteres<br>

Aceita **String** ou **Number** como valor, exemplo: ```letterSpacing={'2%'}```  ou ```letterSpacing={10}```.

Exemplo:
```jsx harmony
<Text letterSpacing={5}>
    U m    H e l l o    W o r l d!    c o m    e s p a ç o
</Text>
```

### whiteSpace 

Propriedade é usada para descrever como os espaços em branco dentro dos elementos são manipulados.<br>

Aceita os valores: ```{'normal'}```, ```{'nowrap'}```, ```{'pre'}```, ```{'pre-wrap'}``` ou ```{'pre-line'}```

Exemplo:
```jsx harmony
 <Text
    
    whiteSpace={'nowrap'}
                      
  >
      O Texto será exibido na mesma linha. (Mas para visualizar melhor, precisamos inserir um texto que contenha mais de uma linha).
</Text>
```

### textOverflow 

Defina a propriedade textOverflow definir se o texto será exibido por totalidade ou cortado<br>

Aceita os valores: ```{'clip'}``` ou ```{'ellipsis'}```
OBS: Importante utilizar  **whiteSpace**, **block** e **height** para manipular o espaçamento.

Exemplo:
```jsx harmony
 <Text
    maxWidth={72}
    height={16}
    block
    whiteSpace={'nowrap'}
    textOverflow={'ellipsis'}                    
  >
     Este texto será abreviado, de acordo com o tamanho do Text..
</Text>
```

### selectable 

Defina a propriedade selectable para permitir selecionar, ou não, o texto.<br>

Aceita somnete **Boolean**, exemplo: ```selectable```, ```selectable={true}``` ou ```selectable={false}```

Exemplo:
```jsx harmony
<Text selectable>
    Este texto é selecionável.
</Text>
```


### lineBreaks 

Faz com que o texto respeite as quebras de linha informadas no conteúdo.

Aceita somnete **Boolean**, exemplo: ```lineBreaks```, ```lineBreaks={true}``` ou ```lineBreaks={false}```

Exemplo:
```jsx harmony
<Text selectable>{"Este texto possui quebra de linha.\nPortando deverá ter suas linhas."}</Text>
```
