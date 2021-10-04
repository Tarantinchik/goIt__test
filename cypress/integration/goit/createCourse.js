import '../../support/commands'

context('CreateCourse', () => {
    const ms = new Date().getTime();
    const courseName = 'Course_' + ms;
    const schoolName = 'School number One';
    beforeEach(() => {
        // cy.login('pinchuk.dap@gmail.com', 'dmss111278DAP!!!', 1280, 720);
    })

    it('.create course by API', () => {
        cy.getSchoolIdByNameByAPI(schoolName).then(schoolId => {
            cy.createCourseByAPI(courseName, 'https://s3.eu-north-1.amazonaws.com/lms.goit.files/5894c684-4841-3707-85a9-c90b6a051303.png', schoolId)
        });
    });
});
afterEach(() => {
    // cy.logout();
});
