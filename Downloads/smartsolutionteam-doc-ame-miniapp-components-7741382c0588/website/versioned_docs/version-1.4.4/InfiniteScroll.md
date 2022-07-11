---
id: version-1.4.4-infiniteScroll
title: InfiniteScroll
sidebar_label: InfiniteScroll
original_id: infiniteScroll
---

Semelhante ao Scroll Infinito do Twitter.

```jsx
<InfiniteScroll
    initialItems={this.ITEMS}
    renderItem={this.generateItem}
    onScrollEnd={this.addItems}
    endingFactor={500}
    showLoading={<ActivityIndicator />}
/>
```
## Propriedades

![listView](assets/old_versions/infinitScroll.png)

### initialItems
![if](assets/badge_required.svg)
<br>
Itens iniciais que são exibidos na primeira exibição da lista.

### renderItem
![if](assets/badge_required.svg)
<br>
Itens que serão renderizados com devidos ajustes de acordo com o necessário.

### onScrollEnd
![if](assets/badge_required.svg)
<br>
Novos itens que serão exibidos assim que o usuário chegar ao final do scroll.

### endingFactor
![if](assets/badge_required.svg)
<br>
Ao ser atingido chamará a funcão **```onScrollEnd```**. Aceita somente **```Number```**.

### showLoading
![if](assets/badge_required.svg)
<br>
Conteúdo que será exibido enquanto o processamento da lista é realizado.


Exemplo:
```jsx harmony
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
        <View key={`item_${index}`} borderBottomColor={'#ccc'} paddingVertical={20}>
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

```jsx harmony
<InfiniteScroll
    initialItems={this.ITEMS}
    renderItem={this.generateItem}
    onScrollEnd={this.addItems}
    endingFactor={500}
    showLoading={<ActivityIndicator />}
/>
```
