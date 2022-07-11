---
id: version-2.1.4-datasheet
title: Datasheet
sidebar_label: 9.5 Datasheet
original_id: datasheet
---

O componente Datasheet gera um card para apresentação de determinados dados e permite interação do usuário com um campo touchable e button próprio.

## Exemplo

![datasheet](assets/old_versions/datasheet.png)

## Utilização

```xml
<Datasheet title={{text: '[b]Ola Mundo[/b]', size: 'md', icon: 'ame-outline'}}>

  <Datasheet.Content>
    <Paragraph>
      ...Aqui vão os dados que deseja apresentar...
    </Paragraph>
  </Datasheet.Content>

  <Datasheet.TouchableContent onClick={() => console.log('touchable')}>
    <AmeIcon icon={'receipt-outline'} />
    <Paragraph size={'md'} color={'neutralcolor-darkest'}>
      [b]Apólice do seguro[/b]
    </Paragraph>
  </Datasheet.TouchableContent>

  <Datasheet.Footer>
    <Paragraph size={'xs'} color={'neutralcolor-darkest'}>[b]Contato: [/b] 0800-709-8059</Paragraph>
    <Datasheet.Button onClick={() => console.log("button")}>
      <AmeIcon icon={'ame-outline'} />
      <Paragraph size={'sm'} color={'neutralcolor-darkest'}>Ajuda</Paragraph>
    </Datasheet.Button>
  </Datasheet.Footer>

</Datasheet>
```

### Datasheet

A tag <Datasheet> constrói o corpo do componente com as bordas. Dentro dela é feito a estruturação do componente.

### Datasheet.Content

A tag <Datasheet.Content> é onde ficará todo o conteúdo que será apresentado no card.

### Datasheet.TouchableContent

A tag <Datasheet.TouchableContent> é utilizada para criação de um conteúdo que permite a interação do usuário por touch.

### Datasheet.Footer

A tag <Datasheet.Footer> é utilizada para criar um rodapé.

### Datasheet.Button

A tag <Datasheet.Button> cria um botão dentro do Datasheet para interação do usuário.

## Propriedades

### Title

Deve, obrigatoriamente, ser um objeto. Pode-se utilizar os atributos:
{
text: coloque aqui o texto apresentado no titulo,
size: coloque aqui o tamanho do texto,
icon: caso deseje um ícone, coloque aqui o nome do ícone, seguindo o padrão de nomenclatura do componente AmeIcon.
}

### onClick

Deve, obrigatoriamente, ser uma função para execução pela interação do usuário.
