---
id: search
title: Search
sidebar_label: 6.14 Search
---

![search](assets/images_components/3.0/search.png)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-loading--basic)

## Utilização

```xml
<Search
    placeholder='Digitação'
    value={this.state.inputValue}
    onChange={value => this.setValue(value)}
/>
```

## Propriedades

| Propriedade | Descrição                    | Type     | Default | Obrigatório |
| ----------- | ---------------------------- | -------- | ------- | ----------- |
| value       | Recebe o valor               | function | null    | Não         |
| disabled    | Desabilita o componente      | function | null    | Não         |
| placeholder | Valor do placeholder         | function | null    | Não         |
| onPress     | Função de toque ao pesquisar | function | null    | Sim         |
