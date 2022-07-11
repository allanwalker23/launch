---
id: version-1.4.4-dropdownButton
title: DropdownButton
sidebar_label: DropdownButton
original_id: dropdownButton
---

Toque para exibir uma lista.

> [**`DropdownButton`**]() é um componente que estende de [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Preparando a lista de itens*

O primeiro passo é definir a lista de opções, para isso você deverá montar uma lista como essa abaixo:

```jsx harmony
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

Cada item do array pode conter outras informações, mas para o dropdown apenas `value` e `label` são importantes.
A propriedade `label` refere-se ao texto mostrado ao usuário.
A propriedade `value` refere-se ao valor da opção selecionada.

#### *Está tag é autofechável*

O markup abaixo aproveita a lista feita acima.

```jsx harmony
<DropdownButton
    placeholder={'Selecione um clube de futebol'}
    value={this.state.selectedClubValue}
    optionList={soccerClubs}
    onChange={this.saveClubOnState}
/>
```

![DropdownButton](assets/old_versions/dropdown.png)

## Propriedades

### placeholder

Conteúdo a ser exibido no rótulo do componente quando não há nada selecionado, podendo ser **String**.

Exemplo:
```jsx harmony
<DropdownButton placeholder={'Selecione um clube de futebol'}/>
```


### optionList 

![](assets/badge_required.svg)<br>

Recebe um array de objetos com as opções para o cliente selecionar. 

Exemplo:
```jsx harmony
<DropdownButton optionList={soccerClubs} />
```

### value

Mostra a opção selecionada. 
O valor informado em `value` deve ser o mesmo valor da propriedade `value` de algum dos objetos da lista de opções.
Caso contrário nenhuma opção será mostrada.

Exemplo:
```jsx harmony
<DropdownButton value={valueToShow}/>
```

### disabled

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.5</p>

Desabilita o campo

Aceita somente **Boolean**, exemplo: ```disabled```, ```disabled={true}``` ou ```disabled={false}```.
<br>

Exemplo:
```jsx harmony
<DropdownButton disabled />
```

### onChange
 
![](assets/badge_required.svg)

Função que retorna a opção selecionada. 

Exemplo:
```jsx harmony
<DropdownButton onChange={(selectedValue, selectedObject) => {
  
}}/>
```

O parâmetro `selectedValue` entrega a propriedade `value` da opção selecionada.

O parâmetro `selectedObject` entrega o objeto inteiro da opção selecionada.

### renderItem

Use a propriedade renderItem para assumir a renderização de cada um dos itens da lista.

Exemplo:
```jsx harmony
<DropdownButton renderItem={({label, value, index, style}) => {
  
}}/>
```

O parâmetro `label` entrega a propriedade `label` da opção selecionada.

O parâmetro `value` entrega a propriedade `value` da opção selecionada.

O parâmetro `index` entrega o índice de ordenação da opção selecionada.

O parâmetro `style` entrega o objeto de estilos que seria utilizado normalmente. 
Os parâmetros informados no objeto style são:
* boxSizing
* width
* height
* display
* alignItems
* paddingLeft
* paddingRight
