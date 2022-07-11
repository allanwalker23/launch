---
id: version-2.3.0-textLink
title: TextLink
sidebar_label: 6.20 TextLink
original_id: textLink
---

Executa a função semelhante a um link html. Evite o uso excessivo.

## Exemplo
![textlink](assets/images_components/v2.0.0/text-link.jpg)
## Utilização
O TextLink pode ser usado com o Paragraph, assim você consegue controlar o tamanho da fonte sem precisar passar um parâmetro para o paragraph e outro para o textLink por exemplo.

```jsx harmony
<Paragraph size='md'>
  Um texto qualquer{' '}
  <TextLink text='Texto Link' onClick='() => { funcaoClick() }'>{' '}
  [b]um texto bold[/b]
</Paragraph>
```

## Propriedades
### text
Type: String
Recebe o texto que deverá ser exibido

### onClick
Type: Function
É passada a função que será chamada ao clicar no textLink

### color
Type: String
Default: red
Options: white, red
Nos casos em que o textLink será exibido nos backgrounds escuros, pode ser passado na propriedade color='white'

### size
Type: String
Essa propriedade pode ser usada para o caso de não ter um paragraph acompanhando o textLink, exemplo:

```jsx harmony
<View textAlign='center' background='amecolor-primary-dark'>
  <TextLink
    size='large'
    text='clique aqui'
    onClick={() => this.handleClick('Clique')}
    color='white'
  />
</View>
```

Obs. Usamos aqui para espaço {' '} porque em muitos casos o prettier pulará uma linha onde estiver o componente do text link, com o {' '} você consegue forçar o espaço no texto.
