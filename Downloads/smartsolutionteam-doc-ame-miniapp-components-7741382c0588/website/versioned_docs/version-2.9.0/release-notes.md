---
id: version-2.9.0-release-notes
title: Notas da Versão
sidebar_label: release-notes
original_id: release-notes
---

## Notas da Versão

### Versão 2.9.0 (27-07-2021)

### Bugfix

- Removida a borda quando o input está com disabled
- Função de onClick no AmeIcon não existia, foi colocada novamente nessa versão
- Tamanho do ícone do componente Bullet que ficava achatado foi corrigido
- Spacing com tamanho giant não funcionava por conta de um erro de digitação no scss
- Accordion renderizava de forma estranha em textos com muitos caracteres
- Button com className retornando como undefined

### Features

- Implementado o Jest para testes unitários
- Documentação do bbCode
- nextInputId para o dropDown permite pular usando o next do teclado
- SelectCard com a alura maior
- Propriedade defaultTabActive no SegmentedControl
- Propriedade para ajustar o tamanho da imagem nos Cards
- DropDown refazendo a pesquisa quando apaga os caracteres, antes dessa versão ele só funcionava enquanto digitava novas coisas
- Propriedade de selecionado para o SelectCard
- Padronizada as propriedades da documentação e inserido o type correspondente
