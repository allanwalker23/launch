---
id: version-1.4.4-animator
title: Animator
sidebar_label: Animator
original_id: animator
---

<p style="font-size: 11px; font-style: italic;">Disponível a partir da versão 1.4.3</p>

Utilize este componente para exibir animações.

As animações são aceitas no formato JSON (Lottie).

Animações gratuitas podem ser encontradas no site [LottieFiles](https://lottiefiles.com/).

Infelizmente, em alguns casos raros, as animações podem não serem renderizadas, isto se dá por falta de compatibilidade ou versão das bibliotecas utilizadas.
Estamos investigado para que tudo seja renderizado com eficiência.


>  [**`Animator`**]() estende o componente [**`BaseComponent`**](components_base.md), herdando suas propriedades.


Exemplo: 
```jsx harmony

<Animator animationData={myAnimationJSON}/>

```

![animator](assets/old_versions/animator.png)

## Propriedades

### animationData
![](assets/badge_required.svg)

Propriedade que recebe um objeto com os dados de animação exportados.<br>

Aceita somente **Object**, exemplo: ```animationData={myAnimationJSON}```

O utilitário `StyleResolver` possui um método para obter um JSON de animação padrão para carregamento.

```jsx harmony
const myAnimationJSON = StyleResolver.getLoadingAnimation()
```

Exemplo: 
```jsx harmony
<Animator animationData={StyleResolver.getLoadingAnimation()}/> 
```
