---
id: version-2.12.0-touchable
title: Touchable
sidebar_label: 6.26 Touchable
original_id: touchable
---

Envolva um componente com Touchable para que ele passe a ter interação.

## Propriedades

### onClick 

- Type: Function
- Obrigatório

Função que será chamada ao tocar no componente.

Aceita somente **Function**.


```xml
<Touchable onClick={() => {console.log('Clicado!')}}>
  <Subtittle>Agora sou clicável</Subtitle>
</Touchable>
```

### disabladeOnClick 

- Type: Function
- Opcional

Função que será chamada caso o Touchable esteja desabilitado.

Aceita somente **Function**.


```xml
<Touchable disabled disabladeOnClick={() => {console.log('Componente desabilitado!')}}>
  <AmeIcon icon="ame-outline" />
</Touchable>
```

### disabled

- Type: Boolean
- Opcional

Desabilita o toque.<br>

#### Aceita os valores: 

* ```disabled```
* ```disabled={true}``` 
* ```disabled={false}```

```xml
<Touchable disabled onClick={() => {console.log('Ame Digital')}}>
  <Subtittle>Ame Digital</Subtitle>
</Touchable>
```