# Documentação do Ame Ame-componentes Client

## Estrutura de arquivos e pastas

* **/docs** - Deposite aqui seus arquivos de documentação e continue os editando sem nenhum problema.
* **/website/sidebars.json** - Configure a sidebar através dos ID's dos arquivos markdown.
* **/website/siteConfig.js** - Configurações gerais do docusaurus.

## Cabeçalho dos arquivos markdown

Todo arquivo markdown deverá ter um cabeçalho inicial conforme abaixo:

```

---
---
id: componentPresentation
title: Componentes
sidebar_label: Apresentação
---
---

```

## Comandos úteis

### Para rodar o projeto: 

``` cd doc/website && yarn start ```

### Para criar uma versão nova execute o comando abaixo: 

``` cd doc/website && yarn run version 1.0.0 ```

Ele irá copiar os markdowns necessários para dentro de uma outra pasta relacionada a versão.

### Para renomear uma versão existente execute o comando abaixo: 

``` cd doc/website && yarn run rename-version 1.0.0 1.0.1 ```

### Para acessar a versão de desenvolvimento do ame-miniapp-componentes:

Acesse `http://localhost:3000/docs/next/componentPresentation` depois de rodar o projeto.

### Adicionar um arquivo nas versões anteriores

Para popular o passado o arquivo tem que estar nas pastas filhas de versioned-docs.

1 - Criar o arquivo na pasta docs e todas as outras alterações que forem pertinentes. Para que nos próximos builds ele seja versionado  populando o passado;
2- Em cada pasta de versionamento **versionde_docs/version-1.0.0** manualmente adicionar o arquivo com as alterações que sejam pertinentes a cada versão;
3- Adicionar o id da versão, exemplo: **id: version-1.0.0-release-notes**.
```

---
---
id: version-1.0.0-release-notes 
title: Novidades desta versão
sidebar_label: Notas da versão
original_id: release-notes
---
---

```
