---
tags:
  - melhores práticas
  - testes
--- 
# Testes
<authors>
    <author user="andresantarosa"/> 
</authors>  

---
Seguir um padrão de código é essencial para facilitar a legibilidade do código e a manutentabilidade da aplicação como um todo. Em geral linguagens possuem alguns padrões definidos de como codificar certos comandos afim de padronizar a escrita entre os desenvolvedores.

## var
O `var` é uma keywork utilizada na tipagem implícita, utilizando o `var` torna-se desncessário a explitação do tipo da variável e é uma grande aliada para deixar o código mais limpo e fluído. Entretanto é necessário ter cuidado na sua utilização, visto que se utilizado fora de lugar pode piorar consideravelmente a inteligibilidade.

### Não utilizar `var` quando o tipo de retorno não é explícito.

&nbsp;
  
:::bad Ruim
```csharp
public MyCustomCommand BuildCommand()
{
  return new MyCustomCommand();
}

var myVariable = BuildCommand();
```

:::good Bom

```csharp
public MyCustomCommand BuildCommand()
{
  return new MyCustomCommand();
}

MyCustomCommand myVariable = BuildCommand();
```
&nbsp;

### Utilizar quando o tipo da variável é explicíto

:::bad Ruim

```csharp 
string name = "MeuNome";
int idade = 30;
Pessoa pessoa = new Pessoa();
Dictionary<int, string> meuDicionario = new Dictionary<int, string>();

```

:::good Bom

```csharp
var name = "MeuNome";
var idade = 30;
var pessoa = new Pessoa();
var meuDicionario = new Dictionary<int, string>();
```

### Retornos anônimos
Quando trabalhamos objetos ou retornos anônimos o `var` é um grande aliado. Utilizando o `var` ganhamos o benefício de não precisar declarar a nova variável como `object` e ainda temos as propriedades expostas para que o intellisense nos ajude a programar.

```csharp
var pessoaComEndereco = _context.Pessoa.Select(pessoa => new 
{
    pessoa.Nome, 
    pessoa.Idade, 
    Enderecos = pessoa.Enderecos.Select(end => new 
    {
        end.Rua, 
        end.Numero,
        end.Bairro
    }
});
```

## Rerefências
[C# Code Conventions](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)