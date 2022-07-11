---
id: version-1.4.4-interactive
title: componentes Interactivos
sidebar_label: Interativos
original_id: interactive
---

## Botões

Os botões abaixo têm as mesmas características, tendo apenas alterações visuais.

> Todos os componentes dos botões estendem o **Touchable**, herdando suas propriedades.

```jsx
<SolidButton onClick={()=>{ ...any action }} >Meu primeiro botão</SolidButton>
```


<img align="left" src="./assets/badge_required.svg">
<br>
 
Texto do botão 

```jsx harmony
<SolidButton> children </SolidButton>
```

```jsx harmony
<SoftButton> children </SoftButton>
```

```jsx harmony
<GhostButton> children </GhostButton>
```
 
### icon
 
Ícone do botão 

 ```jsx harmony
<SolidButton icon={'imagem.svg'} size={"large"}>Texto</SolidButton>
```

```jsx harmony
<SoftButton icon={'imagem.svg'} size={"large"}>Texto</SoftButton>
```

```jsx harmony
<GhostButton icon={'imagem.svg'} size={"large"}>Texto</GhostButton>
```

 
### loading
 
Exibe o carregamento no botão, substituindo o texto pelo ícone de carregamento 

```jsx harmony
<SolidButton loading/>
```
 
### size
 
 Altura e tamanho predefinidos da fonte 
-   `small`: height: 30px - Fonte: 1em
-   `medium`: height: 40px - Fonte: 1.5em
-   `default`: height: 60px - Fonte: 2em

```jsx harmony
<SolidButton size={"small"}>Texto</SolidButton>
```

```jsx harmony
<SoftButton size={"medium"}>Texto</SoftButton>
```

```jsx harmony
<GhostButton size={"large"}>Texto</GhostButton>
```


### SolidButton

Botão principal, usado para chamadas de ação do usuário.

```jsx harmony
<SolidButton icon={"711982.svg"} block size={"medium"}>
  Botão de testes
</SolidButton>
```

### GhostButton

Botão secundário, para ações alternativas ao fluxo perfeito do usuário.

```jsx harmony
<GhostButton size={"small"}>Ghost</GhostButton>
```

### SoftButton

Botão de uso proibitivo, para ações destrutivas ao fluxo perfeito do usuário.

```jsx harmony
<SoftButton size={"small"}>Soft</SoftButton>
```

### TextLink

Ele executa a função semelhante a um link html. Evite o uso excessivo.

> Este componente estende o componente **Text**.

```jsx harmony
<TextLink onClic={() => {''}}>Manual do usuário</TextLink>
```


<img align="left" src="./assets/badge_required.svg">
<br>

Texto com link 

```jsx harmony
<TextLink onClick={() => { ...ação qualquer }}>Children</TextLink>
```

### onClick

Função a ser realizada 

```jsx harmony
<TextLink onClick={() => { ...ação qualquer }}>Manual do usuário</TextLink>
```

### disabled

Desativa o componente

```jsx
<TextLink disabled={true}>Manual do usuário</TextLink>
```

### disabledColor

Cor atribuída se o componente tiver a propriedade desativada com um valor verdadeiro (verdadeiro) 

```jsx harmony
<TextLink disabled={true} disabledColor={"green"}>Manual do usuário</TextLink>
```

### textDecoration

 Aplique um dos 4 estilos: *none*, *overline*, *lineThrough* ou *underline*) ao componente 

```jsx harmony
<TextLink textDecoration={"underline"}>Manual do usuário</TextLink>
```


## CircleButton

Botões circulares

> **CircleButton** é um componente que estende de **Touchable**, herdando suas propriedades.

```jsx harmony
<CircleButton
  backgroundColor={"#812"}
  size={'normalIcon'}
  onClick={() => alert("Alert")}
  icon={require("../assets/images/icone_remover.svg")}
/>
```


### icon

ícone do Botão 

```jsx harmony
<CircleButton
  size={'normalIcon'}  
  icon={require("../assets/images/icone_remover.svg")}
/>
```

## onClick

Função a ser realizada

```jsx harmony
<CircleButton  
  size={'normalIcon'}
  onClick={() => alert("Alert")}  
/>
```

### backgroundColor

Cor de fundo do Botão 

```jsx harmony
<CircleButton
  backgroundColor={"#812"}
  size={'normalIcon'}/>
```

