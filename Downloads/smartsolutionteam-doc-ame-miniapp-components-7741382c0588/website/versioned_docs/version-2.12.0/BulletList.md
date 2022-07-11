---
id: version-2.12.0-bullet
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

### flat

- Type: Boolean
- Opcional

A propriedade **flat** remove o estilo do componente e retorna uma lista simples.

Exemplo com a propriedade flat:

![bullet](assets/images_components/v2.0.0/bullet-flat.png)

### fontSize

- Type: String
- Opcional

A propriedade **fontSize** define o tamanho da fonte.

**Exemplo**

```xml
<Window>
    <Bullet fontSize='md'>Parcele suas compras</Bullet>
</Window>
```

[Saiba mais sobre fontSize](fontSizes.md)

### fontHeight

- Type: String
- Opcional

A propriedade **fontHeight** alterar o espaço entre as linhas de um texto.

**Exemplo**

```xml
<Window>
    <Bullet fontHeight='medium'>Parcele suas compras</Bullet>
</Window>
```

[Saiba mais sobre fontHeight](fontHeight.md)

### color

- Type: String
- Opcional

A propriedade **color** alterar a cor do texto.

**Exemplo**

```xml
<Window>
    <Bullet color='amecolor-primary-medium'>Parcele suas compras</Bullet>
</Window>
```

[Saiba mais sobre fontHeight](fontHeight.md)
