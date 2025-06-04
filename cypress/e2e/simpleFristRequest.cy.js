
describe('Simple Frist Request', () => {
  it('It should request to target website', () => {
    // cy.visit('https://example.cypress.io')
    cy.request('https://reqres.in/api/users?page=2')
    .then(result => {
      expect(result.status).to.eq(200)
      expect(result.body.page).to.eq(2)
      expect(result.body.total).to.eq(12)
      expect(result.body.total).to.eq(11)
    })
    
  })
})