---
id: version-2.0.0-infiniteScroll
title: InfiniteScroll
sidebar_label: 8.2 InfiniteScroll
original_id: infiniteScroll
---

Semelhante ao Scroll Infinito do Twitter.

## Exemplo



![listView](assets/old_versions/infinitScroll.png)

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
            <Text>{`${index + 1} - ${item.name}`}</Text>
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
    initialItems={this.ITEMS}
    renderItem={this.generateItem}
    onScrollEnd={this.addItems}
    endingFactor={500}
    showLoading={<ActivityIndicator />}
/>
```

## Propriedades


### InitialItems
![if](assets/badge_required.svg)
<br>
Itens iniciais que são exibidos na primeira exibição da lista.

### RenderItem
![if](assets/badge_required.svg)
<br>
Itens que serão renderizados com devidos ajustes de acordo com o necessário.

### OnScrollEnd
![if](assets/badge_required.svg)
<br>
Novos itens que serão exibidos assim que o usuário chegar ao final do scroll.

### EndingFactor
![if](assets/badge_required.svg)
<br>
Ao ser atingido chamará a funcão **```onScrollEnd```**. Aceita somente **```Number```**.

### ShowLoading
![if](assets/badge_required.svg)
<br>
Conteúdo que será exibido enquanto o processamento da lista é realizado.
