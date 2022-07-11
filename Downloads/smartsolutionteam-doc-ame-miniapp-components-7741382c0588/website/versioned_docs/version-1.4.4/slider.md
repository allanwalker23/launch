---
id: version-1.4.4-slider
title: Slider
sidebar_label: Slider
original_id: slider
---

<p style="font-size: 11px; font-style: italic;">Este componente está disponível a partir da versão 1.4.5</p>

Permite que os usuários façam seleções a partir de um intervalo de valores.

>  [**`Image`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

```jsx harmony
<Slider
        min={10}
        max={200}
        value={this.state.value}
        trackColor={'#333'}
        thumbColor={'#666'}
        width={130}
        onChange={(value) => {this.setState({value})}}
    />
```
<br>

## Propriedades

### min 

Define o valor mínimo do controle deslizante.

Aceita apenas **Number** como valor, exemplo: ```min={15}```

Exemplo:
```jsx harmony
<Slider min={10} />
```

### max 

Define o valor máximo do controle deslizante.

Aceita apenas **Number** como valor, exemplo: ```max={100}```

Exemplo:
```jsx harmony
<Slider max={100} />
```

### value

Define o valor inicial do controle deslizante.

Aceita apenas **Number** como valor, exemplo: ```value={20}```

Exemplo:
```jsx harmony
<Slider value={20} />
```

### trackColor

Define a cor da pista de deslizamento.

Aceita apenas **String** como valor, exemplo: ```trackColor={'#333'}```

Exemplo:
```jsx harmony
<Slider trackColor={20} />
```

### thumbColor

Define a cor do objeto deslizante.

Aceita apenas **String** como valor, exemplo: ```thumbColor={'#666'}```

Exemplo:
```jsx harmony
<Slider thumbColor={20} />
```

### disabled

Desabilita o componente, se for verdadeiro o usuário não poderá mover o controle deslizante.

Aceita apenas **Boolean** como valor, exemplo: ```disabled={true}```

Exemplo:
```jsx harmony
<Slider disabled={true} />
```

### renderThumb

Função de renderização personalizada para o conteúdo dinâmico do objeto deslizante.

Aceita apenas **Function** como valor, exemplo: ```renderThumb={this.renderThumb}```

Exemplo:
```jsx harmony
<Slider renderThumb={this.renderThumb} />
```

### renderTrack

 Função de renderização personalizada para a pista de deslizamento.

Aceita apenas **Function** como valor, exemplo: ```renderTrack={this.renderTrack}```

Exemplo:
```jsx harmony
<Slider renderTrack={this.renderTrack} />
```

### onChange

Retorno de chamada, chamado continuamente enquanto o usuário está arrastando o controle deslizante. 

Aceita apenas **Function** como valor, exemplo: ``` onChange={(value) => {this.setState({value} }}```

Exemplo:
```jsx harmony
<Slider onChange={this.onChange} />
```

### step

Valor da etapa do controle deslizante. O valor deve estar entre 0 e max-min.

Aceita apenas **Number** como valor, exemplo: ```step={10}```

Exemplo:
```jsx harmony
<Slider step={10} />
```
