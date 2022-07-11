---
id: version-2.13.0-infiniteScroll
title: InfiniteScroll
sidebar_label: 8.2 InfiniteScroll
original_id: infiniteScroll
---

Semelhante ao Scroll Infinito do Twitter.

## Exemplo

![infiniteScroll](assets/images_components/v2.0.0/infiniteScroll.jpg)

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/listas-infinitescroll--basic)

## Utilização

### Preparo

```xml harmony
ITEMS = [
        { name: 'AME' },
        { name: 'CASHBACK' },
        { name: 'QRCODE' },
        { name: 'PAGAMENTO' },
        { name: 'AME' },
        { name: 'CASHBACK' },
        { name: 'QRCODE' },
        { name: 'PAGAMENTO' },
        { name: 'AME' },
        { name: 'CASHBACK' },
        { name: 'QRCODE' },
        { name: 'PAGAMENTO' },
        { name: 'AME' },
        { name: 'CASHBACK' },
        { name: 'QRCODE' },
        { name: 'PAGAMENTO' },
    ]

    generateItem = (item, index) => (
        <View key={`item_${index}`} borderBottomColor="#ccc" paddingVertical={20}>
            <Paragraph>{`${index + 1} - ${item.name}`}</Paragraph>
        </View>
    )

    addItems = () => {
        return new Promise((resolve) => {
            setInterval(() => {
                resolve(this.ITEMS)
            }, 2000)
        })
    }
```

### Implementação

```xml harmony
<InfiniteScroll
    heigth={'500px'}
    initialItems={this.ITEMS}
    renderItem={this.generateItem}
    onScrollEnd={this.addItems}
    endingFactor={100}
    showLoading={<ActivityIndicator />}
/>
```

## Propriedades

### height

- Type: String
- Obrigatório

Altura que será utilizada. O padrão é 100vh.

### initialItems

- Type: Array
- Obrigatório

Itens iniciais que são exibidos na primeira exibição da lista.

### renderItem

- Type: Function
- Obrigatório

Funcção para manipular como itens serão apresentados.

### onScrollEnd

- Type: Function
- Obrigatório

Funcção que retorna uma Promisse com um array de items para ser renderizado.

### endingFactor

- Type: Number
- Obrigatório

Define uma altura para  até o fim do scroll que ao ser atingido, chamará a funcão **`onScrollEnd`**, iniciando o carregamento dos novos itens.

### showLoading

- Type: String ou Componente
- Obrigatório

Conteúdo que será exibido enquanto o processamento da lista é realizado.


