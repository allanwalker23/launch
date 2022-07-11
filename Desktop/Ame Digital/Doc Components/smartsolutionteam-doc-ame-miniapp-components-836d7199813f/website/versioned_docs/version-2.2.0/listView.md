---
id: version-2.2.0-listView
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
    renderImage={(image, title) =>
        <Image source={image} />
    }
/>
```


## Propriedades

### Items
![ListView](assets/badge_required.svg)


Coleção de itens que será disposta no **ListView**.

### OnItemSelect

Função que é invocada a cada interação no item.

### RenderImage

Função de renderização de imagem.

### RenderTitle

Função de renderização do título.

### RenderSubtitle

Função de renderização do subtítulo.

### showArrow

Coloca uma seta a direita de cada item. Valor padrão é false.

Exemplo com a propriedade showArrow:

![listView](assets/images_components/v2.0.0/listview-righticon.png)
