---
id: version-2.22.2-bullet
title: Bullet
sidebar_label: 4.5 Bullet
original_id: bullet
---

Este componente desenha um item para listagem.

## Exemplo

![bullet](assets/images_components/v2.0.0/bullet.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/textos-bullet--basic)

<br>

## Utilização

```xml
<Window>
    <Bullet>Parcele suas compras</Bullet>
    <Bullet>Zero anuidade ou mensalidades</Bullet>
    <Bullet>Compre em +36 milhões de estabelecimentos</Bullet>
    <Bullet flat>Acumule pontos e participe do clube de compras</Bullet>
</Window>
```

![]()

## Propriedades

| Propriedade | Descrição                                                                  | Type    | Default                   |
| ----------- | -------------------------------------------------------------------------- | ------- | ------------------------- |
| flat        | Remove o estilo do componente e retorna uma lista simples.                 | Boolean | false                     |
| fontSize    | Define o tamanho da fonte. [Veja os valores](fontSizes.md)                  | string  | xxs                       |
| fontHeight  | Alterar o espaço entre as linhas de um texto. [Veja os valores](border.md) | String  | medium                    |
| color       | Alterar a cor do texto.                                                    | String  | neutracolor-brand-darkest |

## Exemplos

Abaixo, alguns exemplos usando o Bullet:

![bullet](assets/images_components/v2.16.0/bullet_flat.png)

```xml
<Window>
    <Bullet flat>Parcele suas compras</Bullet>
    <Bullet Zero>anuidade ou mensalidades</Bullet>
<Window>
```

![bullet](assets/images_components/v2.16.0/bullet_fontSize.png)

```xml
<Window>
    <Bullet fontSize='sm'>Parcele suas compras</Bullet>
    <Bullet fontSize='xxs'>anuidade ou mensalidades</Bullet>
</Window>
```

![bullet](assets/images_components/v2.16.0/bullet_color.png)

```xml
<Window>
     <Bullet color='amecolor-primary-light' fontSize='sm'>
        Parcele suas [b]compras[/b]
    </Bullet>
    <Bullet fontSize='sm'>anuidade ou mensalidades</Bullet>
</Window>
```
