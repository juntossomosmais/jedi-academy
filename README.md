# jedi academy
> `JS+` Playbook 

![playbook print screen](https://github.com/juntossomosmais/jedi-academy/blob/feature/create-structure/src/assets/print.gif)

## Estrutura do projeto
```text
ROOT \
┣ src \
┃ ┣ 📂 .Vuepress \
┃ ┣ 📂 docs \
┃ ┣ ┣ 📂 csharp \
┃ ┃ ┃ ┣ 📂 best-practices \
┃ ┃ ┗ ┗ 📂 libraries \
┃ ┗ index.md
┣ .gitignore
┣ package.json
┗ README.md
```
## Como contribuir
O playbook é separado por `artigos` que se encontram na pasta `docs` e é separado por linguágem, que por sua vez é separado em `best-practices` e `libraries`.
### O artigo
O artigo é separado por `temas` e constituído por `introdução`, `seção` e `referências`.
* O `Tema` é um assunto especifico como testes unitários.
* A `Introdução` é uma breve introdução sobre o tema.
* A `Seção` é uma especiação do `Tema`, seguindo o exemplo de teste unitários temos ***Padrão de testes***. As seções devem conter exemplos de código sempre com um exemplo errado e outro correto.
* As `Referências` são as bibliografias usadas como referência para criar as `seções`.
> Os exemplos de código devem utilizar um container `:::bad` para exemplos ruins e `:::good` para bons exemplos.
[exemplo de artigo](https://github.com/juntossomosmais/jedi-academy/blob/feature/create-structure/examples/index.md)
## Como usar
Usando `yarn`
```bash
    yarn dev
```
Usando `docker-compose`
```bash
    docker-compose up dev
```