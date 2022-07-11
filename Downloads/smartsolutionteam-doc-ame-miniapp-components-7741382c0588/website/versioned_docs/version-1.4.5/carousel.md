---
id: version-1.4.5-carousel
title: Componente Carrossel
sidebar_label: Carousel
original_id: carousel
---

Componente auxiliar para mostrar conteúdos dentro de um carrossel.
Os conteúdos podem ser qualquer estrutura de componente (View, Image, Flexbox)

>  [**`Carousel`** ]()estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

## Exemplo básico

```jsx harmony
<Carousel>
    <View padding={4} width={cardWidth}>
        <Image borderColor={'#ccc'}
            borderRadius={4}
            borderWidth={1}
            borderStyle={'solid'}
            minHeight={cardHeight}
            source="https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg" />
        <Text>Rio de Janeiro</Text>
    </View>
    <View padding={4} width={cardWidth}>
        <Image borderColor={'#ccc'}
            borderRadius={4}
            borderWidth={1}
            borderStyle={'solid'}
            minHeight={cardHeight}
            source="https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg" />
        <Text>São Paulo</Text>
    </View>
    <View padding={4} width={cardWidth}>
        <Image borderColor={'#ccc'}
            borderRadius={4}
            borderWidth={1}
            borderStyle={'solid'}
            minHeight={cardHeight}
            source="https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg" />
        <Text>Minas Gerais</Text>
    </View>
    <View padding={4} width={cardWidth}>
        <Image borderColor={'#ccc'}
            borderRadius={4}
            borderWidth={1}
            borderStyle={'solid'}
            minHeight={cardHeight}
            source="https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg" />
        <Text>Espírito Santo</Text>
    </View>
</Carousel>
``` 

## Propriedades

### horizontal

Altera a disposição dos Items para a horizontal. O padrão é true.

Aceita **Boolean** como valor, exemplo: ```horizontal={false}```

Exemplo:

```jsx harmony
<Carousel horizontal={false}>
    ...
</Carousel>
``` 

### circular

Conecta o último item com o primeiro, fazendo uma navegação circular.

O seu valor padrão é `false`

Aceita **Boolean** como valor, exemplo: ```<Carousel circular>``` ou ```<Carousel circular={true}>```

Exemplo:

```jsx harmony
<Carousel circular>
    {/*Content*/}
</Carousel>
``` 

### gap

Distanciamento entre itens.

O seu valor padrão é 10

Aceita **Number** como valor, exemplo: ```gap={15}```

Exemplo:

```jsx harmony
<Carousel gap={15}>
    {/*Content*/}
</Carousel>
``` 

### threshold

Distância padrão de deslizamento para que o carrossel efetue o deslocamento de um item.

O seu valor padrão é 40

Aceita **Number** como valor, exemplo: ```threshold={10}```

Exemplo:

```jsx harmony
<Carousel threshold={10}>
    {/*Content*/}
</Carousel>
``` 

### duration

Duração da movimentação dos paineis para a posição correta.

O seu valor padrão é 100 (ms)

Aceita **Number** como valor, exemplo: ```duration={50}```

Exemplo:

```jsx harmony
<Carousel duration={50}>
    {/*Content*/}
</Carousel>
``` 

### defaultIndex

Define qual item estará na posição inicial do carrossel.

O seu valor padrão é 0 (o primeiro item)

Aceita **Number** como valor, exemplo: ```defaultIndex={2}```

Exemplo:

```jsx harmony
<Carousel defaultIndex={2}>
    {/*Content*/}
</Carousel>
``` 

### thresholdAngle

Define o desvio angular do movimento de arrasto na tela.
A mudança de item deixa de funcionar caso o ângulo formado pelo movimento seja maior que o definido.

O seu valor padrão é 45 (graus)

Aceita **Number** como valor, exemplo: ```thresholdAngle={20}```

Exemplo:

```jsx harmony
<Carousel thresholdAngle={20}>
    {/*Content*/}
</Carousel>
``` 

### bound

Usado apenas para quando a opção circular for false.
Quando true, permite que o último item permaneça fixado ao lado oposto do item inicial.

O seu valor padrão true

Aceita **Boolean** como valor, exemplo: ```bound={false}```

Exemplo:

```jsx harmony
<Carousel bound={false}>
    {/*Content*/}
</Carousel>
``` 

### moveType

Define o tipo de movimentação do carrossel.

O seu valor padrão é `snap`

Aceita apenas os valoes: `snap` ou `freeScroll`

Exemplo:

```jsx harmony
<Carousel moveType={'freeScroll'}>
    {/*Content*/}
</Carousel>
``` 

## Propriedades para performance

As propriedades abaixo visam melhorar a performance do carrossel, 
devem ser utilizados sempre que uma tela possuir muitos carrosséis.  

### renderOnlyVisible

Renderiza apenas os itens visíveis na tela.

O seu valor padrão é `false`

Aceita `Boolean` como valor, exemplo: ```renderOnlyVisible={true}```

Exemplo:

```jsx harmony
<Carousel renderOnlyVisible>
    {/*Content*/}
</Carousel>
``` 

### isEqualSize

Define ao carrossel que todos os elementos possuem o mesmo tamanho.
Isso faz com que ele não precise ficar calculando o tamanho do item em cada interação.

O seu valor padrão é `false`

Aceita `Boolean` como valor, exemplo: ```isEqualSize={true}```

Exemplo:

```jsx harmony
<Carousel isEqualSize>
    {/*Content*/}
</Carousel>
``` 

