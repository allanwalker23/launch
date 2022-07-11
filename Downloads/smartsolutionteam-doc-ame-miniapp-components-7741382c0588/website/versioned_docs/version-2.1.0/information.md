---
id: version-2.1.0-information
title: Information
sidebar_label: 6.11 Information
original_id: information
---

Este componente é utilizado para exibir uma mensagem de alerta.

## Exemplo

![information](assets/images_components/v2.0.0/information.png)

## Utilização

```xml
  constructor() {
  super()
  this.state = {
  value: false
    }
    }

  handleRender = () => {
  this.setState({ value: !this.state.value })
  };
<View>

<Information display={this.state.value} onClose={this.handleRender}>
<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
</Information>
</View>
```

### Propriedades

### Display

Exibe ou oculta o alerta através do estado (state).

### OnClose

Função a ser executada trata aberto e fechamento do modal  através do estado (state).

### Text

Aceita um componente do tipo texto.
