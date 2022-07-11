---
id: version-2.3.0-secureInput
title: SecureInput
sidebar_label: 6.11 SecureInput
original_id: secureInput
---

Exibe uma entrada de valor de forma segura.

## Exemplo

![secureinput](assets/images_components/v2.0.0/secureinput.png)

## Utilização

```xml
<SecureInput
  inputMode='text'
  length={4}
  onChange={e => console.log(e)}
/>
```

### OnChange
Type: **Function**

Função a ser executada quando o valor é alterado. É necessário atribuir um parâmetro na função para obter o valor do input.

```xml
  <SecureInput onChange={value => console.log(value)} />
```

### InputMode
Type: **String**

Tipo de teclado a ser utilizado no input. Valores possíveis são 'text' e 'numeric'.

```xml
  <SecureInput inputMode={'numeric'} />
```

### Length
Type: **Numeric**

Tamanho do input em quantidade de caracteres do input, podendo ser alternado entre os valores 4, 5 e 6. O padrão é 4.

```xml
  <SecureInput length={5} />
```

### Color
Type: **String**

Valor da cor a ser atribuída ao input. O padrão é neutralcolor-lightest.

```xml
  <SecureInput color={'amecolor-primary-dark'} />
```

### ShowCaracters
Type: **Boolean**

Opção para mostrar caracteres digitados. 

Valores aceitos: showCaracters, showCaracters={true}, showCaracters={false}

```xml
  <SecureInput showCaracters />
```