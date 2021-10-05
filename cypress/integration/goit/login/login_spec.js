/**
 * login_spec.js
 *
 * autotest for verifying login page
 *
 * @package integration/goit/login
 * @author QA
 * @copyright GoIT
 * @version 1.1
 */

import '../../../support/commands'

/**
 * testList:
 * 1.
 * 2.
 * 3.
 */

context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
    });

    it('', () => {
        cy.findByText('Вход').should('be.visible');
        cy.get('label[for="user_email"]').should('have.text', 'Email');
        cy.get('label[for="user_password"]').should('have.text', 'Пароль');
        cy.get('#user_email').should('be.visible');
        cy.get('#user_password').should('be.visible');
        cy.get('button[type="button"]').should('be.visible');
        cy.get('button[type="submit"]').should('have.text', 'Войти');
        cy.get('a[href="/account/password/restore"]').should('have.text', 'Не помню пароль');

    })


});
context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
        cy.get('button[type="submit"]').should('have.text', 'Войти').click();
    });

    it('', () => {
         cy.get('div[label="Email"]').parent().find('span').eq(1).should('have.text', 'E-mail отсутствует');
         cy.get('div[label="Пароль"]').parent().find('span').eq(1).should('have.text', 'Введи пароль, чтобы продолжить');

    });
    // cy.get('label[for="user_password"]').should('have.text','Введи пароль, чтобы продолжить');




});
