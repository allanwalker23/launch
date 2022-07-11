---
id: version-2.0.0-flex
title: Direções e Alinhamentos
sidebar_label: 2.1.4 Direções
original_id: flex
---

As propriedades abaixo afetam como os nós internos de um componente são ajustados ao seu conteúdo.
São muito parecidas com as propriedades flex do CSS. Veja abaixo quais são: 


## Direções

Esta propriedade determina um eixo de alinhamento dos componentes filhos.
Valores em linha formam um eixo horizontal, valores em coluna formam um eixo vertical.

### Valores aceitos

* Em linha: `row`
* Em coluna: `column`
* Em linha reversa: `row-r`
* Em coluna reversa: `column-r`

### Modo de uso

```xml
<View direction="column">
    ...objetos dentro esta view ficam na vertical, de cima para baixo.
</View>
```


## Alinhamento

Valores de alinhamento fazem os objetos se comportarem perpendicularmente ao eixo descrito acima.

### Valores aceitos 

* Objetos no centro do eixo: `center`
* Objetos alinhados ao início do sentido de leitura: `start`
* Objetos alinhados ao final do sentido de leitura: `end`

### Modo de uso 

```xml
<View direction="column" align="ai-center">
    ...objetos aqui ficaram alinhados ao centro do eixo vertical
</View>
```

## Justificação

### Valores aceitos 

* Todos os objetos centralizados: `center`
* Todos os objetos ajustados ao sentido da leitura: `start`
* Todos os objetos ajustados ao sentido inverso da leitura: `end`
* Objetos justificados no espaçamento total: `between`

### Modo de uso 

```xml
<View direction="row" justify="between">
...objetos aqui ficaram ajustados a largura do pai, justificados
</View>
```
