---
id: version-2.18.0-skeleton
title: Skeleton
sidebar_label: 7.2 Skeleton
original_id: skeleton
---

Usado para diminuir ou incrementar um valor.

![Skeleton](assets/images_components/v2.0.0/skeleton.png)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-skeleton--basic)

## Utilização

```xml
<Skeleton />
```

## Propriedades

| Propriedade  | Descrição                                                                              | Type   | Default | Obrigatório |
|--------------|----------------------------------------------------------------------------------------|--------|---------|-------------|
| variant      | Altera o tipo do Skeleton. Valores aceitos: text, circle e rect.                       | String | text    | não         |
| height       | Define a altura.                                                                       | String | null    | não         |
| width        | Define a largura                                                                       | String | 100%    | não         |
| borderRadius | Define a curvatura da borda. *Aplicável somente a propriedade ```variant={"text"}```.* | String | 50%     | não         |
| marginTop    | Define a altura da margem superior.                                                    | String | 50%     | não         |
| marginLeft   | Define a largura da margem a esquerda.                                                 | String | 0       | não         |
| marginRight  | Define a largura da margem a direita.                                                  | String | 0       | não         |
| marginBottom | Define a largura da margem inferior.                                                   | String | 0       | não         |

## Exemplos

Abaixo, alguns exemplos usando o Skeleton:

![bullet](assets/images_components/v2.18.0/skeleton_ex1.png)

```xml
<Window>
  <View>
    <Spacing />
    <Text>Você pode usar três Skeleton para simular um texto.</Text>
    <Spacing />
    <Skeleton variant={'text'} width='85%' marginBottom={10} />
    <Skeleton variant={'text'} width='70%' marginBottom={10} />
    <Skeleton variant={'text'} width='90%' marginBottom={20} />
  </View>
<Window>
```

![bullet](assets/images_components/v2.18.0/skeleton_ex2.png)

```xml
<Window>
  <View display='flex' justify='between'>
    <View paddingTop='sm' width='60%'>
      <Skeleton variant={'text'} width='85%' marginBottom={10} />
      <Skeleton variant={'text'} width='70%' marginBottom={10} />
      <Skeleton variant={'text'} width='90%' marginBottom={20} />
    </View>
    <View width='40%'>
      <Skeleton variant={'circle'} size={100} dataCy='skeleton-circle' />
    </View>
  </View>
<Window>
```
