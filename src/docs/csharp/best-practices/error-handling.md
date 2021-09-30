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

IMAGEM

O padrão para novas API é a imagem acima.

Atualmente temos um monitoramento em cima de erros 500. Se fizermos algum tipo de maquiagem no status code da API terceira podemos ter serviços fora do ar sem o monitoramento pegar o problema.

Podemos ter casos de excessão aqui. Uma mensagem em status code 400 informando que o parceiro está fora é uma opção, mas para ela acontecer precisamos também criar um novo monitoramento, fora do padrão, para essa rotina.