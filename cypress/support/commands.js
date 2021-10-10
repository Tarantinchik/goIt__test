import '@testing-library/cypress/add-commands';
import 'cypress-file-upload';
import '../support/api/auth_api';
import '../support/api/schools_api';
import selLogin from '../selectors/login/login_sel.json';

Cypress.Commands.add('login', (login = '', password = '', sizeX, sizeY) => {
    cy.viewport(sizeX, sizeY);
    cy.visit('https://goit-lms-staging.vercel.app/');
    if (login !== '' && password !== '') {
        cy.get(selLogin.inputEmail).clear().type(login);
        cy.get(selLogin.inputPassword).clear().type(password);
        cy.get(selLogin.btnEnter).click();
        cy.wait(5000);
    }
});

Cypress.Commands.add('openPasswordRestore', (sizeX, sizeY) => {
    cy.viewport(sizeX, sizeY);
    cy.visit('https://goit-lms-staging.vercel.app/account/password/restore');

})

Cypress.Commands.add('openLoginAccountPage', (sizeX, sizeY) => {
    cy.viewport(sizeX, sizeY);
    cy.visit('https://goit-lms-staging.vercel.app/account/login');

})

Cypress.Commands.add('changeAccountPage', (userName, userPassword) => {

    cy.get(selLogin.inputEmail).type(userName );
    cy.get(selLogin.inputPassword).type(userPassword);
    cy.get(selLogin.btnEnter).should('have.text', 'Войти').click();
    cy.wait(5000);
    cy.get('a[href="/profile"]').click();
    cy.findByText('Выйти').click();

})

Cypress.Commands.add('addInformationAboutSchool', (schoolName) => {
    // cy.get('input[name="searchbox"]').clear().type(schoolName);
    cy.findByText(schoolName).click();

});

Cypress.Commands.add('logout', () => {
    cy.wait(5000);
    cy.get('a[href="/profile"]').click();
    cy.findByText('Выйти').click();
});

Cypress.Commands.add('clickOnIforgotMyPassword', () => {
    cy.visit('https://goit-lms-staging.vercel.app/');
    cy.get('a[href="/account/password/restore"]').click();
    cy.findByText('Забыли пароль?').should('be.visible');
});

Cypress.Commands.add('createSchoolByUI', (schoolName, schoolDescription, file, type) => {
    //  cy.get('a[[href="/schools"]').click();
    cy.findByText('+ создать школу').should('be.visible').click();
    cy.get('#name').type(schoolName);
    cy.get('#description').type(schoolDescription);
    cy.fixture(file).then(content => {
        cy.get('input[type="file"]').attachFile({
            fileContent: content.toString(),
            fileName: file,
            mimeType: type,
        })
    });
    cy.get('button[type="submit"]').then($elem => {
        $elem[0].removeAttribute('disabled');
    }).click();

});
Cypress.Commands.add('createNewProductUI', (productName, productDescription, schoolName, courseName, types) => {
    cy.get('a[href="/products"]').click();
    cy.findByText('+ создать продукт').should('be.visible').click();
    cy.get('input[name="name"]').type(productName);
    cy.get('input[name="description"]').type(productDescription);
    cy.get('form div').eq(7).click();
    // cy.get('#react-select-3-input').type(courseName);
    // cy.get('#react-select-4-input').type(types);
    // cy.get('button[type="submit"]').then($elem => {
    //     $elem[0].removeAttribute('disabled');
    // }).click();
});


Cypress.Commands.add('getTokenByAPI', () => {
    cy.getToken('super_admin', 'super_admin').then(accessToken => {
        return accessToken;
    })
});

Cypress.Commands.add('createSchoolByAPI', (name, imageLink, description) => {
    cy.getTokenByAPI().then(accessToken => {
        cy.createSchool(accessToken, name, imageLink, description).then(schoolId => {
            cy.log(schoolId);
        });
    })
});

Cypress.Commands.add('getSchoolIdByNameByAPI', name => {
    cy.getTokenByAPI().then(accessToken => {
        cy.getSchoolList(accessToken).then(schoolList => {
            let schoolId = '';
            schoolList.forEach(item => {
                if (item.name === name) {
                    schoolId = item.id;
                }
            })
            return schoolId;
        })
    })
});

Cypress.Commands.add('createCourseByAPI', (name, imageLink, schoolId) => {
    cy.getTokenByAPI().then(accessToken => {
        cy.createCourse(accessToken, name, imageLink, schoolId).then(item => {
            cy.log(item)
        })
    })
});


Cypress.Commands.add('getCoursesListBySchoolAPI', (schoolId) => {
    cy.getTokenByAPI().then(accessToken => {
        cy.getCourseBySchoolId(accessToken, schoolId).then(item => {
            cy.log(schoolId)
            cy.log(item)
        })
    })
});