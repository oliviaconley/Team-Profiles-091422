const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
    super(name, id, email)
    this.github = github; 
    }
    
    getGithub() {
        return(this.github); //i prompted the user to enter their github link but it wants to have the hyperlinked username
    }

    getRole() {
        return "Engineer"; 
    }
}; 

module.exports = Engineer;