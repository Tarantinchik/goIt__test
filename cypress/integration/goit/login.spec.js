import '../../support/commands'

context('Actions', () => {
    beforeEach(() => {
        cy.login('pinchuk.dap@gmail.com', 'dmss111278DAP!!!');
    })

    it('.type() - type into a DOM element', () => {
        cy.get('nav a').eq(2).click();
        cy.url().should('eq', 'https://goit-lms-staging.vercel.app/groups');
    });

    afterEach(() => {
         cy.logout();
    })
})

xcontext('with a checked task', () => {

    it('.click() - click on a DOM element', () => {
        cy.get('a[href="/schools"]').click()
        cy.contains('Школа Виктора').click()
        cy.contains('Добавить страну').click()
        cy.get('#country').clear().type('USA').should('have.value', 'USA');
        cy.contains('Сохранить').click().find('a[href="/countries"]').should('have.text', 'USA')
        // cy.find('a[href="/countries"]').should('have.text', 'USA')
    })

})
