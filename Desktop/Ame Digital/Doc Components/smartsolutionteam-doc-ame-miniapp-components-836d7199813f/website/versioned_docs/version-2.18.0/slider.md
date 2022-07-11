---
id: version-2.18.0-slider
title: Slider
sidebar_label: 6.19 Slider
original_id: slider
---

Componente utilizado para seleção de valor através de um slider range.

![slider](assets/images_components/v2.0.0/slider.png)

Modifique esse componente em tempo real pelo [Storybook](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-slider--basic)

## Utilização

```jsx
<Slider
  minAmount={0}
  maxAmount={10000}
  value={200000}
  onChange={(value) => {
    setValue(value);
  }}
/>
```

## Propriedades

| Propriedade | Descrição                                                                                                                                    | Type     | Default   | Obrigatório |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------|----------|-----------|-------------|
| monetary    | Define se os valores do componente será monetário (ex: 150,00) ou number (ex: 150)                                                           | Boolean  | true      | false       |
| minAmount   | Valor mínimo para seleção. Se a prop _monetary_ for _true_, deve ser acrescentado _00_ ao final do número. (ex: 15000 => 150,00)             | Number   | 0         | false       |
| maxAmount   | Valor máximo para seleção. Se a prop _monetary_ for _true_, deve ser acrescentado _00_ ao final do número. (ex: 700000 => 7000,00)           | Number   | 7500      | false       |
| minLabel    | Texto que será renderizado ao lado no valor mínimo.                                                                                          | String   | undefined | false       |
| maxLabel    | Texto que será renderizado ao lado no valor maximo.                                                                                          | String   | undefined | false       |
| value       | Valor inicial que será renderizado no componente.                                                                                            | Number   | null      | false       |
| onChange    | Função que será executada quando o valor for alterado.                                                                                       | Function | undefined | true        |
| step        | Quantidade que será incrementada ou decrementada no value ao alterar o slider. (Ex: se o valor desta prop for 5, a alteração será de 5 em 5) | Number   | 100       | false       |
| disabled    | Desabilita a interação com o componente.                                                                                                     | Boolean  | false     | false       |

## Exemplo

Abaixo, alguns exemplos usando o Slider:

![slider](assets/images_components/v2.18.0/slider_ex1.png)

```xml
<Window>
     <Slider
        monetary
        minAmount={20000}
        maxAmount={700000}
        value={200000}
        minLabel='mínimo'
        maxLabel='máximo'
        step={20000}
        onChange={value => {
          setValueMonetary(value);
        }}
      />
```

![slider](assets/images_components/v2.18.0/slider_ex2.png)

```xml
<Window>
     <Slider
        monetary={false}
        step={1}
        minLabel='Beneficiario'
        maxLabel='Beneficiarios'
        minAmount={1}
        maxAmount={100}
        value={1}
        onChange={value => {
          console.log(value);
        }}
      />
<Window>
```
