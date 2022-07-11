---
id: version-2.19.0-nav
title: Nav
sidebar_label: 7.6 Nav
original_id: nav
---

Componente de navegação.

![textlink](assets/images_components/v2.19.0/nav_ex1.png)

Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-nav--basic)


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

| Propriedade     | Descrição                                                                          | Type     | Default               | Obrigatório |
|-----------------|------------------------------------------------------------------------------------|----------|-----------------------|-------------|
| backgroundColor | Atribui cor de background desejada quando utilizado a barra de rolagem para baixo. | String   | neutralcolor-lightest | não         |
| iconColor       | Atribui cor a ser utilizada nos icones do componente Nav.                          | String   | neutralcolor-lightest | não         |
| sticky          | Quando utilizado o componente acompanhe fixo na rolagem da tela.                   | Boolean  | false                 | não         |
| safeArea        | Atribui uma margem de segurança acima dos icones do componente.                    | Boolean  | false                 | não         |
| onBackClick     | Atribui a função a ser executada quando clicado no ícone left-arrow.               | Function | null                  | não         |
| onCloseClick    | Atribui a função a ser executada quando clicado no ícone close.                    | Function | null                  | não         |

## Exemplos

Abaixo, alguns exemplos usando o Nav:

![Carousel](assets/images_components/v2.19.0/nav_ex2.png)

```xml
<View>
    <Nav
      sticky
      iconColor='neutralcolor-lightest'
      backgroundColor='amecolor-primary-medium'
      onBackClick={() => console.log('Go Back')}
      onCloseClick={() => console.log('Close')}
    />
</View>
```