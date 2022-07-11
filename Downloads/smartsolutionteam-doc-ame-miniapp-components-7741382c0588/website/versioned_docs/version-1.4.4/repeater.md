---
id: version-1.4.4-repeater
title: Repeater
sidebar_label: Repeater
original_id: repeater
---

Utilizado para listas de conteúdo.

```jsx
let itemsForRepeater = ['AME', 'MiniApp', 'AME SuperApp']
 
<Repeater items={itemsForRepeater}>
    {item => (
        <View>
            <Text>{item}</Text>
        </View>
    )}
</Repeater>
```

![Repeater](assets/old_versions/repeater.png)

## Propriedades

### items 
![](assets/badge_required.svg)<br>

Itens da lista de conteúdo.
<br>
Conteúdo a ser exibido.

Exemplo:
```jsx harmony
let itemsForRepeater = ['AME', 'MiniApp', 'AME SuperApp']

<Repeater items={itemsForRepeater}>
    {item => (
        <View>
            <Text>{item}</Text>
        </View>
    )}
</Repeater>
```
