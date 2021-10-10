import '../../support/commands'

xcontext('CreateCourse', () => {
    const ms = new Date().getTime();
    const courseName = 'Course_' + ms;
    const schoolName = 'School_19771410';
    const name = 'School_19771410';
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


context('GetCourseList', () => {
    const schoolName = 'School_19771410';

    it('.get course list by school API', () => {
        cy.getSchoolIdByNameByAPI(schoolName).then(schoolId => {
            cy.getCoursesListBySchoolAPI(schoolId)
        });
    });
});