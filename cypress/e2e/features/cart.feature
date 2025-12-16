Feature: Adicionar produto ao carrinho

  Scenario: Produto adicionado ao carrinho via Overlay
    Given que estou na página produtos
    When adiciono o produto "Summer White Top" ao carrinho pelo overlay
    Then devo ver o produto "Summer White Top" no carrinho

  Scenario: Produto adicionado ao carrinho via View Product
    Given que estou na página de produtos
    When adiciono o produto "Summer White Top" ao carrinho via View Product
    Then devo ver o produto "Summer White Top" no carrinho
