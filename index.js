const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const team = [];

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please type your name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter your employee id.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number.", 
      },
      {
        type: "list",
        name: "team",
        message: "Who would you like to add to your team?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then(function (res) {
      const manager = new Manager(
        res.name,
        res.id,
        res.email,
        res.officeNumber
      );
      team.push(manager);
      console.log(team);

      fs.writeFile("index.html", generateManager(manager), (err) =>
        err ? console.log(err) : console.log("")
      );

      if (res.team == "Engineer") {
        engineerPrompt();
      } else {
        if (res.team == "Intern") {
          internPrompt();
        }
      }
    });
};

const generateManager = (answers) => {
  return `<link rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <header>
    <h1 class="hero text-center p-2">My Team</h1>
    </header>

<div class="d-inline-flex justify-content-start m-3">
    <div class="card" style="width: 18rem;">
        <h3 class="card-header">${answers.name} 
        <p>Manager</p> 
        </h3>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: <a mailto:"${answers.email}">${answers.email}</a></li> 
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">Office number: ${answers.officeNumber}</li>
    </ul>
    </div>
</div>`;
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please type your name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter your employee id.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address.",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub link.",
      },
      {
        type: "list",
        name: "team",
        message: "Who would you like to add to your team?",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    .then(function (res) {
      const engineer = new Engineer(res.name, res.id, res.email, res.github);
      team.push(engineer);
      console.log(team);
      fs.appendFile("index.html", generateEngineer(engineer), (err) =>
        err ? console.log(err) : console.log("")
      );
      if (res.team == "Engineer") {
        engineerPrompt();
      } else if (res.team == "Intern") {
        internPrompt();
      } else {
        fs.appendFile("index.html", generateEngineer(engineer), (err) => {
          if (res.team == "Quit") {
            console.log("\nGoodbye!");
            process.exit(0);
          }
          err ? console.log(err) : console.log("");
        });
      }
    });
};

const generateEngineer = (answers) => {
  return `<div class="d-inline-flex justify-content-start m-3">
  <div class="card" style="width: 18rem;">
      <h3 class="card-header">${answers.name} 
      <p>Engineer</p> 
      </h3>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">Email: <a mailto:"${answers.email}">${answers.email}</a></li>
      <li class="list-group-item">GitHub: <a href="${answers.github}">${answers.github}</a></li>
  </ul>
  </div>
</div>`;
};
const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please type your name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter your employee id.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address.",
      },
      {
        type: "input",
        name: "school",
        message: "Which school do you currently attend?",
      },
      {
        type: "list",
        name: "team",
        message: "Who would you like to add to your team?",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    .then(function (res) {
      const intern = new Intern(res.name, res.id, res.email, res.school);
      team.push(intern);
      console.log(team);
      fs.appendFile("index.html", generateIntern(intern), (err) =>
        err ? console.log(err) : console.log("")
      );
      if (res.team == "Engineer") {
        engineerPrompt();
      } else if (res.team == "Intern") {
        internPrompt();
      } else {
        fs.appendFile("index.html", generateEngineer(intern), (err) => {
          if (res.team == "Quit") {
            console.log("\nGoodbye!");
            process.exit(0);
          }
          err ? console.log(err) : console.log("");
        });
      }
    });
};

const generateIntern = (answers) => {
  return `<div class="d-inline-flex justify-content-start m-3">
  <div class="card" style="width: 18rem;">
      <h3 class="card-header">${answers.name} 
      <p>Intern</p> 
      </h3>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">Email: <a mailto:"${answers.email}">${answers.email}</a></li>
      <li class="list-group-item">School: ${answers.school}</li>
  </ul>
  </div>
</div>`;
};

init();
