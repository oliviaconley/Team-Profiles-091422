const Manager = require("../lib/manager")

describe ("Manager", () => {
    it ("Can set office number via constructor argument", () => {

    })
    

    it ("Can get office number via getOffice()", () => {
        const employeeOffice = 5;
        const newOffice = new Employee("Olivia", 5, "bluerose2595@gmail.com", employeeOffice)
        expect(newOffice.officeNumber()).toEqual(employeeOffice)
    })

    it ("getRole() should return 'Manager'", () => {
        const employeeId = 5;
        const newId = new Employee("Olivia", employeeId, "bluerose2595@gmail.com", 3)
        expect(newId.getId()).toEqual("Manager")
    })
}); 
