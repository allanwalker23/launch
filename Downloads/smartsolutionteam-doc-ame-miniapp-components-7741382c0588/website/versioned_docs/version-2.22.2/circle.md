---
id: version-2.22.2-circle
title: Circle
sidebar_label: 9.4 Circle
original_id: circle
---

Botão em formato circular.

![circle](assets/images_components/v2.0.0/circle.png)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/cards-circle--basic)

## Utilização

```xml
<Circle
    icon={require('../assets/images/icon_ame.svg')}
    label="Loren Ipsum"
    onClick={() => console.log('Circle')}
/>
```

## Propriedades

| Propriedade | Descrição                                                                                                            | Type     | Default | Obrigatório |
|-------------|----------------------------------------------------------------------------------------------------------------------|----------|---------|-------------|
| icon        | Endereço HTTPS da imagem do ícone, endereço da iamgem ícone local usando require ou token do [AmeIcon](ameIcon.md) . | String   | null    | não         |
| label       | Texto descritivo que vem abaixo do Circle.                                                                           | String   | null    | não         |
| hint        | Título descritivo acima do Circle.                                                                                   | String   | null    | não         |
| image       | Endereço HTTPS da imagem ou endereço da imagem local usando require.                                                 | String   | null    | não         |
| disabled    | Bloqueia o usuário de interagir com o Circle.                                                                        | Boolean  | false   | não         |
| onClick     | Recebe uma função para ser executada em um evento de toque sobre o Circle.                                           | Function | null    | não         |


## Exemplos

Abaixo, alguns exemplos usando o Circle:

![circle](assets/images_components/v2.18.0/circle_ex1.png)

```xml
<Window>
  <View>
    <Circle
      icon={require('../assets/images/icon_ame.svg')}
      label={'Loren Ipsum'}
      onClick={() => console.log('Circle')}
    />
  </View>
</Window>
```

![circle](assets/images_components/v2.18.0/circle_ex2.png)

```xml
<Window>
  <View>
    <Circle
      hint={'NOVO'}
      image={require('../assets/images/logo_phone.png')}
      label={'Lorem Ipsum'}
      onClick={() => console.log('Circle')}
    />
  </View>
</Window>
```

![circle](assets/images_components/v2.18.0/circle_ex3.png)

```xml
<Window>
  <View>
    <Circle
      disabled
      hint={'NOVO'}
      image={require('../assets/images/logo_phone.png')}
      label={'Lorem Ipsum'}
      onClick={() => console.log('Circle')}
    />
  </View>
</Window>
```



