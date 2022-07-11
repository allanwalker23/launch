---
id: version-2.11.0-skeleton
title: Skeleton
sidebar_label: 7.2 Skeleton
original_id: skeleton
---

Usado para diminuir ou incrementar um valor.

## Exemplo

![Skelenton](assets/images_components/v2.0.0/skeleton.png)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/organiza%C3%A7%C3%A3o-skeleton--basic)

<br>

## Utilização

```xml
<Skeleton />
```

## Propriedades

### variant

- Type: String
- Opcional

Altera o tipo do Skeleton. Assume como default text<br>

#### Valores aceitos:

* ```text```
* ```circle```
* ```rect```
<br>

#### Valor padrão:

* ```text```

```xml
<Skeleton variant={"text"} />
```
<br>

```xml
<Skeleton variant={"circle"} />
```
<br>

```xml
<Skeleton variant={"rect"} />
```
<br>


### height

- Type: String
- Opcional

Define a altura<br>

```xml
<Skeleton height={"10%"} />
```

### width

- Type: String
- Opcional

Define a largura<br>

```xml
<Skeleton width={"10%"} />
```

### borderRadius

- Type: String
- Opcional

Define a curvatura da borda. *Aplicável somente a propriedade ```variant={"text"}```.*<br>


```xml
<Skeleton borderRadius={"10%"} />
```

### marginTop

- Type: String
- Opcional

Define a altura da margem superior.<br>

```xml
<Skeleton marginTop={"10%"} />
```

### marginLeft

- Type: String
- Opcional

Define a altura da margem superior.<br>

```xml
<Skeleton marginLeft={"10%"} />
```

### marginRight

- Type: String
- Opcional

Define a altura da margem superior.<br>

```xml
<Skeleton marginRight={"10%"} />
```

### marginBottom

- Type: String
- Opcional

Define a altura da margem superior.<br>

```xml
<Skeleton marginBottom={"10%"} />
```
