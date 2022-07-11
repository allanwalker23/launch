---
id: version-2.18.0-bulletanimation
title: Bullet Animation
sidebar_label: 6.17 Bullet Animation
original_id: bulletanimation
---

Componente para visualização de transição de elementos/telas através de bullets animados.

![bullet](assets/images_components/v2.0.0/bullet-animation.jpg)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-bulletanimation--basic)

## Utilização

```xml
<View>
  <BulletAnimation bullets={3} selected={2}/>
</View>
```

## Propriedades

| Propriedade | Descrição                                   | Type   | Default | Obrigatório |
|-------------|---------------------------------------------|--------|---------|-------------|
| bullets     | Quantidade de bullets apresentados na tela. | Number | 3       | true        |
| selected    | Estado atual do bullet selecionado.         | Number | 1       | true        |

