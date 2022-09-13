const Manager = require("../lib/manager") //do i need to link to this?? 

describe ("Manager", () => {
    it ("Can get office number via getOffice()", () => {
        const employeeOffice = 3;
        const newOffice = new Manager("Olivia", 5, "bluerose2595@gmail.com", employeeOffice) ///should I leave as "Employee"
        expect(newOffice.officeNumber()).toEqual(employeeOffice)
    })

    it ("getRole() should return 'Manager'", () => {
        const employeeId = 5;
        const newId = new Manager("Olivia", employeeId, "bluerose2595@gmail.com", 3)
        expect(newId.getId()).toEqual("Manager")
    })
}); 
