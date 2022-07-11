---
id: version-2.8.0-input
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

### Type

Define o tipo do campo input.

### icon

Nome do ícone a ser exibido no lado direito do Input. São os mesmos nomes do componente AmeIcon.

### iconPath

Path do ícone a ser exibido no lado direito do Input, caso o ícone seja local no projeto.

### onClickIcon

Função a ser executada quando tocar/clicar o ícone.

### search

**_Deprecated_**

Altera o stylesheet do input para input de busca.

#### Valores aceitos:

- `"text"`
- `"tel"`
- `"url"`
- `"email"`
- `"password"`
- `"number"`
- `password"`

### InputMode

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

### Mode

Altera o modo do campo e exibe um ícone para os modos.

Valores aceitos: `'success'`, `'error'`, `'danger'` e `'warning'`.

Aceita somente **String**

Exemplo:

```jsx harmony
<Input mode="success" />
```

### Placeholder

Texto descritivo dentro do input.

```xml
<Input placeholder="Usuário"/>
```

### Label

Rótulo do input.

```xml
<Input label="Seu email"/>
```

### Hint

Permite adicionar uma mensagem logo abaixo do input, indicando um erro ou informação importante. Pode ser numéricos, alfabéticos ou caracteres.

```xml
<Window>
<Input hint="Preencha corretamente"/>
</Window>
```

### NextInputId

Permite que o Input atual realize `focus` no Input referenciado.

**Obrigatório o uso da propriedade `id`**

```xml
<Input id="emai" nextInputId="telefone"/>
```

### PreviousInputId

Esta propriedade faz referência ao input anterior na hierarquia de inputs do documento.

```xml
<Input id="emai" previousInputId="telefone"/>
```

### Id

Atribuiu um **id** ao input. Indica qual elemento irá receber o `focus` através da propriedade `nextInputId`.

```xml
<Input id="idade" />
```

### Mask

Indica que o conteúdo do input deverá ser formatado de acordo com uma máscara.

```xml
<Input mask={"999.999.999-99"} />
```

### AutoCapitalize

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

### Spellcheck

Este atributo permite ativar ou desativar a checagem de ortografia.

```xml
<Input spellcheck={false} />
```

### Autocorrect

Atributo que indica se é necessário ativar ou não a correção automática enquanto o usuário estiver editando este campo.
É necessário que o `spellcheck` esteja declarado na tag para o atributo funcionar.

```xml
<Input spellcheck autocorrect={true} />
```

### Disabled

Desabilita o campo

```xml
<Input disabled />
```

### OnChange

Função a ser executada quando o valor é alterado.<br>

```xml
<Input onChange={() => ``'``'} />
```

### OnSubmit

Função a ser executada ao submeter o campo.

```xml
<Input onSubmit={() => ``'``'} />
```

### Value

Define o valor do campo

```xml
<Input value="Olá, mundo!"  />
```

### Password

Altera o campo para o tipo senha.

```xml
<Input password />
```

### AutoNextOnFill

Deve ser usado em conjunto com as propriedades maxLength e nextInputId

Localiza automaticamente o próximo campo input a ser preenchido quando este atinge o limite máximo de caracteres.

```xml
<Input autoNextOnFill maxLength={3} nextInputId="proximoInput"/>
```

### AutoPreviousOnEmpty

Deve ser usado em conjunto com a propriedade previousInputId

Localiza automaticamente o campo input anterior a ser preenchido quando o usuário digita backspace em um input vazio.

```xml
<Input autoPreviousOnEmpty previousInputId="inputAnterior"/>
```

### Autocomplete

Preenchimento automático do campo.

```xml
<Input autoPreviousOnEmpty autocomplete="tel"/>
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
