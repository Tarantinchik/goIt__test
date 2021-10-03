import '../../support/commands'

xcontext('Actions', () => {
    beforeEach(() => {
        cy.visit('https://goit-lms-staging.vercel.app/')
    })
    it('.type() - type into a DOM element', () => {
        cy.get('#user_email').clear();
        cy.get('#user_password').clear();

        cy.get('button[type="submit"]').click();
        // cy.get('.css-1qixftk').then((item) => {
        //     cy.log(item);
        // });
        //abstract class
        //cy.get('div[label="Email"]').parent().find('span').eq(1).should('have.text', 'E-mail отсутствует');
 //       cy.get('.css-1qixftk').eq(1).should('have.text', 'Введи пароль, чтобы продолжить');
    });

})

xcontext('Actions', () => {
    beforeEach(() => {
        cy.visit('https://goit-lms-staging.vercel.app/')
    })

    it('.type() - type into a DOM element', () => {
        cy.get('#user_email').clear();
        cy.get('#user_password').clear();
        cy.get('button[type="submit"]').click();

        cy.findByText('E-mail отсутствует').should('be.visible');
        cy.findByText('Введи пароль, чтобы продолжить').should('be.visible');
    })

    it('.type() - type into a DOM element', () => {
        cy.get('a[href="/account/password/restore"]').should('have.text','Не помню пароль');
    })
})

xcontext('Actions', () => {
    beforeEach(() => {
        cy.visit('https://goit-lms-staging.vercel.app/');
        cy.get('a[href="/account/password/restore"]').click();
    })

    it('.type() - type into a DOM element', () => {

    })


})