const Manager = require("../lib/manager") 

describe ("Manager", () => {
    it ("Can get office number via getOffice()", () => {
        const employeeOffice = 3;
        const newOffice = new Manager("Olivia", 5, "bluerose2595@gmail.com", employeeOffice) 
        expect(newOffice.getOfficeNumber()).toEqual(employeeOffice)
    })

    it ("getRole() should return 'Manager'", () => {
        const employeeId = 5;
        const newManager = new Manager("Olivia", employeeId, "bluerose2595@gmail.com", 3)
        expect(newManager.getRole()).toEqual("Manager")
    })
}); 
