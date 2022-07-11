---
id: version-2.9.0-nav
title: Nav
sidebar_label: 7.6 Nav
original_id: nav
---

Componente de navegação.

## Utilização

```xml
<Nav
  backgroundColor={'amecolor-secondary-dark'}
  iconColor={'amecolor-primary-light'}
  sticky
  safeArea={true}
  onBackClick={() => alert('BackClick')}
  onCloseClick={() => alert('CloseClick')}
/>
```

## Propriedades

### backgroundColor

- Type: String
- Opcional

Atribui cor de background desejada quando utilizado a barra de rolagem para baixo.

```xml
<Nav backgroundColor={'amecolor-secondary-light'} />
```

### iconColor

- Type: String
- Opcional

Atribui cor a ser utilizada nos icones do componente Nav.

```xml
<Nav iconColor={'amecolor-secondary-light'} />
```

### sticky

- Type: Boolean
- Opcional

Quando utilizado, esta props atribui um valor boolean true para que o componente acompanhe fixo na rolagem da tela.

```xml
<Nav sticky />
```

### safeArea

- Type: Boolean
- Opcional

Atribui uma margem de segurança acima dos icones do componente.

```xml
<Nav safeArea={true} />
```

### onBackClick

- Type: Function
- Opcional

Atribui a função a ser executada quando clicado no ícone left-arrow.

```xml
<Nav onBackClick={() => alert('BackClick')} />
```

### onCloseClick

- Type: Function
- Opcional

Atribui a função a ser executada quando clicado no ícone close.

```xml
<Nav onCloseClick={() => alert('CloseClick')} />
```
