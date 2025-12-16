Feature: Buscar por produtos 

  Scenario: Encontrar produtos   
    Given que estou na página de produtos
    When busco pelo produto "Summer White Top"
    Then devo ver o produto "Summer White Top" nos resultados