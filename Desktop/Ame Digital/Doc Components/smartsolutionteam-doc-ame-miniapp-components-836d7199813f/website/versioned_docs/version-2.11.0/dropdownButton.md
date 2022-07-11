---
id: version-2.11.0-dropdownButton
title: DropdownButton
sidebar_label: 6.2 DropdownButton
original_id: dropdownButton
---

Exibe na tela um componente para esolha de opções.

## Exemplo

![DropdownButton](assets/images_components/v2.9.0/dropdown_modal_1.png)

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-dropdownbutton--basic)

## Utilização

### Preparo

Defina uma lista de objetos chave valor com as chaves `value` e `label`.

- A propriedade `label` refere-se ao texto mostrado ao usuário.
- A propriedade `value` refere-se ao valor da opção selecionada.

```javascript
const soccerClubs = [
  {
    value: 'FLA',
    label: 'Flamengo'
  },
  {
    value: 'BOT',
    label: 'Botafogo'
  },
  {
    value: 'FLU',
    label: 'Fluminense'
  },
  {
    value: 'VAS',
    label: 'Vasco da Gama'
  }
]
```

### Implementação

```jsx harmony
<DropdownButton
  label="Para qual time você torce?"
  placeholder="Selecione um clube de futebol"
  value={'Flamengo'}
  optionList={soccerClubs}
  onChange={(e) => {
    selectChange(e)
  }}
/>
```

## Propriedades

### placeholder

- Type: String
- Opcional

Texto a ser exibido no rótulo do componente quando não há nada selecionado.

### optionList

- Type: Array
- Opcional

Recebe um array de objetos com as opções para o cliente selecionar.

```jsx harmony
<Window>
  <DropdownButton optionList={soccerClubs} />
</Window>
```

Se o array do OptionList for recarregado com novas opções, aparecerá novamente o placeholder.

### label

- Type: String
- Opcional

Texto mostrado acima do campo de seleção de opções.

### keyLabel

- Type: String
- Since: 2.11.0
- Default: 'label'
- Opcional

Essa propriedade troca qual a informação que será exibida para o usuário, ao invés de ser label, pode ser qualquer outra parte dentro do objeto como name, title e etc.

### value

- Type: String | Object
- Opcional

Recebe uma string ou um objeto que define o valor default do componente. Pode ser passado o objeto completo e ele automaticamente irá pegar o label que será exibido.

```jsx harmony
<Window>
  <DropdownButton value={'Flamengo'} />
</Window>
```

### disabled

- Type: Boolean
- Opcional

Desabilita o campo

```jsx harmony
<Window>
  <DropdownButton disabled />
</Window>
```

### hideSearch

- Type: Boolean
- Since: 2.11.0
- Opcional

Quando o DropdownButton tem mais de 9 itens, por padrão um modal com o campo de busca é aberto, a propriedade hideSearch esconde o campo de busca.

```jsx harmony
<Window>
  <DropdownButton hideSearch />
</Window>
```

### onChange

- Type: Function
- Obrigatório

Função que retorna a opção selecionada quando o cliente escolhe uma das opções.

```jsx harmony
const selectChange = (e) => {
  console.log('Selected: ', e)
}

;<Window>
  <DropdownButton
    onChange={(e) => {
      selectChange(e)
    }}
  />
</Window>
```

### id

- Type: String
- Opcional

Atribuiu um **id** ao DropdownButton. Indica qual elemento irá receber o `focus` através da propriedade `nextInputId`.

```jsx harmony
<DropdownButton id="pais" />
```

### nextInputId

- Type: String
- Opcional

Permite que o DropdownButton atual realize `focus` no DropdownButton Input referenciado pelo `id`.

```jsx harmony
<DropdownButton nextInputId="pais" />
```

## Exemplo do modal carregado na tela inteira:

![DropdownButton](assets/images_components/v2.9.0/dropdown_modal_2.png)
