const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
//put HTML blueprint here BUT i need to generate different html for the different cards
//Do i use this. or answers.
`<header>
    <h1>My Team</h1>
</header>
    <div class='manager-card'>
    <h2 class ='name'>${this.name}</h2>
    <h2 class ='manager'>Manager</h2>
    <p class="email">ID: ${this.email} </p>
    <p class="id">ID: ${this.id} </p>
    <p class="office-num">Office number:${this.office}</p>
    </div>`

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
            name: 'title',
            message: 'Who would you like to add to your team?',
            choices: ['Engineer', 'Intern']
            },
    ])
    .then(function(res){
        console.log(res)
    })
};

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
    ])
};

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
    ])
};

//do if use choose engineer then run engineer prompt, if they chose intern then run intern (if statement)


// .then((answers) => {
//     const htmlContent = generateHTML(answers)
//     fs.writeFile('index.html', htmlContent, (err)=>
//     err ? console.log(err) : console.log('')
//     );
// })

init();