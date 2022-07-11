---
id: version-2.10.0-input
title: Input
sidebar_label: 6.4 Input
original_id: input
---

Insere um campo para inserção de dados.

## Exemplo

![input](assets/images_components/v2.0.0/input.png)

## Utilização

```xml
<Window>
    <Input
        inputMode="email"
        type="text"
        mode="danger"
        label="Seu email"
        hint="Preencha corretamente"
        onChange={(value)=>{ ... }}
    />
</Window>
```

## Propriedades

### type

- Type: String
- Opcional

Define o tipo do campo input.

### icon

- Type: String
- Opcional

Nome do ícone a ser exibido no lado direito do Input. São os mesmos nomes do componente AmeIcon.

### iconPath

- Type: String
- Opcional

Path do ícone a ser exibido no lado direito do Input, caso o ícone seja local no projeto.

### onClickIcon

- Type: Function
- Opcional

Função a ser executada quando tocar/clicar o ícone.

### search

**_Deprecated_**

- Type: String
- Opcional

Altera o stylesheet do input para input de busca.

#### Valores aceitos:

- `"text"`
- `"tel"`
- `"url"`
- `"email"`
- `"password"`
- `"number"`
- `password"`

### inputMode

- Type: String
- Opcional

Altera o modo do campo e tipo de teclado.

```xml
<Input inputMode="email"/>
```

#### Valores aceitos:

- `"none"`
- `"text"`
- `"decimal"`
- `"numeric"`
- `"tel"`
- `"search"`
- `"email"`
- `"url"`

### mode

- Type: String
- Opcional

Altera o modo do campo e exibe um ícone para os modos.

Valores aceitos: `'success'`, `'error'`, `'danger'` e `'warning'`.

Exemplo:

```jsx harmony
<Input mode="success" />
```

### placeholder

- Type: String
- Opcional

Texto descritivo dentro do input.

```xml
<Input placeholder="Usuário"/>
```

### label

- Type: String
- Opcional

Rótulo do input.

```xml
<Input label="Seu email"/>
```

### hint

- Type: String
- Opcional

Permite adicionar uma mensagem logo abaixo do input, indicando um erro ou informação importante. Pode ser numéricos, alfabéticos ou caracteres.

```xml
<Window>
<Input hint="Preencha corretamente"/>
</Window>
```

### nextInputId

- Type: String
- Opcional

Permite que o Input atual realize `focus` no Input referenciado.

**Obrigatório o uso da propriedade `id`**

```xml
<Input id="emai" nextInputId="telefone"/>
```

### previousInputId

- Type: String
- Opcional

Esta propriedade faz referência ao input anterior na hierarquia de inputs do documento.

```xml
<Input id="emai" previousInputId="telefone"/>
```

### Id

- Type: String
- Opcional

Atribuiu um **id** ao input. Indica qual elemento irá receber o `focus` através da propriedade `nextInputId`.

```xml
<Input id="idade" />
```

### mask

- Type: String
- Opcional

Indica que o conteúdo do input deverá ser formatado de acordo com uma máscara.

```xml
<Input mask={"999.999.999-99"} />
```

### autoCapitalize

- Type: String
- Opcional

Atributo que sugere ao sistema operacional adicionar uma letra maiúscula nas sentenças conforme o valor.

Aceita somente os valores:

- off - Não aplica capitalização.
- on - Aplica capitalização padrão do sistema operacional.
- sentences - Tenta aplicar capitalização em frases.
- words - Tenta aplicar capitalização em palavras.
- characters - Tenta aplicar caixa alta em todas as letras.

```xml
<Input autoCapitalize="off" />
```

### spellcheck

- Type: Boolean
- Opcional

Este atributo permite ativar ou desativar a checagem de ortografia.

```xml
<Input spellcheck={false} />
```

### autocorrect

- Type: Boolean
- Opcional

Atributo que indica se é necessário ativar ou não a correção automática enquanto o usuário estiver editando este campo.
É necessário que o `spellcheck` esteja declarado na tag para o atributo funcionar.

```xml
<Input spellcheck autocorrect={true} />
```

### disabled

- Type: Boolean
- Opcional

Desabilita o campo

```xml
<Input disabled />
```

### onChange

- Type: Function
- Opcional

Função a ser executada quando o valor é alterado.<br>

```xml
<Input onChange={() => ``'``'} />
```

### onSubmit

- Type: Function
- Opcional

Função a ser executada ao submeter o campo.

```xml
<Input onSubmit={() => ``'``'} />
```

### value

- Type: String
- Opcional

Define o valor do campo

```xml
<Input value="Olá, mundo!"  />
```

### password

- Type: Boolean
- Opcional

Altera o campo para o tipo senha.

```xml
<Input password />
```

### autoNextOnFill

- Type: Boolean
- Opcional

Deve ser usado em conjunto com as propriedades maxLength e nextInputId

Localiza automaticamente o próximo campo input a ser preenchido quando este atinge o limite máximo de caracteres.

```xml
<Input autoNextOnFill maxLength={3} nextInputId="proximoInput"/>
```

### autoPreviousOnEmpty

- Type: Boolean
- Opcional

Deve ser usado em conjunto com a propriedade previousInputId

Localiza automaticamente o campo input anterior a ser preenchido quando o usuário digita backspace em um input vazio.

```xml
<Input autoPreviousOnEmpty previousInputId="inputAnterior"/>
```

### autoComplete

- Type: Boolean
- Opcional

Preenchimento automático do campo.

```xml
<Input autoPreviousOnEmpty autoComplete="tel"/>
```

### multiline

- Type: Boolean
- Opcional

Permite múltiplas linhas ao componente. Tem valor false como padrão.

```xml
<Input multiline={true} /
```

### maxLength

- Type: Number
- Opcional

Indica o limite máximo de caracteres.

```xml
<Input maxLength={3}/>
```


#### Valores aceitos:

- `'off'`
- `'on'`
- `'name`'
- `'honorific-prefix'`
- `'given-name'`
- `'additional-name'`
- `'family-name'`
- `'honorific-suffix'`
- `'nickname'`
- `'email'`
- `'username'`
- `'new-password'`
- `'current-password'`
- `'one-time-code'`
- `'organization-title'`
- `'organization'`
- `'street-address'`
- `'address-line1'`
- `'address-line2'`
- `'address-line3'`
- `'address-level4'`
- `'address-level3'`
- `'address-level2'`
- `'address-level1'`
- `'country'`
- `'country-name'`
- `'postal-code'`
- `'cc-name'`
- `'cc-given-name'`
- `'cc-additional-name'`
- `'cc-family-name'`
- `'cc-number'`
- `'cc-exp'`
- `'cc-exp-month'`
- `'cc-exp-year'`
- `'cc-csc'`
- `'cc-type'`
- `'transaction-currency'`
- `'transaction-amount'`
- `'language'`
- `'bday'`
- `'bday-day'`
- `'bday-month'`
- `'bday-year'`
- `'sex'`
- `'tel'`
- `'tel-country-code'`
- `'tel-national'`
- `'tel-area-code'`
- `'tel-local'`
- `'tel-extension'`
- `'impp'`
- `'url'`
- `'photo'`
