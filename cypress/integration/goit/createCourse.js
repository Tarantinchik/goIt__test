import '../../support/commands'

context('CreateCourse', () => {
    const ms = new Date().getTime();
    const courseName = 'Course_' + ms;
    const schoolName = 'School number One';
    beforeEach(() => {
        // cy.login('pinchuk.dap@gmail.com', 'dmss111278DAP!!!', 1280, 720);
    })

    it('.create course by API', () => {
        let schoolId = cy.getSchoolIdByNameByAPI(schoolName);
        cy.log(schoolId);
        cy.createCourseByAPI(courseName, 'courseImage.jpg', schoolId).then(schoolId => {
            cy.log(schoolId);
        })
        });
    });
    afterEach(() => {
        // cy.logout();
    });
