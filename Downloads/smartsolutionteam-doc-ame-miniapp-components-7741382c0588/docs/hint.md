---
id: hint
title: Hint
sidebar_label: 6.9 Hint
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

| Propriedade | Descrição                                                                             | Type    | Default | Obrigatório |
| ----------- | ------------------------------------------------------------------------------------- | ------- | ------- | ----------- |
| type        | Define qual será o estilo do Hint, as propriedades são 'success', 'warning' e 'error' | string  | null    | Não         |
| show        | Parâmetro que define se o Hint será exibido ou não                                    | boolean | false   | não         |

## Exemplos

Abaixo, alguns exemplos usando o Hint:

![bullet](assets/images_components/v2.18.0/hint_ex2.png)

```xml
<Window>
    <View>
      <Hint status='success' text='Retorno de sucesso' show />
      <Text fontSize='md'>Hint de sucesso</Text>
    </View>
<Window>
```
