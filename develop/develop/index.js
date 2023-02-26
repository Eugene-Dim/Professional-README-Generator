// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
 // project title
 {
    name: 'title',
    type: 'input',
    message: 'What is the title of your project?',
  },
  // description
  {
    name: 'description',
    type: 'input',
    message: 'Provide a short description explaining the what, why, and how of your project.',
  },
// installation
  {
    name: 'installation',
    type: 'input',
    message: 'Describe the installation instructions for your project.',
  },
// usage info
  {
    name: 'usage',
    type: 'input',
    message: 'What is the usage of your project?',
  },
  // contribution
  {
    name: 'contribution',
    type: 'input',
    message: 'List any collaborators of your project.',
  },
// test instructions
{
    name: 'test',
    type: 'input',
    message: 'Include any test you have done for your project.',
  },
  // license badge
  {
    name: 'license',
    type: 'list',
    message: 'Pick an appropriate license for your project.',
    choices: [
    'Apache',
    'GNU GPLv3',
    'MIT',
    'None'],
  },
  // GitHub username
  {
    name: 'github',
    type: 'input',
    message: 'Please enter your GitHub username.',
  },
  // email
  {
    name: 'email',
    type: 'input',
    message: 'Please enter your email.',
  },

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        data.getLicense = getLicense(data.license)
        fs.writeFile('generatedREADME/README.md', generateMarkdown(data), (err) => {
            if (err) {
                return console.log(err)
            }
            return console.log('README Generated!')
        })
    })
}

function getLicense(value){
    switch(value) {
        case 'Apache':
        return '![License: Apache](https://img.shields.io/badge/license-Apache%202.0-yellow)';
 
        case 'GNU GPLv3':
        return '![License: GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPL-green)';
       
        case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/license-MIT-blue)';
 
        case 'None':
        return '![License: None](https://img.shields.io/badge/license-none-orange)';        
    }
}

init();
