---
id: version-2.9.0-spacing
title: Spacing
sidebar_label: 3.5 Spacing
original_id: spacing
---

Componente que insere um espaço entre outros componentes.

## Exemplo

```xml
<View>
  <Paragraph>Abaixo ele no modo inativo</Paragraph>
  <Spacing size='lg' />
  <Button
    dataCy='quaternaryButtonDisabled'
    disabled
    label='Prosseguir'
    type='quaternary'
    onClick={() => console.log('Componente Button')}
  />
</View>
```

## Propriedades

### size

- Type: String
- Opcional

Valor padrão: **xxxs**

Propriedade que define o tamanho do espaçamento na vertical entre os componentes.

Abaixo segue uma lista dos valores de espaçamento para a propriedade **size**, do menor para o maior.

- None: `none`
- Quarck: `quarck`
- Nano: `nano`
- Extra extra extra small: `xxxs`
- Extra extra small: `xxs`
- Extra small: `xs`
- Small: `sm`
- Medium: `md`
- Large: `lg`
- Extra large: `xl`
- Double extra large: `xxl`
- Triple extra large: `xxxl`
- Display: `display`
- Giant: `giant`


```xml
<Spacing size='nano' />
```

### horizontal

- Type: Boolean
- Opcional

Propriedade que muda a orientação do espaçamento para horizontal.

Abaixo segue uma lista dos valores de espaçamento para a propriedade **size**, do menor para o maior.

- None: `none`
- Quarck: `quarck`
- Nano: `nano`
- Extra extra extra small: `xxxs`
- Extra extra small: `xxs`
- Extra small: `xs`
- Small: `sm`
- Medium: `md`
- Large: `lg`
- Extra large: `xl`

```xml
<Spacing horizontal size='md' />
```