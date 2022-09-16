const Engineer = require("../lib/engineer");

describe ("Engineer class", () => { 
    it ("Can get GitHub username via getGithub()", () => {
        const githubUser = "https://github.com/oliviaconley";
        const newUser = new Engineer("Olivia", 5, "bluerose2595@gmail.com", githubUser)
        expect(newUser.getGithub()).toEqual(githubUser)
    })

    it ("getRole() should return 'Engineer'", () => {
        const employeeId = 5;
        const newEngineer = new Engineer("Olivia", employeeId, "bluerose2595@gmail.com", "https://github.com/oliviaconley")
        expect(newEngineer.getRole()).toEqual("Engineer")
    })
});


