import '../../support/commands'

context('CreateNewProductUI', () => {
    beforeEach(() => {
        cy.login('pinchuk.dap@gmail.com', 'dmss111278DAP!!!', 1280, 720);
    })

    it('.type() - type into a DOM element', () => {
        cy.createNewProductUI('dataSciense', 'onlineLessons');
    });
    afterEach(() => {
        cy.logout();
    });
})