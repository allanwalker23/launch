---
id: version-2.1.8-textLink
title: TextLink
sidebar_label: 6.20 TextLink
original_id: textLink
---

Executa a função semelhante a um link html. Evite o uso excessivo.

## Exemplo
![textlink](assets/images_components/v2.0.0/text-link.jpg)
## Utilização
O TextLink obrigatoriamente precisa ser usado com o Paragraph, assim você consegue controlar o tamanho da fonte.

```jsx harmony
<Paragraph size='md'>
  Um texto qualquer{' '}
  <TextLink text='Texto Link' onClick='() => { funcaoClick() }'>{' '}
  [b]um texto bold[/b]
</Paragraph>
```

Obs. Usamos aqui para espaço {' '} porque em muitos casos o prettier pulará uma linha onde estiver o componente do text link, com o {' '} você consegue forçar o espaço no texto.
