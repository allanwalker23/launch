---
id: version-2.16.0-animator
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

![animator](assets/images_components/v2.16.0/animator-ex1.gif)

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/ilustra%C3%A7%C3%B5es-animator--basic)

## Utilização

```xml
<Window>
  <Animator animationData={myAnimationJSON}/>
</Window>
```

## Propriedades

| Propriedade   | Descrição                                                                                                                                                | Type             | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| animationData | Propriedade que recebe a animação em JSON Lottie. O utilitário `StyleResolver` possui um método para obter um JSON de animação padrão para carregamento. | JSON             | null    |
| width         | Seta uma largura para a animação. O tamanho por padrão é 200px                                                                                           | number ou string | null    |
| height        | Seta uma altura para a animação. O tamanho por padrão é 200px                                                                                            | number ou string | null    |

## Exemplos

Animação com `width` e `height` definidos no Componente

![animator](assets/images_components/v2.16.0/animator-ex2.gif)

```xml
import dolphin from '../assets/images/dolphin.json';

<View justify='center'>
	<Animator width={120} height={120} animationData={dolphin} />
</View>
```
