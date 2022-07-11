---
id: version-2.9.0-bbcode
title: BBCode
sidebar_label: 4.6 BBCode
original_id: bbcode
---

Ultilizado para inserção de código dentro dos componentes.

## Utilização

```xml
<Window>
    <Header>[b]Parágrafo com negrito!![/b]</Header>
    <Paragraph>[i]Parágrafo em itálico!![/i]</Paragraph>
    <Subtitle>[u]Parágrafo com sublinhado!![/u]</Subtitle>
</Window>
```

## Propriedades

### Negrito

Todo o texto que estiver dentro da tag `[b]` receberá a propriedade negrito. Exemplo:

```xml
<Paragraph>Um texto normal com um [b]negrito[/b]
```

### Itálico

Todo o texto que estiver dentro da tag `[i]` receberá a propriedade itálico.

```xml
<Paragraph>Um texto normal com um [i]itálico[/i]
```

### Sublinhado

Todo o texto que estiver dentro da tag `[u]` receberá a propriedade sublinhado.

```xml
<Paragraph>Um texto normal com um [u]sublinhado[/u]
```

## Componentes com suporte

Alguns componentes suportam o bbcode diretamente inserido entre suas tags, são eles: Header, Paragraph e o Subtitle. Outros componentes aceitam o bbcode em suas Propriedades, estes serão sinalizados dentro das suas respectivas documentações.

