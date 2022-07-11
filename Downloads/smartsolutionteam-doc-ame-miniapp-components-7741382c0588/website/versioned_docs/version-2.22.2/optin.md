---
id: version-2.22.2-optin
title: Optin
sidebar_label: 6.6 OptIn
original_id: optin
---

Componente para aceitar termos.

## Exemplo

![optin](assets/images_components/v2.0.0/optin.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-optin--basic)

<br>

## Utilização

```jsx
<View>
  <OptIn
    onChange={(e) => {
      this.onChangeHandler(e)
    }}
    checked={this.state.checked}
    text={'Aceito o termos de uso'}
  />
</View>
```

## Propriedades

| Propriedade | Descrição                                                          | Type     | Default | Obrigatório |
| ----------- | ------------------------------------------------------------------ | -------- | ------- | ----------- |
| text        | Define texto o termo a ser escrito.                                | String   | null    | sim         |
| disabled    | Desabilita o switch do OptIn.                                      | Boolean  | false   | não         |
| checked     | Exibe os estados em que o Toggle switch está `ativo` ou `inativo`. | Boolean  | false   | não         |
| OnChange    | Função executada ao escolher uma das opções.                       | Function | null    | sim         |

## Exemplos

Abaixo, alguns exemplos usando o OptIn:

<br>

![optin](assets/images_components/v2.0.0/optin2.png)

```jsx
<View>
  <OptIn
    checked={this.state.checked}
    text={'Aceito o termos de uso'}
    onChange={(e) => {
      this.onChangeHandler(e)
    }}
  />
</View>
```

<br><br>

![optin](assets/images_components/v2.0.0/optin-link.jpg)

O Optin acima, usando link e BBCode foi representado pelo código abaixo

```jsx
<View>
  <OptIn
    onChange={(e) => {
      this.onChangeHandler(e)
    }}
    text={
      <Paragraph>
        Texto com{' '}
        <TextLink
          text="Link"
          onClick={() => {
            console.log('clique')
          }}
        />{' '}
        e [b]BBCode[/b]
      </Paragraph>
    }
    checked={this.state.checked}
  />
</View>
```
