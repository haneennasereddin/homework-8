//required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Please enter GitHub Username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "Please enter project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter description of your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select license your project has.',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter command be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter command to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter how to use this project.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repository?',
  },
];

// write README file using input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();