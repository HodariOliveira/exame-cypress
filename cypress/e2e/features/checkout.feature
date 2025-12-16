Feature: Validar produtos na página de pagamento

  Scenario: Produtos visíveis na página de pagamento com usuário logado
    Given que estou logado no site
    When adiciono os produtos ao carrinho e acesso o checkout
    Then devo ver todos os produtos adicionados na página de pagamento

  Scenario: Produtos visíveis na página de pagamento com usuário não logado
    Given que não estou logado no site
    When adiciono os produtos ao carrinho e tento acessar o checkout
    Then devo ser direcionado para o login
    Then após logar devo ver todos os produtos adicionados na página de pagamento
