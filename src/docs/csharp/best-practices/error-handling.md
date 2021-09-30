---
tags:
  - melhores práticas
  - tratamento error
---
# Tratamento de erros
<authors>
    <author user="ricardochaves"/>
</authors>  

---

Quando você tem uma dependência de outra API na sua API você deve repassar o erro 500 para frente.

<img width="644" alt="Screen Shot 2021-09-30 at 13 34 26" src="https://user-images.githubusercontent.com/1923140/135496346-6e91d0ed-77ef-4300-a05b-b6df6f5bbc50.png">

O padrão para novas API é a imagem acima.

Atualmente temos um monitoramento em cima de erros 500. Se fizermos algum tipo de maquiagem no status code da API terceira podemos ter serviços fora do ar sem o monitoramento pegar o problema.

Podemos ter casos de excessão aqui. Uma mensagem em status code 400 informando que o parceiro está fora é uma opção, mas para ela acontecer precisamos também criar um novo monitoramento, fora do padrão, para essa rotina.
