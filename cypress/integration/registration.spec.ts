describe('Registration', () => {
  it('should register account => navigate to home page', () => {
    cy.visit('https://admin.expane.pro')

    cy.contains('Зарегистрировать эккаунт').click()

    cy.contains('Регистрация')

    cy.get('input[name="email"]').type('test1@expane.pro').should('have.value', 'test1@expane.pro')
    cy.get('input[name="password"]').type('123456').should('have.value', '123456')

    cy.contains('ЗАРЕГИСТРИРОВАТЬ').click()

    cy.url().should('include', '/home')
  })
})
