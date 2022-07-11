---
id: version-2.5.0-listView
title: ListView
sidebar_label: 8.1 ListView
original_id: listView
---

Este componente fornece uma lista útil para ser usada como um navegador, exibir produtos ou outras coisas.

### Exemplo

![listView](assets/images_components/v2.0.0/listView.png)

### Utilização

```xml harmony
<ListView
    items={[
        {
        key: '1',
        title: 'Título do Item (Opcional)',
        subtitle: 'Subtítulo (Opcional)',
        image: 'Path para Imagem (Opcional)'
        },
        //... Outros itens
        ]
    }
    backgroundColor={"#ffffff"}
    borderColor={"#c5c5c5"}
    color={"#353535"}
    onItemSelect={(item, index) => {
    //...
    }}
/>
```

## Propriedades

### Items

![ListView](assets/badge_required.svg)

Coleção de itens que será disposta no **ListView**.

Pode receber:

```javascript
{
  image: 'HTTPS da imagem ou endereço da imagem local',
  icon: 'Token do ameIcon, endereço HTTPS da imagem do ícone ou endereço da imagem ícone local usando require.',
  iconColor: 'Cor do icon, podendo receber: black e red. Por padrão a cor é preto.',
}
```
S
### OnItemSelect

Função que é invocada a cada interação no item.

### RightIconClick

Recebe uma função para ser executada em um evento de toque sobre o ícone da direita do item.

### RightIcon

coloca um ícone a direita de cada item.

Recebe: Token do [ameIcon](ameIcon.md), endereço HTTPS da imagem do ícone ou endereço da imagem ícone local usando require.

```javascript
<ListView
  items={items2}
  onItemSelect={e => this.onClickItem(e)}
  rightIcon='trash-outline'
/>
```

Exemplo com ícone:

![listView](assets/images_components/v2.0.0/listview-righticon.png)

### RightIConColor
**String**

Cor do icone usado na propriedade [RightIcon](#RightIcon).

Opções: 'black', 'red'; 

Padrão: 'black'