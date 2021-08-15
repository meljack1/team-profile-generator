const inquirer = require("inquirer");
const fs = require("fs"); 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require("./src/generateHTML.js");

let managerObject;
const internObjects = [];
const engineerObjects = [];

inquirer
    .prompt([
    {
        type: 'input',
        message: "Enter the name of your team's manager.",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter the team manager's employee ID.",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter the team manager's email address.",
        name: 'email',
        validate: function(email)
        {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    },
    {
        type: 'input',
        message: "Enter the team manager's office number.",
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: "Would you like to add another team member?",
        choices: ["Add new Engineer", "Add new Intern", "Generate HTML"],
        name: 'addNew',
    },
])
  .then((response) => {
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
      managerObject = manager;
      if (response.addNew === "Add new Engineer") {
          engineerPrompts();
      } else if (response.addNew === "Add new Intern") {
          internPrompts();
      } else if (response.addNew === "Generate HTML") {
          const errorFunction = (err) => err ? console.error(err) : console.log('Commit logged!');
          fs.writeFile('./index.html', generateHTML.generateHTML(managerObject, engineerObjects, internObjects), errorFunction);
      }
  }
);

function engineerPrompts() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter the name of your engineer.",
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter the engineer's employee ID.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter the engineer's email address.",
            name: 'email',
            validate: function(email)
        {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        },
        {
            type: 'input',
            message: "Enter the engineer's GitHub username.",
            name: 'github',
        },
        {
            type: 'list',
            message: "Would you like to add another team member?",
            choices: ["Add new Engineer", "Add new Intern", "Generate HTML"],
            name: 'addNew',
        },
    ])
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        engineerObjects.push(engineer);
        if (response.addNew === "Add new Engineer") {
            engineerPrompts();
        } else if (response.addNew === "Add new Intern") {
            internPrompts();
        } else if (response.addNew === "Generate HTML") {
            const errorFunction = (err) => err ? console.error(err) : console.log('Commit logged!');
            fs.writeFile('./index.html', generateHTML.generateHTML(managerObject, engineerObjects, internObjects), errorFunction);
        }
    });
}

function internPrompts() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter the name of your intern.",
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter the intern's employee ID.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter the intern's email address.",
            name: 'email',
            validate: function(email)
        {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        },
        {
            type: 'input',
            message: "Enter the name of the intern's school.",
            name: 'school',
        },
        {
            type: 'list',
            message: "Would you like to add another team member?",
            choices: ["Add new Engineer", "Add new Intern", "Generate HTML"],
            name: 'addNew',
        },
    ])
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        internObjects.push(intern);
        if (response.addNew === "Add new Engineer") {
            engineerPrompts();
        } else if (response.addNew === "Add new Intern") {
            internPrompts();
        } else if (response.addNew === "Generate HTML") {
            const errorFunction = (err) => err ? console.error(err) : console.log('Commit logged!');
            fs.writeFile('./index.html', generateHTML.generateHTML(managerObject, engineerObjects, internObjects), errorFunction);
        }
    });
}
