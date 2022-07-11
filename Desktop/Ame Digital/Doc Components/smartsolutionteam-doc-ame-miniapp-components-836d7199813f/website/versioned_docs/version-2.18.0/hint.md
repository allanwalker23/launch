---
id: version-2.18.0-hint
title: Hint
sidebar_label: 6.21 Hint
original_id: hint
---

Componente para exibir alertas em formulários

![hint](assets/images_components/v2.0.0/hint.jpg)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/textos-hint--basic)

<br>

## Utilização

```xml
  <Hint
    status='success'
    text='Retorno de sucesso'
    show={true}
  />
```

## Propriedades

| Propriedade | Descrição                                                                               | Type    | Default | Obrigatório |
|-------------|-----------------------------------------------------------------------------------------|---------|---------|-------------|
| text        | Propriedade que recebe o texto que será apresentado                                     | String  | null    | sim         |
| status      | Essa propriedade define qual será a cor do hint, as opções são: success, warning, error | String  | error   | não         |
| show        | Propriedade que exibe ou esconde o hint                                                 | Boolean | false   | não         |
| align       | Define a direção que o Hint será exibido, as opções são: left, center e right           | String  | left    | não         |


## Exemplos

Abaixo, alguns exemplos usando o Hint:

![bullet](assets/images_components/v2.18.0/hint_ex1.png)

```xml
<Window>
    <View width='167px'>
      <Hint
        status='error'
        align='right'
        text='Retorno de erro'
        show={true}
      />
      <Text fontSize='md'>Hint de erro</Text>
    </View>
<Window>
```

![bullet](assets/images_components/v2.18.0/hint_ex2.png)

```xml
<Window>
    <View>
      <Hint status='success' text='Retorno de sucesso' show />
      <Text fontSize='md'>Hint de sucesso</Text>
    </View>
<Window>
```