### size  

Obrigatório  Tamanho do botão. Um dos tamanhos: `normalIcon`, `mediumIcon`, `bigIcon` 

```jsx harmony
<CircleButton  
  size={'bigIcon'}/>
```

---

## DropdownButton

Toque para exibir uma lista

> **DropdownButton** é um componente que estende de **BaseComponent**, herdando suas propriedades.

```jsx harmony
const options = [
  {
    value: "1",
    label: "opção 1"
  },
  {
    value: "2",
    label: (
      <View marginVertical={2}>
        <Text fontSize={14}>opção 2</Text>
      </View>
    )
  }
];

<DropdownButton
  value={"2"}
  options={options}
  color={"red"}
  fontWeight={500}
  fontSize={20}
  fontFamily={"Ubuntu, sans-serif"}
  placeholder={"Selecione"}
  onChange={e => {
    console.log("onSelect", e);
  }}
/>
```

### options

Obrigatório  Lista com opções 

```jsx harmony
const optionList = [
    {
        id: '89',
        name: 'Opção 1'
    },
    {
        id: '2',
        name: 'Opção 2'
    },
    {
        id: '3',
        name: 'Opção 3'
    }
]

constructor(props) {
    super(props)
    this.state = {
        selectedValue: 'Selecione...'
    }
}

alterOption = () => {
    this.setState({
        value: {
            value: '2',
            label: 'Opção 2'
        }
    })
};

handleSelectChange = (selectedValue) => {
    console.log('_', selectedValue)
    this.setState({
        selectedValue: selectedValue
    })
}


<DropdownButton
  defaultValue={this.state.selectedValue}
  value={this.state.value}
  onSelectChange={this.handleSelectChange}
  optionList={optionList}
  onChange={e => {
      console.log('onSelect não implementado1', e)
  }}
/>
```

### defaultValue

Texto a ser exibido no rótulo 

```jsx harmony
<DropdownButton defaultValue={this.state.selectedValue}/>
```

### value

Opção a ser exibida 

```jsx harmony
<DropdownButton value={this.state.value}/>
```

### onChange

Obrigatório - Função que retorna a opção selecionada 

```jsx harmony
<DropdownButton onChange={e => {
  console.log('onSelect não implementado1', e)
}}/>
```

### color

Cor do texto (somente ao usar texto sem formatação) 

```jsx harmony
<DropdownButton
  defaultValue={this.state.selectedValue}
  value={this.state.value}
  onSelectChange={this.handleSelectChange}
  optionList={optionList}
  color={"red"}
/>
```

### fontWeight

Define a espessura da fonte (somente ao usar texto sem formatação) 

```jsx harmony
<DropdownButton
  defaultValue={this.state.selectedValue}
  value={this.state.value}
  onSelectChange={this.handleSelectChange}
  optionList={optionList}
  fontWeight={400}
/>
```

### fontSize

Define o tamanho da fonte (somente ao usar texto sem formatação) 

```jsx harmony
<DropdownButton
  defaultValue={this.state.selectedValue}
  value={this.state.value}
  onSelectChange={this.handleSelectChange}
  optionList={optionList}
  fontSize={20}
/>
```

### fontFamily

Define a família da fonte (somente ao usar texto sem formatação) 

```jsx harmony
<DropdownButton
  defaultValue={this.state.selectedValue}
  value={this.state.value}
  onSelectChange={this.handleSelectChange}
  optionList={optionList}
  fontFamily={"ubuntu"}
/>
```

### borderWidth

Define a largura da borda inferior

```jsx harmony
<DropdownButton
  defaultValue={this.state.selectedValue}
  value={this.state.value}
  onSelectChange={this.handleSelectChange}
  optionList={optionList}
  borderWidth={3}
/>
```

### borderColor

Muda a cor da borda inferior 

```jsx harmony
<DropdownButton
  defaultValue={this.state.selectedValue}
  value={this.state.value}
  onSelectChange={this.handleSelectChange}
  optionList={optionList}
  borderWidth={3}
  borderColor={"black"}
/>
```

### borderStyle

Estilo da borda 

```jsx harmony
<DropdownButton
  defaultValue={this.state.selectedValue}
  value={this.state.value}
  onSelectChange={this.handleSelectChange}
  optionList={optionList}
  borderSolid={1}
/>
```


---
