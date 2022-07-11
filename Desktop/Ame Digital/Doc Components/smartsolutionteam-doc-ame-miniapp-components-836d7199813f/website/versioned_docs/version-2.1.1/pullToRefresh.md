---
id: version-2.1.1-pullToRefresh
title: PullToRefresh
sidebar_label: 6.12 PullToRefresh
original_id: pullToRefresh
---

Componente para atualização da página ao realizar um pull.

## Utilização

A utilização deste componente pode ser através do component Window, aplicando a propriedade pullToRefresh, ou através da renderização do próprio componente PullToResfresh.

Utilização com o componente Window

```xml
<Window pullToRefresh={() => {return new Promise()}}>
{...children}
</Window>
```

Utilização do componente PullToRefresh

```xml
<PullToRefreshComponent onRefresh={() => {return new Promise()}}>
{...children}
</PullToRefreshComponent>
```

## Propriedades

### OnRefresh

Nesta propriedade é atribuído a função que deverá ser executada ao realizar o refresh. Esta propriedade necessita ser obrigatóriamente uma função que retorna uma Promise.
