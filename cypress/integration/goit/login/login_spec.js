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
const password = 'dmss111278DAP!!!';

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

});

context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
        cy.wait(3000);
    });

    it('', () => {
        cy.changeAccountPage('pinchuk.dap@gmail.com', password);
        cy.changeAccountPage('380971344443@qa.team', password);
        cy.changeAccountPage('77777_Chm@qa.team', password);
        cy.changeAccountPage('77777_Mentor@qa.team', password);
        cy.changeAccountPage('77777_tutor@qa.team', password);
        cy.changeAccountPage('005_pin2@qa.team', password);

    })

});

context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
    });

    it('', () => {

        cy.get('#user_email').type('unknown_user@test.test');
        cy.get('#user_password').type('dmss111278DAP!!!');
        cy.get('button[type="submit"]').click();
        cy.get('div[role="status"]').should('have.text','Передан неправильный логин или пароль');
    })

});


context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
    });

    it('', () => {

        cy.get('#user_email').type('pinchuk.dap@gmail.com');
        cy.get('#user_password').type('dmss111278DAP@@@');
        cy.get('button[type="submit"]').click();
        cy.get('div[role="status"]').should('have.text','Передан неправильный логин или пароль');
    })

});


context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
    });

    it('', () => {
        cy.get('#user_email').type('pinchuk.dap@gmail.com');
        cy.get('#user_password').type(' ');
        cy.get('button[type="submit"]').click();
        cy.get('div[label="Пароль"]').parent().find('span').eq(1).should('have.text', 'Введи пароль, чтобы продолжить');

    })

});

context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
    });

    it('', () => {
        cy.get('#user_email').type('email....!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!...500symbols@gmail.com');
        cy.get('#user_password').type('password_500_symbols$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
        cy.get('button[type="submit"]').click();
        cy.get('div[role="status"]').should('have.text','Передан неправильный логин или пароль');

    })

});

context('', () => {
    beforeEach(() => {
        cy.openLoginAccountPage(1280, 720);
    });

    it('', () => {
        cy.get('#user_email').type('pinchuk.dap@gmail.com');
        cy.get('#user_password').type('dmss111278DAP!!!');
        cy.get('path[fill-rule="evenodd"]').click();

    })

});