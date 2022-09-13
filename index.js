const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const team = []; 

const init = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please type your name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee id.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter your office number.'
        },
        {
            type: 'list',
            name: 'team',
            message: 'Who would you like to add to your team?',
            choices: ['Engineer', 'Intern']
            },
    ])
    .then(function(res){
    const manager = new Manager(
        res.name, 
        res.id, 
        res.email, 
        res.officeNumber, )
        team.push(manager)
        console.log(team)
    fs.writeFile('index.html', managerContent, (err)=>
    err ? console.log(err) : console.log('')
    );

    if(res.team == 'Engineer') {
            engineerPrompt();
    } else { 
            if(res.team == 'Intern') {
            internPrompt();
    }};
    })
};

const generateManager = (answers) => {
    return `<header>
    <h1>My Team</h1>
</header>
    <div class='manager-card'>
    <h2 class ='name'>${answers.name}</h2>
    <h2 class ='manager'>Manager</h2>
    <p class="email"><a href="mailto:${answers.email}">Email: ${answers.email} </p> 
    <p class="id">ID: ${answers.id} </p>
    <p class="office-num">Office number:${answers.office}</p>
    </div>`
}
const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please type your name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee id.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub link.'
        },
        {
            type: 'list',
            name: 'team',
            message: 'Who would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'Quit']
        },
    ])
    .then(function(res){
        const engineer = new Engineer(
            res.name, 
            res.id, 
            res.email, 
            res.github, )
            team.push(engineer)
        fs.writeFile('index.html', engineerContent, (err)=>
        err ? console.log(err) : console.log('')
        );
    })
};

const generateEngineer = (answers) => {
return `<header>
    <h1>My Team</h1>
</header>
    <div class='engineer-card'>
        <h2 class ='engineer'>Engineer</h2>
        <p class="id">ID:${answers.id}</p>
        <p class="email"><a href="mailto:${answers.email}">Email: ${answers.email}</p>
        <p class="github"><a href="${answers.github}">GitHub:${answers.github}</p>
    </div>`
}
const internPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please type your name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee id.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Which school do you currently attend?'
        },
        {
            type: 'list',
            name: 'team',
            message: 'Who would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'Quit']
        },
    ])
    .then(function(res){
        const intern = new Intern(
            res.name, 
            res.id, 
            res.email, 
            res.school, )
            team.push(intern)
        fs.writeFile('index.html', internContent, (err)=>
        err ? console.log(err) : console.log('')
        );
    })
};

const generateIntern = (answers) => {
return `<header>
    <h1>My Team</h1>
</header>
    <div class='intern-card'>
    <h2 class ='intern'>Intern</h2>
    <p class="id">ID: ${anwers.id}</p>
    <p class="email"><a href="mailto:${answers.email}">Email: ${answers.email}</p>
    <p class="school">School: ${answers.school}</p>
    </div>`
}


// .then((answers) => {
//     const managerContent = generateManager(res)
//     fs.writeFile('index.html', managerContent, (err)=>
//     err ? console.log(err) : console.log('')
//     );
// })

init();