const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generate-markdown')



//make functions for validate to eliminate repetative if statements
let validateInput = value =>{
    if (value != "") {
        return true;
    }else{
        return "Please answer the question.";
    }
}
let validateEmail = mail =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
        {return true
        }else{
            return "This email address is invalid!";
        }
}
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?? (REQUIRED)',
        validate: validateInput
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project! (REQUIRED)',
        validate: validateInput
    },
    // {
    //     type: 'input',
    //     name: 'Table of Contents',
    //     message: 'What secitons for your table of contents(OPTIONAL)'
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'Include any installation instructions(OPTIONAL)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe usage information for this particular project(REQUIRED)',
        validate: validateInput
    },
    {
        type: 'list',
        name: 'license',
        message: "Please select a license for this project",
        choices:[
            "GNU GPLv3",
            "GNU LGPLv3",
            "GNU AGPLv3",
            "Apache 2.0",
            "MIT",
            "ISC",
            "Mozilla",
            "Boost Software 1.0",
            "The Unlicence",
        ],
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'How can other users contribute to your project?',
        validate: validateInput
    },
    {
        type: 'input',
        name: 'ghUser',
        message: 'What is your GitHub username?',
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'Email',
        message: "What e-mail address would you prefer potential contributors contact?",
        validate:validateEmail,
    },


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err){
        if (err){
            return console.log(err);
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data =>{
        console.log(JSON.stringify(data, null, ""));
        data.getLicense = getLicence(data.license);
        writeToFile("./example/README.md", data);
    }));

}

// function call to initialize program
init();
