---
id: version-2.6.0-grid
title: Grid
sidebar_label: 3.4 Grid
original_id: grid
---

Utilize este componente para alinhar vários componentes em uma mesma linha.
Ele divide o espaço exatamente pelo número de componentes dentro dele.

## Exemplo

![grid](assets/images_components/v2.0.0/grid1.jpg)

## Utilização

```xml
<Grid>
    <Paragraph>Preço</Paragraph>
    <Paragraph>R$50,00</Paragraph>
</Grid>
```

## Propriedades

### Columns

**Number**

Indica quantas colunas o grid terá. Máximo de 5.

Exemplo:

```xml
<Grid columns={2}>
    {[
    <Circle
        key={1}
        icon={require('../assets/images/icon_ame.svg')}
    />,
    <Circle
        key={2}
        icon={require('../assets/images/icon_ame.svg')}
    />,
    <Circle
        key={3}
        icon={require('../assets/images/icon_ame.svg')}
    />,
    <Circle
        key={4}
        icon={require('../assets/images/icon_ame.svg')}
    />,
    ]}
```

## Outros exemplos

### Usando dois componentes

![grid](assets/images_components/v2.0.0/grid2.png)

### Utilizando quatro componentes

![grid](assets/images_components/v2.0.0/grid3.jpg)
