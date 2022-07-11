---
id: version-2.9.0-dropdownButton
title: DropdownButton
sidebar_label: 6.2 DropdownButton
original_id: dropdownButton
---

Exibe na tela um componente para esolha de opções.

## Exemplo

![DropdownButton](assets/images_components/v2.9.0/dropdown_modal_1.png)

## Utilização

### Preparo

Defina uma lista de objetos chave valor com as chaves `value` e `label`.

- A propriedade `label` refere-se ao texto mostrado ao usuário.
- A propriedade `value` refere-se ao valor da opção selecionada.

```javascript
const soccerClubs = [
  {
    value: 'FLA',
    label: 'Flamengo',
  },
  {
    value: 'BOT',
    label: 'Botafogo',
  },
  {
    value: 'FLU',
    label: 'Fluminense',
  },
  {
    value: 'VAS',
    label: 'Vasco da Gama',
  },
];
```

### Implementação

```jsx harmony
<DropdownButton
  label='Para qual time você torce?'
  placeholder='Selecione um clube de futebol'
  value={'Flamengo'}
  optionList={soccerClubs}
  onChange={e => {
    selectChange(e);
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

### value

- Type: String
- Opcional

Recebe uma string que define o valor default do componente.
Substitui o placehold.

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

### onChange

- Type: Function
- Obrigatório

Função que retorna a opção selecionada quando o cliente escolhe uma das opções.

```jsx harmony
const selectChange = e => {
  console.log('Selected: ', e);
};

<Window>
  <DropdownButton
    onChange={e => {
      selectChange(e);
    }}
  />
</Window>;
```
### id

- Type: String
- Opcional

 Atribuiu um **id** ao DropdownButton. Indica qual elemento irá receber o `focus` através da propriedade `nextInputId`.

 ```jsx harmony

  <DropdownButton
    id='pais'
  />
```

### nextInputId

- Type: String
- Opcional

 Permite que o DropdownButton atual realize `focus` no DropdownButton Input referenciado pelo `id`.

 ```jsx harmony

  <DropdownButton
    nextInputId='pais'
  />
```

## Exemplo do modal carregado na tela inteira:

![DropdownButton](assets/images_components/v2.9.0/dropdown_modal_2.png)