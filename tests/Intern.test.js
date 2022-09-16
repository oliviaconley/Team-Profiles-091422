const Intern = require("../lib/intern")

describe ("Intern", () => {
    it ("Can get school via getSchool()", () => {
        const employeeSchool = "Davidson College";
        const newSchool = new Intern("Olivia", 5, "bluerose2595@gmail.com", employeeSchool)
        expect(newSchool.getSchool()).toEqual(employeeSchool)
    })
    
    it ("getRole() should return 'Intern'", () => {
        const employeeId = 7;
        const newIntern = new Intern("Olivia", employeeId, "bluerose2595@gmail.com", "Davidson College")
        expect(newIntern.getRole()).toEqual("Intern")
    })
});

