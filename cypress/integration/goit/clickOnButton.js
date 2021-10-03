context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://goit-lms-staging.vercel.app/')
        cy.get('#user_email').clear().type('pinchuk.dap@gmail.com').should('have.value', 'pinchuk.dap@gmail.com');
        cy.get('#user_password').clear().type('dmss111278DAP!!!').should('have.value', 'dmss111278DAP!!!');
        cy.get('button[type="submit"]').click();
    })


    it('.click() - click on a DOM element', () => {
        cy.get('a[href="/products"]').click()
        cy.contains('Школа Виктора').click()

         cy.get('.e1sr2r9w3').should('have.text', 'Школа Виктора. Ломать - не строить)')


        // cy.get('a[href="/profile"]').click()
        // cy.get(' css-1fqv1ot').click()


    })

})
