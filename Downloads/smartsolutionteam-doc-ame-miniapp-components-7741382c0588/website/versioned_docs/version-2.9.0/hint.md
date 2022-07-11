---
id: version-2.9.0-hint
title: Hint
sidebar_label: 6.21 Hint
original_id: hint
---

Componente para exibir alertas em formulários

## Exemplo

![hint](assets/images_components/v2.0.0/hint.jpg)

## Utilização

```xml
  <Hint
    status='success'
    text='Retorno de sucesso'
    show={true}
  />
```

## Propriedades
### status

- Type: String
- Opcional

Essa propriedade define qual será a cord do hint, as opções são: success, warning, error

### text

- Type: String
- Obrigatório

Propriedade que recebe qual será o texto apresentado

### show

- Type: Boolean
- Opcional

Propriedade que exibe ou esconde o hint, essa propriedade é um booleano. Assume false como default