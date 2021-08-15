const inquirer = require("inquirer");
const fs = require("fs"); 
const addNew = ["Add new Engineer", "Add new Intern", "Generate HTML"];

const teamMembers = [];

function TeamMember(data) {
    for (const property in data) {
        if (property == "addNew"){
            return;
        }
        this[property] = data[property];
    }
}

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
    },
    {
        type: 'input',
        message: "Enter the team manager's office number.",
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: "Would you like to add another team member?",
        choices: addNew,
        name: 'addNew',
    },
])
  .then((response) => {
      const manager = new TeamMember(response);
      teamMembers.push(manager);
      if (response.addNew == "Add new Engineer") {
          engineerPrompts();
      } else if (response.addNew == "Add new Intern") {
          internPrompts();
      } else if (response.addNew == "Generate HTML") {
          console.log(teamMembers);
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
        },
        {
            type: 'input',
            message: "Enter the engineer's GitHub username.",
            name: 'github',
        },
        {
            type: 'list',
            message: "Would you like to add another team member?",
            choices: addNew,
            name: 'addNew',
        },
    ])
    .then((response) => {
        const engineer = new TeamMember(response);
        teamMembers.push(engineer);
        if (response.addNew == "Add new Engineer") {
            engineerPrompts();
        } else if (response.addNew == "Add new Intern") {
            internPrompts();
        } else if (response.addNew == "Generate HTML") {
            console.log(teamMembers);
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
        },
        {
            type: 'input',
            message: "Enter the name of the intern's school.",
            name: 'school',
        },
        {
            type: 'list',
            message: "Would you like to add another team member?",
            choices: addNew,
            name: 'addNew',
        },
    ])
    .then((response) => {
        const intern = new TeamMember(response);
        teamMembers.push(intern);
        if (response.addNew == "Add new Engineer") {
            engineerPrompts();
        } else if (response.addNew == "Add new Intern") {
            internPrompts();
        } else if (response.addNew == "Generate HTML") {
            console.log(teamMembers);
        }
    });
}
