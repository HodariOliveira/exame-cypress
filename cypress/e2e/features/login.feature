Feature: Login no Sistema

  Scenario: Logar com sucesso
    Given que estou na página Login
    When informo email e senha válidos
    Then devo ser direcionado à Homepage
    And devo ver o texto "Logged in as"

  Scenario: Exibir mensagem de erro ao logar
    Given que estou na página Login
    When informo email e senha inválidos
    Then devo ver a mensagem "Your email or password is incorrect!"