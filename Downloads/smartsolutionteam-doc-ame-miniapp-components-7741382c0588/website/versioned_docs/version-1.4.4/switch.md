---
id: version-1.4.4-switch
title: Switch
sidebar_label: Switch
original_id: switch
---

Checkbox usado como um Toggle.

>  [**`Switch`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

Exemplo:
```jsx harmony
constructor(props) {
    super(props)
    this.state = {
        checked: false
    }
}
 
onChangeHandler = e => {
    console.log(e? 'Switch ON': 'Switch OFF')
    this.setState({ value: !this.state.checked })
};
 
render() {
    return (
        <Switch
            onChange={e => {
            this.onChangeHandler(e)
            }}
            disabled={false}
            checked={this.state.checked}
            disabledColor={this.state.checked && '#ff00ff'}
        />
    )
}
```

![switch](assets/old_versions/switch.png)

## Propriedades

### disabled

Desabilita o switch.<br>

Aceita somente **Boolean**, exemplo: ```disabled```, ```disabled={true}``` ou ```disabled={false}```

Exemplo:
```jsx harmony
<Switch disabled={true} />
```


### disabledColor
 
Cor exibida com clareamento quando o componente está desativado, mas seu valor é igual a `true`, ou seja, marcado por padrão. 

Aceita somente **String**, exemplo: ```disabledColor={"yellow"}```.

Exemplo:
```jsx harmony
    <Switch
        disabledColor={this.state.checked && '#ff00ff'}
    />
```

### checked  

Exibe os estados em que o Toggle Switch está `ativo` ou `inativo`.

Aceita somente **Boolean**, exemplo: ```checked```, ```checked={true}``` ou ```checked={false}```.

Exemplo:
```jsx harmony
<Switch checked={this.state.checked} />
```
<br>

### onChange
 
Função executada ao escolher uma das opções .

Aceita somente **Function**, exemplo: ```onChange={e => console.log(e)}```.

Exemplo:
```jsx harmony
<Switch onChange={e => {this.onChangeHandler(e)}} />
```