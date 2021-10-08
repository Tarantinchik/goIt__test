/**
 * restore_spec.js
 *
 * autotest for verifying restore password
 *
 * @package integration/goit/restore
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
        cy.openPasswordRestore(1280, 720);
    });

    it('', () => {
        cy.findByText('Забыли пароль?').should('be.visible');
        cy.get('#__next').contains('Ничего страшного! ');
        cy.get('#__next').contains('Укажите электронную почту с которой вы были зарегистрированы - мы отправим вам ссылку.');
        cy.get('label[for="user_email"]').should('have.text','Email');
        cy.get('#user_email').should('be.visible');
        cy.get('button[type="submit"]').should('have.text','Отправить ссылку');
        cy.get('a[href="/account/login"]').should('have.text','Я вспомнил(а) пароль');
    });

    it('', () => {
        cy.get('#user_email').type('2123');
        cy.get('button[type="submit"]').click();
        cy.get('div[role="status"]').should('be.visible');
    });

    it('', () => {
        cy.get('#user_email').type('pinchuk.dap@gmail.com');
        cy.get('button[type="submit"]').should('have.text','Отправить ссылку').click();
        // cy.wait(6000);
        cy.get('h1').should('have.text', 'Проверьте почту');
        cy.get('p').should('contain', 'Мы отправили инструкцию и ссылку для смены пароля на почту');
        cy.get('p b').should('contain', 'pinchuk.dap@gmail.com');
    });

    it('', () => {
        cy.get('#user_email').type('amakatyor@gmail.com');
        cy.get('button[type="submit"]').click();
        cy.get('div[role="status"]').should('be.visible');
    });

});


context('', () => {
    beforeEach(() => {
        cy.openPasswordRestore(1050, 620);
    });

    it('', () => {
        cy.get('#__next').contains('Упс');
        cy.get('#__next').contains('К сожалению нет возможности работать в Learning Management System (LMS) используя монитор с шириной мешьше');
        cy.get('#__next').contains('Перейти на ');
        cy.get('a[href="https://goit.ua"]').should('have.text','https://goit.ua/');
    })
});