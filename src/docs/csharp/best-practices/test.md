---
tags:
  - melhores práticas
  - testes
---
# Testes
<authors>
    <author user="leticiasassaki"/> 
    <author user="nathancaracho"/>
    <author user="gabrielfaraday"/>
</authors>  

---

Os testes devem ser bem estruturados para que não só facilite o desenvolvimento mas também a leitura, já que os teste são a garantia do bom funcionamento do código e também a documentação daqueles componentes.


## Nomenclatura
Para melhorar a legibilidade dos testes iremos usar uma nomenclatura que expresse a intenção do teste. Para isto separamos o nome do método do teste em 3 partes:  
1. Método Testado: Nome do método testado.
2. Cenário Do Teste: Qual cenário está sendo testado.
3. Comportamento Esperado: Qual o retorno do método ou efeito.  

Cada uma das partes deve ser PascalCase sendo que cada etapa deve ser separada por underline, snake-case, desta forma 
`MétodoTestado_CenárioDoTeste_ComportamentoEsperado`.

:::tip 💡Dica
Inclua um `DisplayName` para o teste facilitando a visualização dele na listagem de testes geral. Este `DisplayName` também deve deixar evidente O QUE e QUANDO é esperado do resultado do teste
:::

:::bad Ruim
```csharp
[Fact]
public void ShouldAddANumberAndReturnSameNumber()
{
    var stringCalculator = new StringCalculator();
    var actual = stringCalculator.Add("0");
    actual
        .Should()
        .Be(0);
}
```
:::

:::good Ótimo
```csharp {2}
[Fact(DisplayName = "Should return same number when single number")]
public void Add_SingleNumber_ReturnsSameNumber()
{
    var stringCalculator = new StringCalculator();
    var actual = stringCalculator.Add("0");
    actual
        .Should()
        .Be(0);
}
```

Ou poderia ser uma variação disto, como:

```csharp {2}
[Fact(DisplayName = "Should return same number when single number")]
public void Add_WhenSingleNumber_ShouldReturnSameNumber()
{
    var stringCalculator = new StringCalculator();
    var actual = stringCalculator.Add("0");
    actual
        .Should()
        .Be(0);
}
```
:::

:::tip 💡Dica
Para escrever nomes mais expressivos descreva o comportamento e não a implementação.
:::

## Padrão Arrange Act e Assert 
*AAA* é o padrão que separa a implementação do teste em *3* partes, que além de melhorar a legibilidade ajuda a desenvolver os testes, já que cria uma separação clara entre as etapas: 

1. **Arrange**: Organiza os estados para seu teste, cria objetos, payloads e etc.
2. **Act**: Realiza a ação para ser validada
3. **Assert**: Validação da ação anterior


:::bad Ruim
```csharp
[Fact]
public void Add_SingleNumber_ReturnsSameNumber()
{
    var stringCalculator = new StringCalculator();

    var actual = stringCalculator.Add("0");

    actual
        .Should()
        .Be(0);
}
```
:::


:::good Ótimo
```csharp {4,7,10}
[Fact]
public void Add_SingleNumber_ReturnsSameNumber()
{
    //Arrange
    var stringCalculator = new StringCalculator();

    //Act
    var actual = stringCalculator.Add("0");

    //Assert
    actual
        .Should()
        .Be(0);
}
```
## referências

- [Unit testing best practices with .NET Core and .NET Standard](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices)
- [You are naming your tests wrong!](https://enterprisecraftsmanship.com/posts/you-naming-tests-wrong/)
