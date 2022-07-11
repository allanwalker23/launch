---
id: version-2.1.1-optin
title: Optin
sidebar_label: 6.6 OptIn
original_id: optin
---

Componente para aceitar termos.

## Exemplo

![optin](assets/images_components/v2.0.0/optin.png)

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

### Text

Define texto o termo a ser escrito. <br>

### Disabled

Desabilita o switch do OptIn.<br>

### Checked

Exibe os estados em que o Toggle switch está `ativo` ou `inativo`.

### OnChange

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
