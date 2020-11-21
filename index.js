const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generate-markdown');

// License function and  if/else section here 
let getLicense = param => {   
     if (param === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    }  else if (param === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    }  else if (param === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }  else if (param === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }  else if (param === "ISC") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }  else if (param === "Mozilla") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }  else if (param === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }  else {
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
}
//make functions for validate to eliminate repetative if statements
let validateInput = value =>{
    if (value != "") {
        return true;
    }else{
        return "Please answer the question.";
    }
}
let validateEmail = value =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
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
        name: 'contribution',
        message: 'How can other users contribute to your project?',
        validate: validateInput
    },
    {   type: 'input',
        name: 'tests',
        message: 'Please provide any testing information.',
        validate: validateInput,
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
    
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err){
            return console.log(err);
        }
    });
}

// function to initialize program
const init = () => inquirer.prompt(questions)



// function call to initialize program
init()
    .then((data) => writeToFile("./dist/README.md", data))
    .then(() => console.log("CREATED!!"))
    .catch((err)=> console.log(err));
