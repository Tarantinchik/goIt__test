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
import testDataRes from '../../../fixtures/testData/restore/restoteData.json'

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
        cy.get(selRestore.paragraphText).should("contain", testDataRes.textForParagraph);
        cy.get(selRestore.paragraphText).should("contain", testDataRes.textForParSecond);
        cy.get(selRestore.labelEmail).should('have.text',testDataRes.textEmail);
        cy.get(selRestore.inputEmail).should('be.visible');
        cy.get(selRestore.sendEmailLinkButton).should('have.text',testDataRes.sendLink);
        cy.get(selRestore.iRememberMyPswdLink).should('have.text',testDataRes.iRememberPswd);
    });

    it('', () => {
        cy.get(selRestore.inputEmail).type(testDataRes.incorrectEmail);
        cy.get(selRestore.sendEmailLinkButton).click();
        cy.get(selRestore.wrongLoginOrPassword).should('be.visible');
    });

    it('', () => {
        cy.get(selRestore.inputEmail).type(testDataRes.correctEmail);
        cy.get(selRestore.sendEmailLinkButton).should('have.text',testDataRes.sendLink).click();
        // cy.wait(6000);
        cy.get(selRestore.header).should('have.text', testDataRes.checkYourEmail);
        cy.get(selRestore.paragraphText).should('contain', testDataRes.instructionForPswdChange);
        cy.get(selRestore.paragraphText).should('contain', testDataRes.correctEmail);
    });

    it('', () => {
        cy.get(selRestore.inputEmail).type(testDataRes.invalidEmail);
        cy.get(selRestore.sendEmailLinkButton).click();
        cy.get(selRestore.wrongLoginOrPassword).should('be.visible');
    });

});


context('', () => {
    beforeEach(() => {
        cy.openPasswordRestore(1050, 620);
    });

    it('', () => {
        cy.get(selRestore.header).should('contain',testDataRes.ups);
        cy.get(selRestore.paragraphText).should('contain',testDataRes.textWithSmallScreen);
        cy.get(selRestore.paragraphText).should('contain',testDataRes.youHaveToGo);
        cy.get(selRestore.goItUALink).should('have.text',testDataRes.smallScreenLinkText);
    })
});