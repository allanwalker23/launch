---
id: version-2.1.6-modal
title: Modal
sidebar_label: 6.18 Modal
original_id: modal
---

## Exemplo
![modal](assets/old_versions/modal-center.jpg)

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

### Show
Essa propriedade recebe true ou false e controla a visibilidade do modal.

### Position
Position pode receber as strings bottom ou center (Veja nos exemplos no fim da página as diferenças entre eles).

### CloseModalCallback
Essa propriedade chama a função que muda o status presente em show, ela é acionada quando clica fora do modal.

### Exemplo do Modal Bottom
![modal](assets/old_versions/modal-bottom.jpg)

Esse Modal foi construído usando o seginte código
```xml
<Modal
  show={showModal}
  position='bottom'
  closeModalCallback={this.closeModal}>
  <Illustration
    height={200}
    image={require('../assets/images/ilustra-1.png')}
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

### Exemplo do Modal Center
![modal](assets/old_versions/modal-center.jpg)

Esse Modal foi construído usando o seginte código
```xml
<Modal
  show={showModal}
  position='center'
  closeModalCallback={this.closeModal}>
  <Illustration
    height={200}
    image={require('../assets/images/ilustra-1.png')}
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
