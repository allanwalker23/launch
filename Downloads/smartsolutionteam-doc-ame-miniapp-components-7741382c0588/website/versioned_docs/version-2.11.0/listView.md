---
id: version-2.11.0-listView
title: ListView
sidebar_label: 8.1 ListView
original_id: listView
---

Este componente fornece uma lista útil para ser usada como um navegador, exibir produtos ou outras coisas.

### Exemplo

![listView](assets/images_components/v2.0.0/listView.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/listas-listview--basic)

<br>

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

### items

- Type: Array
- Obrigatório

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
### onItemSelect

- Type: Function
- Opcional

Função que é invocada a cada interação no item.

### rightIconClick

- Type: Function
- Opcional

Recebe uma função para ser executada em um evento de toque sobre o ícone da direita do item.

### rightIcon

- Type: String
- Opcional

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

- Type: String
- Opcional

Cor do icone usado na propriedade [RightIcon](#RightIcon).

Opções: 'black', 'red'; 

Padrão: 'black'