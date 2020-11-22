// function to generate markdown for README
function generateMarkdown(data) {
    return `
# Project Title
### ${data.title}


${data.licenseBadge}

# Description
#### ${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contribution)
* [Tests](#Tests)
* [Questions](#Contact)

## Installation
#### ${data.installation}

## Usage
#### ${data.usage}

## License
#### ${data.license}

## Contribution
#### ${data.contribution}

### Tests
##### ${data.tests}

# Contact 
### Github: ${data.ghUser}
### Email: ${data.Email}
  `;
  }
  
  module.exports = generateMarkdown;
  