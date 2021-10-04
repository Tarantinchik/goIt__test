/**
 * auth_api.js
 *
 * API CRUD-methods for auth
 *
 * @package:    support/api
 * @author:     Dmitry Pinchuk
 * @copyright:  GoIT
 * @version:    1.0
 */

// import config from '../../../config/url_endPoints.json';

Cypress.Commands.add('createSchool', (accessToken, name, imageLink, description) => {
    cy.request({
        method: 'POST',
        url: 'https://lms-test.goit-backend.com/api/v1/school/create',
        headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        body: {
            name: name,
            imageLink: imageLink,
            description: description
        }
    }).then(response => {
        return response.body.schoolId;
    });
    })

Cypress.Commands.add('createProduct', (accessToken, name, description, school, course, typeOf) => {
    cy.request({
        method: 'POST',
        url: 'https://goit-lms-staging.vercel.app/products/create',
        headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        body: {
            name: name,
            description: description,

        }
    }).then(response => {
        return response.body.schoolId;
    });
})

Cypress.Commands.add('getSchoolList', (accessToken) => {
    cy.request({
        method: 'GET',
        url: 'https://lms-test.goit-backend.com/api/v1/school/list',
        headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.body.schools;
    });
});

Cypress.Commands.add('createCourse', (accessToken, name, imageLink, schoolId) => {
    cy.request({
        method: 'POST',
        url: 'https://lms-test.goit-backend.com/api/v1/course/create',
        headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        body: {
            name: name,
            imageLink: imageLink,
            schoolId: schoolId
        }
    }).then(response => {
        return response.body.courseId;
    });
})
