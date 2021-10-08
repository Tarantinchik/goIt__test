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

import '../../../support/commands';
import selLogin from '../../../selectors/login/login_sel.json'

/**
 * testList:
 * 1.
 * 2.
 * 3.
 */
const password = 'dmss111278DAP!!!';

context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
    });

    it('', () => {
        cy.get(selLogin.header).should('be.visible');
        cy.get(selLogin.labelEmail).should('have.text', 'Email');
        cy.get(selLogin.labelPassword).should('have.text', 'Пароль');
        cy.get(selLogin.inputEmail).should('be.visible');
        cy.get(selLogin.inputPassword).should('be.visible');
        cy.get(selLogin.btnEye).should('be.visible');
        cy.get(selLogin.btnEnter).should('have.text', 'Войти');
        cy.get(selLogin.linkForgetPassword).should('have.text', 'Не помню пароль');
    })

    it('', () => {
        cy.get(selLogin.btnEnter).should('have.text', 'Войти').click();
        cy.get(selLogin.divLabelEmail).parent().find('span').eq(1).should('have.text', 'E-mail отсутствует');
        cy.get(selLogin.divLabelPassword).parent().find('span').eq(1).should('have.text', 'Введи пароль, чтобы продолжить');

    });

    it('', () => {
        cy.wait(3000);
        cy.changeAccountPage('pinchuk.dap@gmail.com', password);
        cy.changeAccountPage('380971344443@qa.team', password);
        cy.changeAccountPage('77777_Chm@qa.team', password);
        cy.changeAccountPage('77777_Mentor@qa.team', password);
        cy.changeAccountPage('77777_tutor@qa.team', password);
        cy.changeAccountPage('005_pin2@qa.team', password);

    })

    it('', () => {
        cy.get(selLogin.inputEmail).type('unknown_user@test.test');
        cy.get(selLogin.inputPassword).type('dmss111278DAP!!!');
        cy.get(selLogin.btnEnter).click();
        cy.get(selLogin.wrongLoginOrPassword).should('have.text','Передан неправильный логин или пароль');
    })

    it('', () => {
        cy.get(selLogin.inputEmail).type('pinchuk.dap@gmail.com');
        cy.get(selLogin.inputPassword).type('dmss111278DAP@@@');
        cy.get(selLogin.btnEnter).click();
        cy.get(selLogin.wrongLoginOrPassword).should('have.text','Передан неправильный логин или пароль');
    })

    it('', () => {
        cy.get(selLogin.inputEmail).type('pinchuk.dap@gmail.com');
        cy.get(selLogin.inputPassword).type(' ');
        cy.get(selLogin.btnEnter).click();
        cy.get(selLogin.divLabelPassword).parent().find('span').eq(1).should('have.text', 'Введи пароль, чтобы продолжить');

    })

    it('', () => {
        cy.get(selLogin.inputEmail).type('email....!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!...500symbols@gmail.com');
        cy.get(selLogin.inputPassword).type('password_500_symbols$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
        cy.get(selLogin.btnEnter).click();
        cy.get(selLogin.wrongLoginOrPassword).should('have.text','Передан неправильный логин или пароль');

    })
    it('', () => {
        cy.get(selLogin.inputEmail).type('pinchuk.dap@gmail.com');
        cy.get(selLogin.inputPassword).type('dmss111278DAP!!!');
        cy.get(selLogin.btnEye).click();
        cy.get(selLogin.inputPassword).should('')
    })

    it('', () => {
        cy.get('a[href="/account/password/restore"]').should('have.text', 'Не помню пароль').click();

    })

});




