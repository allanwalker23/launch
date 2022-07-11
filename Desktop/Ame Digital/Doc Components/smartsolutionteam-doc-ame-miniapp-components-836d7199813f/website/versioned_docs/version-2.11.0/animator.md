---
id: version-2.11.0-animator
title: Animator
sidebar_label: 5.3 Animator
original_id: animator
---

Utilize este componente para exibir animações.

As animações são aceitas no formato JSON (Lottie).

Animações gratuitas podem ser encontradas no site [LottieFiles](https://lottiefiles.com/).

Infelizmente, em alguns casos raros, as animações podem não ser renderizadas, isto se dá por falta de compatibilidade ou versão das bibliotecas utilizadas.
Estamos investigado para que tudo seja renderizado com eficiência.

## Exemplo

![animator](assets/images_components/v2.0.0/animator.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/ilustra%C3%A7%C3%B5es-animator--basic)

<br>

## Utilização

```xml
<Window>
    <Animator animationData={myAnimationJSON}/>
</Window>
```

## Propriedades

### animationData

- Type: JSON
- Obrigatório

Propriedade que recebe a animação em JSON Lottie.

O utilitário `StyleResolver` possui um método para obter um JSON de animação padrão para carregamento.

```xml
<Animator animationData={StyleResolver.getLoadingAnimation()}/>
```

### width

- Type: Number ou Text
- Opcional

Seta uma largura para a animação.

O tamanho por padrão é 200px

### height

- Type: Number ou Text
- Opcional

Seta uma altura para a animação.

O tamanho por padrão é 200px