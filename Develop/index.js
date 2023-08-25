// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message:'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message:'Please provide installation instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message:'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message:'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message:'Please provide your email address.'
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile('README.md', generateMarkdown(response));
    })
}

// Function call to initialize app
init();
