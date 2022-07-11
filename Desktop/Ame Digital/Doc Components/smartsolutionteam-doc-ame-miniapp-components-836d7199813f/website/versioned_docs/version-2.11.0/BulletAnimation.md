---
id: version-2.11.0-bulletAnimation
title: Bullet Animation
sidebar_label: 6.17 Bullet Animation
original_id: bulletAnimation
---

Componente para visualização de transição de elementos/telas através de bullets animados.

## Exemplo

![bullet](assets/images_components/v2.0.0/bullet-animation.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-bulletanimation--basic)

<br>

## Utilização

```xml
<Window>
    <BulletAnimation bullets={3} selected={2}/>
</Window>
```

## Propriedades

### bullets

- Type: Number
- Obrigatório

Quantidade de bullets apresentados na tela.

### selected

- Type: Number
- Obrigatório

Estado atual do bullet selecionado.
