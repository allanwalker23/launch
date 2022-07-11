---
id: version-2.19.0-springlayout
title: SpringLayout
sidebar_label: 7.3 SpringLayout
original_id: springlayout
---

Componente com formatação de tela padrão.

![springLayout](assets/images_components/v2.0.0/springLayout.png)

<br>

Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-springlayout--basic)

<br>

## Utilização

```xml
 <SpringLayout
    head={(
    <Paragraph>Cabeçalho</Paragraph>
    )}
    body={(
        <Group>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur dignissimos earum ex fugiat illum nulla placeat quae quos repellat tenetur? Dicta, earum?</Paragraph>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur dignissimos earum ex fugiat illum nulla placeat quae quos repellat tenetur? Dicta, earum?</Paragraph>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur dignissimos earum ex fugiat illum nulla placeat quae quos repellat tenetur? Dicta, earum?</Paragraph>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur dignissimos earum ex fugiat illum nulla placeat quae quos repellat tenetur? Dicta, earum?</Paragraph>
        </Group>
    )}
    footer={(
        <Paragraph>Rodapé</Paragraph>
    )}
/>
```


## Propriedades

| Propriedade | Descrição                                  | Type   | Default | Obrigatório |
|-------------|--------------------------------------------|--------|---------|-------------|
| head        | Elemento que componhe o cabeçalho da tela. | String | null    | não         |
| body        | Corpo de um texto descritivo.              | String | null    | não         |
| footer      | Elemento que componhe o rodapé da tela.    | String | null    | não         |

## Exemplos

Abaixo, alguns exemplos usando o SpringLayout:

![SpringLayout](assets/images_components/v2.19.0/springLayout_ex1.png)

```xml
  <View>
    <SpringLayout
        head={
          <View direction='row' align='center'>
            <Image
              icon='ame-solid'
              colorIcon='amecolor-primary-medium'
              width='80px'
            />
            <Text target='title'>Cabeçalho</Text>
          </View>
        }
        body={
          <View>
            <Text target='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur
              dignissimos earum ex fugiat illum nulla placeat quae quos repellat
              tenetur? Dicta, earum?
            </Text>
            <Spacing />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur
              dignissimos earum ex fugiat illum nulla placeat quae quos repellat
              tenetur? Dicta, earum?
            </Text>
            <Spacing />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur
              dignissimos earum ex fugiat illum nulla placeat quae quos repellat
              tenetur? Dicta, earum?
            </Text>
            <Spacing />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, ad aliquam amet animi aut beatae blanditiis consequatur
              dignissimos earum ex fugiat illum nulla placeat quae quos repellat
              tenetur? Dicta, earum?
            </Text>
          </View>
        }
        footer={
          <View direction='row' justify='end'>
            <Image icon='pet-m-solid' />
            <Image icon='pet-p-solid' />
            <Image icon='pet-m-solid' />
          </View>
        }
      />
  </View>
```
