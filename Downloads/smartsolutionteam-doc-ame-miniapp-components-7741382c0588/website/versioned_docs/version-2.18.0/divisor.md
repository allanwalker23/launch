---
id: version-2.18.0-divisor
title: Divisor
sidebar_label: 7.1 Divisor
original_id: divisor
---

Componente pequeno para separar conteúdos.

![divisor](assets/images_components/v2.0.0/divisor.png)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-divisor--basic)

## Utilização

```xml
<Divisor/>
```

## Propriedades

| Propriedade | Descrição                                 | Type    | Default | Obrigatório |
|-------------|-------------------------------------------|---------|---------|-------------|
| line        | Exibe uma linha contínua.                 | Boolean | false   | não         |
| light       | Essa propriedade deixa a linha mais clara | Boolean | false   | não         |

## Exemplos

No exemplo abaixo, o divisor com propriedades default

![divisor](assets/images_components/v2.18.0/divisor_ex1.png)
```xml
<Divisor/>
```

O divisor com a propriedade light deixa ele mais claro

![divisor](assets/images_components/v2.18.0/divisor_ex2.png)
```xml
<Divisor light />
```

Quando usamos a propriedade line o componente se comporta como um <hr /> do html
![divisor](assets/images_components/v2.18.0/divisor_ex3.png)
```xml
<Divisor line />
```

Podemos usar o line com o light também, assim teremos uma linha mais clara

![divisor](assets/images_components/v2.18.0/divisor_ex4.png)
```xml
<Divisor line light />
```

