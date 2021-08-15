const inquirer = require("inquirer");
const fs = require("fs"); 

const teamMembers = [];

function TeamMember(name, role, id, email, officeNumber) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.officeNumber= officeNumber;
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
])
  .then((response) => {
      const manager = new TeamMember(response.name, "Manager", response.id, response.email, response.officeNumber);
      teamMembers.push(manager);
  }
);
