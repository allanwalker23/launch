---
id: version-2.16.0-modal
title: Modal
sidebar_label: 6.18 Modal
original_id: modal
---

Componente que renderiza um modal no meio da tela ou a partir do bottom.

![modal](assets/images_components/v2.0.0/modal-center.jpg)

<br>

## Modifique esse componente em tempo real pelo Storybook [clique aqui](https://ame-miniapp-components.calindra.com.br/storybook/?path=/story/intera%C3%A7%C3%B5es-modal--basic)

<br>

## Utilização

```xml
<Modal
  show={showModal}
  position={position}
  closeModalCallback={this.closeModal}
>
  <Paragraph>Lorem ipsum ....</Paragraph>
</Modal>
```

## Propriedades

| Propriedade        | Descrição                                                                                                        | Type     | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| show               | Essa propriedade recebe true ou false e controla a visibilidade do modal.                                        | boolean  | false   |
| position           | Position pode receber as strings bottom ou center (Veja nos exemplos no fim da página as diferenças entre eles). | string   | center  |
| closeModalCallback | Essa propriedade chama a função que muda o status presente em show, ela é acionada quando clica fora do modal.   | function | null    |

### Exemplos

![modal](assets/images_components/v2.0.0/modal-bottom.jpg)

Modal com

```xml
<Modal
  show={this.stateshowModal}
  position='bottom'
  closeModalCallback={this.closeModal}>
  <Image
    height={200}
    src={require('../assets/images/ilustra-1.png')}
  />
  <Spacing />
  <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
  <Spacing size='md' />
  <Button
    label='Continuar'
    type='primary'
    onClick={() => console.log('Continuar')}
  />
  <Spacing />
  <Button
    label='Cancelar'
    type='secondary'
    onClick={() => this.closeModal()}
  />
</Modal>
```

---

![modal](assets/images_components/v2.0.0/modal-center.jpg)

Esse Modal foi construído usando o seginte código

```xml
<Modal
  show={this.state.showModal}
  position='center'
  closeModalCallback={this.closeModal}>
  <Image
    height={200}
    src={require('../assets/images/ilustra-1.png')}
  />
  <Spacing />
  <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
  <Spacing size='md' />
  <Button
    label='Continuar'
    type='primary'
    onClick={() => console.log('Continuar')}
  />
  <Spacing />
  <Button
    label='Cancelar'
    type='secondary'
    onClick={() => this.closeModal()}
  />
</Modal>
```
