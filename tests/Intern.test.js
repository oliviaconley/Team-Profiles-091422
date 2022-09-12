const Intern = require("../lib/intern")

describe ("Intern", () => {
    it ("Can get school via constructor", () => {

    })
    expect().toEqual()

    it ("Can get school via getSchool()", () => {
        const employeeSchool = 5;
        const newSchool = new Employee("Olivia", 5, "bluerose2595@gmail.com", employeeSchool)
        expect(newSchool.getSchool()).toEqual(employeeSchool)
    })
    
    it ("getRole() should return 'Intern'", () => {
        const employeeId = 5;
        const newId = new Employee("Olivia", employeeId, "bluerose2595@gmail.com", "Georgia Tech")
        expect(newId.getId()).toEqual("Intern")
    })
});

