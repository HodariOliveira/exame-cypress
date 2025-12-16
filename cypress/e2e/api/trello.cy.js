describe('Desafio API - Trello', () => {

  it('Deve validar o nome da lista e o status da resposta', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    }).then((response) => {

      // valida status code
      expect(response.status).to.eq(200)

      // valida existência da estrutura
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.have.property('list')

      // valida e exibe o nome da lista
      const listName = response.body.data.list.name

      expect(listName).to.eq('Professional')

      // log visível no runner (opcional, mas útil)
      cy.log(`Nome da lista: ${listName}`)
    })
  })

})
