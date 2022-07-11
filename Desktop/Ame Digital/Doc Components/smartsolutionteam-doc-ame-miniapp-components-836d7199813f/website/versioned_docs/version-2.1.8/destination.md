---
id: version-2.1.8-destination
title: Destination
sidebar_label: 6.15 Destination
original_id: destination
---

Componente para uso de Origem - Destino

## Exemplo

![Destination](assets/images_components/v2.0.0/destination.png)

## Utilização

O componente Destination pode ser usado com a propriedade type='input', onde irá renderizar dois inputs: um para entrada de origem, e outro para entrada de destino, e com type='text', onde irá renderizar os endereços destacados por origem e destino, sem input.

### Implementação

```jsx harmony
<Destination
  type='input'
  originInputValue={this.state.origin}
  destinyInputValue={this.state.destiny}
  onChangeOrigin={text => this.onChangeOrigin(text)}
  onChangeDestiny={text => this.onChangeDestiny(text)}
/>

<Destination
  onClickChangeOrigin={() => console.log('origin')}
  onClickChangeDestiny={() => console.log('destiny')}
  type='text'
  originAddress='Rua Fidêncio Ramos, 302 - Vila Olimpia, São Paulo - SP, 04551-010'
  destinyAddress='Rua Fidêncio Ramos, 302 - Vila Olimpia, São Paulo - SP, 04551-010'
/>
```

## Propriedades

### type

Valor em string que define o tipo de componente a ser renderizado. O valor deve ser, obrigatoriamente, **input** ou **text**.

### originInputValue

Valor em string que será exibido no input de **origem**.

### destinyInputValue

Valor em string que será exibido no input de **destino**.

### onChangeOrigin

Função a ser executada quando o valor do input for alterado. Recebe como parametro o valor do input.

Exemplo:
onChangeOrigin={text => console.log(text)}

### onChangeDestiny

Função a ser executada quando o valor do input for alterado. Recebe como parametro o valor do input.

Exemplo:
onChangeDestiny={text => console.log(text)}

### onClickChangeOrigin

Quando colocado essa propriedade, exibirá o botão **Alterar** ao lado do endereço de **origem** que, ao clicar, executará uma função definida pelo desenvolvedor.

Exemplo:
onClickChangeOrigin={() => console.log('origin')}

### onClickChangeDestiny

Quando colocado essa propriedade, exibirá o botão **Alterar** ao lado do endereço de **destino** que, ao clicar, executará uma função definida pelo desenvolvedor.

Exemplo:
onClickChangeDestiny={() => console.log('destiny')}

### originAddress

Valor em string que contém o endereço de origem a ser exibido.

### destinyAddress

Valor em string que contém o endereço de destino a ser exibido.
