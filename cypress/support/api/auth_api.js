/**
 * Метод выполнения апи-запроса на создание access токена
 */
Cypress.Commands.add('getToken', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'https://lms-test.goit-backend.com/api/v1/auth/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            username: username,
            password: password,
        }
    }).then(response => {
        // cy.writeFile( 'cypress/fixtures/text_write_file.json',  response.body.accessToken,  'utf8');
        return response.body.accessToken;
    });

    // cy.request('POST', 'https://lms-test.goit-backend.com/api/v1/auth/login', {
    //     username: username,
    //     password: password,
    // }).then(response => {
    //     return response.body.accessToken;
    // });
});