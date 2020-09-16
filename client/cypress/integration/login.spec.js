describe('Guildster login page', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('http://localhost:3000')
  })

  it('can be visited', () => {
    cy.contains('Sign In To Your Account')
  })

  it('fails a login attempt', () => {
    cy.get('input[name=email]').type('wrongwrongwrong@wrong.wrong')
    cy.get('input[name=password]').type('oaentoiahgouarhga9giaroghnar')
    cy.get('button').click()
    cy.contains('Sign In To Your Account')
  })

  it('can log in with the right data', () => {
    cy.get('input[name=email]').clear().type('testing@test.com')
    cy.get('input[name=password]').clear().type('testing')
    cy.get('button').click()
  })
})
