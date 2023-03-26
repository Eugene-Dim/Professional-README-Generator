// TODO: Include packages needed for this application
import inquirer from 'inquirer';
  import fs from 'fs';
  import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description for your project'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install the application?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you start this application?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license does your application is covered under?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Are there any contributers?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Are there any requirements for your application to run?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ];


// TODO: Create a function to write README file
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      const filename = 'README.md';
      await fs.promises.writeFile(filename, generateMarkdown(answers));
      console.log(`Success! Your ${filename} file has been successfully generated.`);
    } catch (error) {
      console.error(error);
    }
  }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const filename = "README.md"


        fs.writeFile(filename, generateMarkdown(data), (err) => err ? 
        console.log(err) : console.log("Success!")
        )
        
    })
}

// Function call to initialize app
function initApp() {
    
    console.log('App initialize');
  }
  
  initApp();
  