---
id: version-2.22.2-destination
title: Destination
sidebar_label: 6.15 Destination
original_id: destination
---

Componente para uso de Origem - Destino

![Destination](assets/images_components/v2.0.0/destination.png)

<br>

Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-destination--input)

<br>

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

| Propriedade             | Descrição                                                                                                                                                          | Type     | Default                        | Obrigatório |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------ | ----------- |
| type                    | Valor em string que define o tipo de componente a ser renderizado. O valor deve ser, obrigatoriamente, **input** ou **text**.                                      | String   | null                           | sim         |
| originInputValue        | Valor em string que será exibido no input de **origem**.                                                                                                           | String   | null                           | não         |
| destinyInputValue       | Valor em string que será exibido no input de **destino**.                                                                                                          | String   | null                           | não         |
| onChangeOrigin          | Função a ser executada quando o valor do input de **origem** for alterado. Recebe como parametro o valor do input.                                                 | Function | null                           | sim         |
| onChangeDestiny         | Função a ser executada quando o valor do input **destino** for alterado. Recebe como parametro o valor do input.                                                   | Function | null                           | sim         |
| onClickChangeOrigin     | Quando colocado essa propriedade, exibirá o botão **Alterar** ao lado do endereço de **origem** que, ao clicar, executará uma função definida pelo desenvolvedor.  | Function | null                           | não         |
| onClickChangeDestiny    | Quando colocado essa propriedade, exibirá o botão **Alterar** ao lado do endereço de **destino** que, ao clicar, executará uma função definida pelo desenvolvedor. | Function | null                           | não         |
| originAddress           | Valor em string que contém o endereço de origem a ser exibido.                                                                                                     | String   | null                           | não         |
| destinyAddress          | Valor em string que contém o endereço de destino a ser exibido.                                                                                                    | String   | null                           | não         |
| title                   | Quando o `type` for 'text', Pode receber um array com 2 strings que substitui os titulos, 'Origem' e 'Destino', respectivamente.                                   | Array    | ['Origem', 'Destino"]          | não         |
| originInputPlaceholder  | Valor em string do placeholder que será exibido no input de **origem**.                                                                                            | String   | 'Digite o endereço de origem'  | não         |
| destinyInputPlaceholder | Valor em string do placeholder que será exibido no input de **destino**.                                                                                           | String   | 'Digite o endereço de destino' | não         |

## Origin e Destiny

É possível passar as informações das props `originAddress` e `destinyAddress` através dos componentes <Origin></Orign> e <Destiny></Destiny> como children dentro do componente **Destination**.

### Exemplo

```jsx
<Destination type="text">
  <Origin>
    <Text>Texto que sutistitui a prop 'originAddress'</Text>
  </Origin>
  <Destiny>
    <Text>Texto que sutistitui a prop 'destinyAddress'</Text>
  </Destiny>
</Destination>
```

## Exemplos

Abaixo, alguns exemplos usando o Destination:

![Destination](assets/images_components/v2.19.0/destination_ex1.png)

```xml
<View>
  <View background='amecolor-primary-medium'>
    <Destination
      type='input'
      originInputValue={this.state.origin}
      destinyInputValue={this.state.destiny}
      onChangeOrigin={text => this.onChangeOrigin(text)}
      onChangeDestiny={text => this.onChangeDestiny(text)}
    />
  </View>
</View>
```

---

![Destination](assets/images_components/v2.19.0/destination_ex2.png)

```xml
<View>
  <Destination
    type='text'
    originAddress='Rua Fidêncio Ramos, 302 - Vila Olimpia, São Paulo - SP, 04551-010'
    destinyAddress='Rua Fidêncio Ramos, 302 - Vila Olimpia, São Paulo - SP, 04551-010'
    onClickChangeOrigin={() => alert('origin')}
    onClickChangeDestiny={() => alert('destiny')}
  />
</View>
```

---

![Destination](assets/images_components/v2.19.0/destination_ex2.png)

```jsx
<Destination
  type="text"
  title={['Embarque', 'Desembarque']}
  onClickChangeOrigin={() => this.setState({ destinationType: 'input' })}
  onClickChangeDestiny={() => this.setState({ destinationType: 'input' })}
>
  <Origin>
    <View>
      <Text fontWeight="bold" fontSize="xxxs">
        Rua Afrânio de Melo Franco, 186
      </Text>
      <Spacing />
      <Text color="neutralcolor-dark">
        Os embarques e desembarques serão feitos nos pontos previstos pela
        prefeitura.
      </Text>
    </View>
  </Origin>
  <Destiny>
    <View>
      <Text fontWeight="bold" fontSize="xxxs">
        Rua Aristeu Ferreira, 25
      </Text>
      <Spacing />
      <Text color="neutralcolor-dark">
        Os embarques e desembarques serão feitos nos pontos previstos pela
        prefeitura.
      </Text>
    </View>
  </Destiny>
</Destination>
```
