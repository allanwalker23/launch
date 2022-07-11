---
id: version-2.18.0-wikiGitVersionamento
title: Git e Versionamento
sidebar_label: Git e Versionamento
original_id: wikiGitVersionamento
---

## Git

Nesse documento mostraremos a estrutura do nosso repositório, como iniciar novas branchs e o fechamento de versões.

Temos 2 branchs principais que são a develop e a master. Toda branch precisa sair da develop e depois de finalizado retornar para ela, somente na finalização da sprint ou em caso de um hotfix que será dado merge da develop na master.

Então supondo que você está começando uma tarefa com o id COMP-775 no Jira onde iremos criar um novo componente chamado documentação, vamos rodar no terminal

```
git checkout -b feature/COMP-775-documentacao
```

Como esse comando criamos uma branch a partir da develop com o nome feature/COMP-775-documentacao.

O nome da branch deve ter o tipo da tarefa, que nesse caso é uma feature, colocamos uma barra (/) para separar, e então o id da tarefa seguida do nome COMP-775-documentacao. Utilizamos nomes curtos e que deixam claro sobre o que se trata aquela tarefa.

Agora é só fazer as suas alterações e dar commit normalmente, sempre com mensagens em português e curtas. Nunca use mensagens como: Ajustes, Correções entre outras que não deixem claro o que foi modificado. Use mensagens claras como: Inserido padding na esquerda do ícone, Trocado o ícone do card e etc.

Quando terminar as alterações, abra um Pull Request para a develop.

## Versionamento

Utilizamos [versionamento semântico](https://semver.org/) e subimos uma versão no final de cada Sprint com duração de 15 dias.

### Versões beta

Durante a sprint fazemos vários testes da versão e para isso subimos alguns betas, essa parte abaixo se tratará disso.

Precisamos aqui dar merge das tarefas que queremos inserir na versão beta, para isso aprovamos os PRs e fazemos o merge das branchs na develop.

Após a finalização, com resolução de conflitos e testes locais, trocamos a versão no package dentro da pasta library, seguindo o esquema semântico e como é uma versão beta deve ter o traço (-) seguido de beta e qual número se trata, abaixo um exemplo para uma versão 2.15.0

```
"version": "2.15.0-beta1"
```

Com isso podemos dar push na develop e o pipeline se carregará de todo processo de deploy.

### Versões de produção

Nas versões de produção, precisamos de alguns processos para colocar a biblioteca no npm, vamos separar em passos para ficar mais fácil a leitura.

1. Crie uma branch a partir da develop com o nome release/2.15.0 (estamos levando em consideração que será publicada uma versão 2.15.0), todas as branchs da sprint já devem estar na develop.
```
git checkout -b release/2.15.0
```
2. Faça testes manuais e testes automatizados com o cypress
3. Insira a versão que será publicada no package da pasta library, exemplo:
```
"version": "2.15.0"
```
4. Edite o README.md adicionando o changelog, seguindo a estrutura presente no arquivo. Aqui colocamos tudo o que tem na versão, inclusive tarefas internas que não refletem no devenvolvedor final de miniapps.
5. Merge da branch release/2.15.0 que criamos na master
6. Rodamos o push, assim o pipeline irá publicar a nossa versão
7. Criamos uma tag para essa versão com:
```
git tag 2.15.0
```
E damos push com o comando:
```
git push --tags
```
8. Damos merge da master na develop e push

### Documentação
1.  Merge de todas as tarefas na develop dentro no repositório da doc
2.  Edite o relase-notes.md, aqui é colocado apenas as tarefas que interessam para os desenvolvedores de miniapp.
3.  Geramos uma versão da documentação rodando o comando abaixo dentro da pasta website
```
yarn run version 2.15.0
```
4. Inicie o projeto ainda dentro da pasta website com
```
yarn start
```
5. Com tudo ok, merge da develop na master e push, o pipeline da doc se encarregará de subir os arquivos para produção

#### Dica da dcoumentação
Quando estiver fechando a versão da documentação, primeiro de merge de todas as tarefas na develop, rode o comando para dar push e então gere a versão, se tudo estiver ok pode seguir com o restante dos passos, caso contrário desfaça somente a geração da versão no git e faça as alterações, o Docusaurus não permite você voltar atrás caso tenha algum erro.
