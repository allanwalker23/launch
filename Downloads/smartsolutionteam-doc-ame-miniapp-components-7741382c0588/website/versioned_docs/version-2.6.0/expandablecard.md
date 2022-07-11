---
id: version-2.6.0-expandablecard
title: ExpandableCard
sidebar_label: 9.7 ExpandableCard
original_id: expandablecard
---

ExpandableCard é um componente que cria um card expansível para exibir informações.

## Exemplo

![expandablecard](assets/images_components/v2.2.0/expandablecard.png)

## Utilização

### Tipo collapse

```xml harmony
<ExpandableCard>
    <ExpandableCard.Item
    titleIcon={require('../assets/images/icon_ame.svg')}
    title='Titulo do Card'
    description={'Descrição exibida embaixo do Titulo.'}
    >
      <Paragraph>[b]Identificador:[/b] Conteúdo filho</Paragraph>
    </ExpandableCard.Item>
</ExpandableCard>
```

### Tipo radio

```xml harmony
<ExpandableCard type='selection' radioName='seletor' onChange={value => console.log(value)}>
    <ExpandableCard.Item
    titleIcon={require('../assets/images/icon_ame.svg')}
    title='Titulo 1'
    description={'Conteudo 1'}
    radioValue='Valor 1'
    >
      <Paragraph size='xs'>[b]Identificador:[/b] Conteúdo filho 1</Paragraph>
    </ExpandableCard.Item>

    <ExpandableCard.Item
    titleIcon={require('../assets/images/icon_ame.svg')}
    title='Titulo 2'
    description={'Conteudo 2'}
    radioValue='Valor 2'
    >
      <Paragraph size='xs'>[b]Identificador:[/b] Conteúdo filho 2</Paragraph>
    </ExpandableCard.Item>

</ExpandableCard>
```

## Propriedades

Veja abaixo quais são as propriedades para esse componente

### ExpandableCard

#### type

Aplica o tipo do ExpandableCard, podendo ser entre 'collapse' e 'radio'. O valor default é 'collapse', podendo ser omitido da propriedade.

#### radioName

Caso o tipo do ExpandableCard seja **radio**, se faz necessário atribuir a propriedade **radioName**, de tipo string, que será o name do radio. Caso essa propriedade não seja atribuída, o radio não fará a seleção corretamente.

#### onChange

Função a ser executada cada vez que é alterado o radio selecionado. Recebe como parametro o value do radio selecionado, entregue pelo componente.

#### resetSelect

Essa propriedade recebe um booleano, no caso de ser true reseta o radio do ExapandableCard

### ExpandableCard.Item

#### title

Titulo do card a ser exibido.

#### titleProps

Propriedades de estilo do título, você atribui um objeto com o estilo que será utilizado dentro do título somente.

exemplo:

```xml harmony
titleProps={{ size: 'xs', color: 'neutralcolor-dark' }}
```

#### description

Descrição a ser exibida logo abaixo do titulo.

#### descriptionProps

Propriedades de estilo da description, você atribui um objeto com o estilo que será utilizado dentro da description somente.

exemplo:

```xml harmony
descriptionProps={{ size: 'xs', color: 'neutralcolor-dark' }}
```

#### titleIcon

Ícone que será renderizado caso o tipo do componente seja **collapse**. É obrigatório utilizá-lo.

Recebe: Token do [ameIcon](ameIcon.md), endereço HTTPS da imagem do ícone ou endereço da imagem ícone local usando require.

Exemplo:

```xml harmony
titleIcon={require('../assets/images/icon_ame.svg')}
titleIcon={'ame-outline'}
```

#### truncate

Com o truncate é possível selecionar a quantidade de linhas do texto desejada no description. Se o texto for de um tamanho que utilize linhas a mais, será cortado e acrescentado '...' ao final da linha. O valor deve ser passado em tipo number. Caso o truncate não seja atribuído, não haverá limitação de linha.

#### radioValue

Caso o tipo do componente seja **radio**, utilize essa propriedade para atribuir um valor ao ítem. Este valor será retornado como parametro na propiedade onChange.
