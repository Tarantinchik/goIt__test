import '../../support/commands'

context('EditingSchoolInfo', () => {
    beforeEach(() => {
        cy.login('pinchuk.dap@gmail.com', 'dmss111278DAP!!!', 1280, 720);
        cy.findByText('+ создать школу').should('be.visible');
    });
    it('.type() - type into a DOM element', () => {
        // cy.get('label[for="searchbox"]').should('have.text', 'Поиск');
        // cy.get('input[name="searchbox"]').clear().type('ad');
        // cy.get('ul a').then((item) =>
        //     cy.get(item).should('contain','ad'))
        cy.addInformationAboutSchool('School_19771410');
    });
    afterEach(() => {
        cy.logout();
    });
})