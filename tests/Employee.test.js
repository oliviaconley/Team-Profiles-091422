const Employee = require("../lib/employee")

describe ("Employee class", () => {
    it ("Can get name via constructor", () => {
        const employeeName = "Olivia"
        const newEmployee = new Employee(employeeName, 5, "bluerose2595@gmail.com")
        expect(newEmployee.getName()).toEqual(employeeName)
    })

    it ("Can get id via constructor", () => {
        const employeeId = 5;
        const newId = new Employee("Olivia", employeeId, "bluerose2595@gmail.com")
        expect(newId.getId()).toEqual(employeeId)
    })

    it ("Can get email via constructor", () => {
        const employeeEmail = "bluerose2595@gmail.com"
        const newEmail = new Employee("Olivia", 5, employeeEmail)
        expect(newEmail.getEmail()).toEqual(employeeEmail)
    })

    it ("getRole() should return 'Employee'", () => {
        const employeeEmail = "bluerose2595@gmail.com"
        const newEmployee = new Employee("Olivia", 5, employeeEmail)
        expect(newEmployee.getRole()).toEqual("Employee")
    })
});

