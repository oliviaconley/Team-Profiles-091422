const Engineer = require("../lib/engineer");

describe ("Engineer class", () => { 
    it ("Can set GitHub account via constructor", () => {
        const employeeGithub = "https://github.com/oliviaconley";
        const newGithub = new Engineer("Olivia", 5, "bluerose2595@gmail.com", newGithub)
        expect(newGithub.getGithub()).toEqual(employeeGithub)
    })

    it ("Can get GitHub username via getGithub()", () => {
        const githubUser = oliviaconley;
        const newUser = new Engineer("Olivia", 5, "bluerose2595@gmail.com", githubUser)
        expect(newUser.getGithub()).toEqual(employeeGithub)
    })

    it ("getRole() should return 'Engineer'", () => {
        const employeeId = 5;
        const newId = new Engineer("Olivia", employeeId, "bluerose2595@gmail.com", "https://github.com/oliviaconley")
        expect(newId.getId()).toEqual("Engineer")
    })
});


