---
id: version-2.0.0-dropdownButton
title: DropdownButton
sidebar_label: 6.2 DropdownButton
original_id: dropdownButton
---

Exibe na tela um componente para esolha de opções.

## Exemplo

![DropdownButton](assets/images_components/v2.0.0/dropdown.jpg)

## Utilização

### Preparo

Defina uma lista de objetos chave valor com as chaves `value` e `label`.

* A propriedade `label` refere-se ao texto mostrado ao usuário.
* A propriedade `value` refere-se ao valor da opção selecionada.

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
       }
]
```

### Implementação

```jsx harmony
<DropdownButton
    placeholder="Selecione um clube de futebol"
    value={this.state.selectedClubValue}
    optionList={soccerClubs}
    onChange={this.saveClubOnState}
/>
```

## Propriedades

### Placeholder

Texto a ser exibido no rótulo do componente quando não há nada selecionado.

### OptionList

Recebe um array de objetos com as opções para o cliente selecionar.

```jsx harmony
<Window>
    <DropdownButton optionList={soccerClubs}/>
</Window>
```

### Value

Mostra a opção selecionada.

O valor informado em `value` deve ser o mesmo valor da propriedade `value` de algum dos objetos da lista de opções.
Caso contrário nenhuma opção será mostrada.

```jsx harmony
<Window>
    <DropdownButton value={"FLA"}/>
</Window>
```

### Disabled

Desabilita o campo

```jsx harmony
<Window>
    <DropdownButton disabled />
</Window>
```

### OnChange

Função que retorna a opção selecionada quando o cliente escolhe uma das opções.

```jsx harmony
<Window>
    <DropdownButton onChange={(selectedValue, selectedObject) => { ... }}/>
</Window>
```

O parâmetro `selectedValue` entrega a propriedade `value` da opção selecionada.

O parâmetro `selectedObject` entrega o objeto inteiro da opção selecionada.

### RenderItem

Use a propriedade renderItem para assumir a renderização de cada um dos itens da lista.

Exemplo:
```jsx harmony
<Window>
    <DropdownButton renderItem={({label, value, index}) => { ... }}/>
</Window>
```

O parâmetro `label` entrega a propriedade `label` da opção selecionada.

O parâmetro `value` entrega a propriedade `value` da opção selecionada.

O parâmetro `index` entrega o índice de ordenação da opção selecionada.
