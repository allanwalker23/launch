---
id: version-2.18.0-textlink
title: TextLink
sidebar_label: 6.20 TextLink
original_id: textlink
---

Executa a função semelhante a um link html. Evite o uso excessivo.

![textlink](assets/images_components/v2.0.0/text-link.jpg)

## Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/textos-textlink--basic)

## Utilização
O TextLink pode ser usado com o Paragraph, assim você consegue controlar o tamanho da fonte sem precisar passar um parâmetro para o paragraph e outro para o textLink por exemplo.

```xml
<Paragraph size='md'>
  Um texto qualquer
  <TextLink onClick='() => { funcaoClick() }'/> Texto Link </TextLink>
  [b]um texto bold[/b]
</Paragraph>
```

## Propriedades

| Propriedade | Descrição                                                                                                                                  | Type     | Default | Obrigatório |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|-------------|
| text        | Recebe o texto que deverá ser exibido.                                                                                                     | Children | null    | não         |
| onClick     | É passada a função que será chamada ao clicar no textLink.                                                                                 | Function | null    | sim         |
| color       | Propriedade de cor para o TextLink. Tem como opções white e red .                                                                          | String   | red     | não         |
| leftIcon    | Propriedade que exibe um ícone na esquerda do texto e pode receber tanto o ícone em si quanto a propriedade icon do [AmeIcon](ameIcon.md). | String   | null    | não         |
| rightIcon   | Propriedade que exibe um ícone na direita do texto e pode receber tanto o ícone em si quanto a propriedade icon do [AmeIcon](ameIcon.md).  | String   | null    | não         |
| size        | Propriedade que permite aumentar o tamanho da  [font](fontSizes.md)                                                                        | String   | null    | não         |
| disabled    | Propriedade que desabilita o clique.                                                                                                       | Boolean  | false   | não         |

## Exemplos

Abaixo, alguns exemplos usando o TextLink:

![TextLink](assets/images_components/v2.18.0/textLink_ex1.png)

```xml
<View>
  <Paragraph size='lg'>
    [b]Clique[/b]
    <TextLink onClick={() => this.handleClick()} /> aqui </TextLink>
    [b]AGORA!!![/b]
  </Paragraph>
</View>
```
Usamos {' '} para espaço porque em muitos casos o prettier com o eslint pulará uma linha, com o {' '} você consegue forçar o espaço no texto.

![TextLink](assets/images_components/v2.18.0/textLink_ex2.png)

```xml
<View>
  <TextLink
    size='large'
    rightIcon='ame-solid'
    onClick={() => console.log('Clique')}
  >
  home
  </TextLink>
</View>
```
