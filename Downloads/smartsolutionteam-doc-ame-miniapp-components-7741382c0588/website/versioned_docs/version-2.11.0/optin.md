---
id: version-2.11.0-optin
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

```xml
     <View>
        <OptIn
            onChange={e => {
                this.onChangeHandler(e)
            }}
            checked={this.state.checked}
            text={'Aceito o termos de uso'} />
          </View>

```

## Propriedades

### text

- Type: String
- Opcional

Define texto o termo a ser escrito. <br>

### disabled

- Type: Boolean
- Opcional

Desabilita o switch do OptIn.<br>

### checked

- Type: Boolean
- Opcional

Exibe os estados em que o Toggle switch está `ativo` ou `inativo`.

### OnChange

- Type: Function
- Opcional

Função executada ao escolher uma das opções .

## Outros exemplos

![optin](assets/images_components/v2.0.0/optin2.png)

O Optin acima foi representado pelo código abaixo

```xml
     <View>
        <OptIn
            onChange={e => {
                this.onChangeHandler(e)
            }}
            checked={this.state.checked}
            text={'Aceito o termos de uso'} />
          </View>

```

![optin](assets/images_components/v2.0.0/optin-link.jpg)

O Optin acima, usando link e BBCode foi representado pelo código abaixo

```xml
  <View>
    <OptIn
      onChange={e => {
        this.onChangeHandler(e);
      }}
      checked={this.state.checked}
      text={
        <Paragraph>
          Texto com{' '}
          <TextLink
            text='Link'
            onClick={() => {
              console.log('clique');
            }}
          />{' '}
          e [b]BBCode[/b]
        </Paragraph>
      }
    />
  </View>

```
