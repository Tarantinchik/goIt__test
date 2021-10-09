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
import selRestore from '../../../selectors/selRestore/restore_sel.json'

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
        cy.get(selRestore.header).should('be.visible');
        cy.get(selRestore.paragraphText).should("contain", 'Ничего страшного! ');
        cy.get(selRestore.paragraphText).should("contain", 'Укажите электронную почту с которой вы были зарегистрированы - мы отправим вам ссылку.');
        cy.get(selRestore.labelEmail).should('have.text','Email');
        cy.get(selRestore.inputEmail).should('be.visible');
        cy.get(selRestore.sendEmailLinkButton).should('have.text','Отправить ссылку');
        cy.get(selRestore.iRememberMyPswdLink).should('have.text','Я вспомнил(а) пароль');
    });

    it('', () => {
        cy.get(selRestore.inputEmail).type('2123');
        cy.get(selRestore.sendEmailLinkButton).click();
        cy.get(selRestore.wrongLoginOrPassword).should('be.visible');
    });

    it('', () => {
        cy.get(selRestore.inputEmail).type('pinchuk.dap@gmail.com');
        cy.get(selRestore.sendEmailLinkButton).should('have.text','Отправить ссылку').click();
        // cy.wait(6000);
        cy.get(selRestore.header).should('have.text', 'Проверьте почту');
        cy.get(selRestore.paragraphText).should('contain', 'Мы отправили инструкцию и ссылку для смены пароля на почту');
        cy.get(selRestore.paragraphText).should('contain', 'pinchuk.dap@gmail.com');
    });

    it('', () => {
        cy.get(selRestore.inputEmail).type('amakatyor@gmail.com');
        cy.get(selRestore.sendEmailLinkButton).click();
        cy.get(selRestore.wrongLoginOrPassword).should('be.visible');
    });

});


context('', () => {
    beforeEach(() => {
        cy.openPasswordRestore(1050, 620);
    });

    it('', () => {
        cy.get(selRestore.header).should('contain','Упс');
        cy.get(selRestore.paragraphText).should('contain','К сожалению нет возможности работать в Learning Management System (LMS) используя монитор с шириной мешьше');
        cy.get(selRestore.paragraphText).should('contain','Перейти на ');
        cy.get(selRestore.goItUALink).should('have.text','https://goit.ua/');
    })
});