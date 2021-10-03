import '../../support/commands'

context('EditingSchoolInfo', () => {
    beforeEach(() => {
        cy.login('pinchuk.dap@gmail.com', 'dmss111278DAP!!!');
        cy.findByText('+ создать школу').should('be.visible');
    });
    it('.type() - type into a DOM element', () => {
        cy.get('label[for="searchbox"]').should('have.text', 'Поиск');
        cy.get('input[name="searchbox"]').clear().type('ad');
        cy.get('ul a').then((item) =>
            cy.get(item).should('contain','ad'))
    });
    afterEach(() => {
        cy.logout();
    });
})