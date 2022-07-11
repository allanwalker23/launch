---
id: version-2.21.0-secureinput
title: SecureInput
sidebar_label: 6.11 SecureInput
original_id: secureinput
---

Exibe uma entrada de valor de forma segura.

## Exemplo

![secureinput](assets/images_components/v2.0.0/secureinput.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-secureinput--basic)

<br>

## Utilização

```jsx
<View background="amegradient-secondary">
  <SecureInput inputMode="text" length={4} onChange={(e) => console.log(e)} />
</View>
```

## Propriedades

| Propriedade   | Descrição                                                                                                                   | Type     | Default               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------- |
| onChange      | Função a ser executada quando o valor é alterado. É necessário atribuir um parâmetro na função para obter o valor do input. | function | null                  |
| inputMode     | Tipo de teclado a ser utilizado no input. Valores possíveis são 'text' e 'numeric'.                                         | string   | null                  |
| length        | Tamanho do input em quantidade de caracteres do input, podendo ser alternado entre os valores 4, 5 e 6.                     | number   | 4                     |
| color         | Cor dos caracteres do input. [veja os valores](color.md)                                                                    | string   | neutralcolor-lightest |
| showCaracters | Opção para mostrar caracteres digitados.                                                                                    | boolean  | false                 |

## Exemplos

![secureinput](assets/images_components/v2.17.0/secureinput_ex1.png)

```jsx
<View
  padding="none"
  direction="column"
  align="center"
  justify="center"
  borderRadius="sm"
  background="pluscolor-secondary-light"
  height="250px"
>
  <Text
    fontSize="large"
    fontWeight="bold"
    textAlign="center"
    color="neutralcolor-lightest"
  >
    Insira sua senha:
  </Text>
  <SecureInput
    inputMode="numeric"
    color="neutralcolor-lightest"
    showCaracters
    onChange={e => this.handlePasswordCheck(e)}
  />
  <Spacing size="xs" />

  <Image icon="eye-show" colorIcon="neutralcolor-lightest" />
</View>
```
