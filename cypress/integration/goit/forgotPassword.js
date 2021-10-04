import '../../support/commands'

context('Actions', () => {
    beforeEach(() => {

        cy.clickOnIforgotMyPassword();
    })
    // check if forgetPassword page DOM elements are present
    it('.should() - make an assertion of text visibility', () => {
        cy.get('label[for="user_email"]').should('have.text','Email');
        cy.get('button[type="submit"]').should('be.visible');
        cy.get('button[type="submit"]').should('have.text','Отправить ссылку');
        cy.get('#user_email').type('pinchuk.dap@gmail.com').should('be.visible');
        cy.get('button[type="submit"]').click();
        cy.findByText('Проверьте почту').should('be.visible');
        cy.get('div[id="__next"]').should('contain','pinchuk.dap@gmail.com');
        cy.get('[id="__next"]').should('contain','pinchuk.dap@gmail.com');
    });

})