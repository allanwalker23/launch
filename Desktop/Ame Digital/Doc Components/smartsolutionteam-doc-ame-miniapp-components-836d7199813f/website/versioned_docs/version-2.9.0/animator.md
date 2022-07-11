---
id: version-2.9.0-animator
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
