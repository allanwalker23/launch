---
id: version-1.4.4-input
title: Input
sidebar_label: Input
original_id: input
---

Campo para inserção de texto

>  [**`Input`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.

#### *Está tag é autofechável*

Exemplo:
```jsx harmony
<Input />
```

![Input](assets/old_versions/input-mode.png)

## Propriedades

### mode

Altera o modo do campo e exibe um ícone para os modos.

Valores aceitos: ```{'success'}```, ```{'error'}``` e ```{'warning'}```.
<br>

Valor padrão: sem modo.

Nenhum modo é exibido caso a propriedade disabled seja verdadeira ou um ícone personalizado seja enviado através das propriedades iconLeft ou iconRight.

Aceita somente **String**, exmeplo: ```mode={"error"}```

Exemplo:
<br>

```jsx harmony
<Input mode={'success'} />
```

```jsx harmony
<Input mode={'error'} />
```

```jsx harmony
<Input mode={'warning'} />
```

![Input](assets/old_versions/input-mode.png)

<hr>

### inputMode

Altera o modo do campo e tipo de teclado. 

Valores aceitos: ```{'none'}```, ```{'text'}```, ```{'decimal'}```, ```{'numeric'}```, ```{'tel'}```, ```{'search'}```, ```{'email'}``` e ```{'url'}```.


Valor padrão: ```{'text'}```

Aceita somente **String**, exmeplo: ```inputMode={"decimal"}```

Exemplo:
```jsx harmony
<Input inputMode={'none'} />
```

```jsx harmony
<Input inputMode={'text'} />
```

```jsx harmony
<Input inputMode={'decimal'} />
```

```jsx harmony
<Input inputMode={'numeric'} />
```

```jsx harmony
<Input inputMode={'tel'} />
```

```jsx harmony
<Input inputMode={'search'} />
```

```jsx harmony
<Input inputMode={'email'} />
```

```jsx harmony
<Input inputMode={'url'} />
```

![Input](assets/old_versions/input-inputMode1.png)

![Input](assets/old_versions/input-inputMode2.png)

### multiline

O campo `input` é transformado em `textarea`

Aceita somente **Boolean**, exemplo: ```multiline```, ```multiline={true}``` ou ```multiline={false}```.


Exemplo:
```jsx harmony
<Input multiline />
```

![Input](assets/old_versions/input-multiline.png)

### nextInputId

Permite que o Input atual realize ```focus``` no Input referenciado. **Obrigatório o uso da proprieade ```id```**

Aceita somente **String**, exemplo:  ```nextInputId={'email'}```
<br>

Exemplo:

```jsx harmony
<Input id={'emai'} nextInputId={'telefone'}/>
```

### previousInputId

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.4</p>

Esta propriedade faz referência ao input anterior na hierarquia de inputs do documento.

Aceita somente **String**, exemplo:  ```previousInputId={'email'}```

Exemplo:

```jsx harmony
<Input id={'emai'} previousInputId={'telefone'}/>
```

### id 

Atribuiu um **id** ao input. Indica qual elemento irá receber o ```focus``` através da propriedade ```nextInputId```.

Aceita somente **String**, exemplo: ```id={"sobrenome"}```

Exemplo:
```jsx harmony
<Input id={'idade'} />
```

### mask

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.4</p> 

Indica que o conteúdo do input deverá ser formatado de acordo com uma máscara.

Aceita somente **String**, exemplo: ```mask={"999.999.999-99"}```

Exemplo:
```jsx harmony
<Input mask={"999.999.999-99"} />
```

### spellcheck

Atributo que indica que o elemento deve ser, se possível, verificado quanto a erros de ortografia.

Aceita somente **Boolean**, exemplo: ```spellcheck```, ```spellcheck={true}``` ou ```spellcheck={false}```.

Exemplo:
```jsx harmony
<Input spellcheck />
```

### autocorrect

Atributo que indica se é necessário ativar ou não a correção automática enquanto o usuário estiver editando este campo. É necessário que o ```spellcheck``` esteja declarado na tag para o atributo funcionar.

Aceita somente **Boolean**, exemplo: ```autocorrect```, ```autocorrect={true}``` ou ```autocorrect={false}```.

Exemplo:
```jsx harmony
<Input autocorrect />
```

### disabled

Desabilita o campo

Aceita somente **Boolean**, exemplo: ```disabled```, ```disabled={true}``` ou ```disabled={false}```.
<br>

Exemplo:
```jsx harmony
<Input disabled />
```

![input](assets/old_versions/input-disabled.png)


### iconLeft

Ícone personalizado que será exibido na parte esquerda do input.<br>

Aceita somente **String**, exemplo: ```iconLeft={'http://lorempixel.com/300/'}```

Exemplo:
```jsx harmony
<Input iconLeft={'http://lorempixel.com/300/300/food/'} />
```

### iconRight

Ícone personalizado que será exibido na parte direita do input.<br>

Aceita somente String, exemplo: ```iconRight={'http://lorempixel.com/300/'}```

Exemplo:
```jsx harmony
<Input iconRight={'http://lorempixel.com/300/300/food/'} />
```

![Input](assets/old_versions/input-icons.png)

### height

Define a altura do input.<br>

Aceita **String** ou **Number**, exemplo: ```height={'10%'}``` ou ```height={500}```

Exemplo:
```jsx harmony
<Input height={'20%'} />
```

### block

Exibe o componente com largura em 100%.<br>

Aceita somente **Boolean**, exemplo: ```block```, ```block={true}``` ou ```block={false}```.
<br>

Exemplo:
```jsx harmony
<Input block />
```

### onChange

Função a ser executada quando o valor é alterado.<br>

Aceita somente **Function**, exemplo: ```onChange={e => console.log(e)}```

Exemplo:
```jsx harmony
<Input onChange={() => ''} />
```

### onSubmit

Função a ser executada ao submete o campo.<br>

Aceita somente **Function**, exemplo: ```onSubmit={e => console.log(e)}```

Exemplo:
```jsx harmony
<Input onSubmit={() => ''} />
```

### value

Valor do campo input.<br>

Aceita somente **String**, exemplo: ```value={'Hello World'}```


Exemplo:
```jsx harmony
<Input value={'Olá, mundo!'}  />
```

### borderWidth

Espessura da borda do input.<br>

Aceita **String** ou **Number**, exemplo: ```borderWidth={'10vw'}``` ou ```borderWidth={10}```

Exemplo:
```jsx harmony
<Input borderWidth={'20%'}  />
```

### borderColor

Cor da borda do input.<br>

Aceita somente **String**, exemplo: ```borderColor={'#eddede'}```

Exemplo:
```jsx harmony
<Input borderColor={'#1f66ff'}  />
```

### borderStyle

Estilo da borda do input

Tipos aceitos: ```borderStyle={'solid'}```, ```borderStyle={'dotted'}```, ```borderStyle={'dashed'}``` ou ```borderStyle={'none'} ```

Exemplo:
```jsx harmony
<Input borderStyle={'solid'}  />
```

### fontSize

Tamanho da fonte do texto.<br>

Aceita **String** ou **Number**, exemplo: ```fontSize={'25vw'}``` ou  ```fontSize={50}```

Exemplo:
```jsx harmony
<Input fontSize={'30%'}  />
```

### fontWeight

"Peso" da fonte do texto.<br>

Aceita **String** ou **Number**, exemplo: ```fontWeight={'bold'}``` ou  ```fontWeight={600}```

Exemplo:
```jsx harmony
<Input fontWeight={100}  />
```

### lineHeight

Altura do campo de texto

Aceita **String** ou **Number**, exemplo: ```lineHeight={'10%'}``` ou  ```lineHeight={5}```

Exemplo:
```jsx harmony
<Input lineHeight={8}  />
```

### password

Altera o campo para o tipo senha.<br>

Aceita somente **Boolean**, exemplo: ```password```, ```password={true}``` ou ```password={false}```.

Exemplo:
```jsx harmony
<Input password />
```

![input](assets/old_versions/input-password.png)

### autoNextOnFill

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

Deve ser usado em conjunto com as propriedades maxLength e nextInputId

Localiza automaticamente o próximo campo input a ser preenchido quando este atinge o limite máximo de caracteres.

Aceita somente **Boolean**, exemplo: ```autoNextOnFill```,  ```autoNextOnFill={true}``` ou 
```autoNextOnFill={false}```

Exemplo:
```jsx harmony
<Input autoNextOnFill maxLength={3} nextInputId={'proximoInput'}/>
```

### autoPreviousOnEmpty

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.4</p>

Deve ser usado em conjunto com a propriedade previousInputId

Localiza automaticamente o campo input anterior a ser preenchido quando o usuário digita backspace em um input vazio.

Aceita somente **Boolean**, exemplo: ```autoPreviousOnEmpty```,  ```autoPreviousOnEmpty={true}``` ou 
```autoPreviousOnEmpty={false}```

Exemplo:
```jsx harmony
<Input autoPreviousOnEmpty previousInputId={'inputAnterior'}/>
```
### placeholder

Conteúdo a ser exibido no rótulo do componente..

Aceita somente **String**, exemplo: ```placeholder={'Usuário'}```

Exemplo:
```jsx harmony
<Input placeholder={'Digite sua senha'}/>
```