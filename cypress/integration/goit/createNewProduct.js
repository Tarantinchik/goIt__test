import '../../support/commands'

context('CreateNewProductUI', () => {
    const ms = new Date().getTime();
    const schoolName = 'Product_' + ms;
    beforeEach(() => {
        // cy.login('pinchuk.dap@gmail.com', 'dmss111278DAP!!!', 1280, 720);
    })

    it('.type() - type into a DOM element', () => {
        // cy.createNewSchoolUI('BykanovSchool', 'Integrity', 'screenLogoSample.png', 'image/png');
        //  cy.getToken('super_admin', 'super_admin').then(token => {
        //       cy.log(token)
        //  })
        // cy.getTokenByAPI().then(token => {
        //     cy.log(token);
        // })
        cy.createSchoolByAPI(productName, 'https://s3.eu-north-1.amazonaws.com/lms.goit.files/5894c684-4841-3707-85a9-c90b6a051303.png', 'desc3322')
    });
    afterEach(() => {
        // cy.logout();
    });
})