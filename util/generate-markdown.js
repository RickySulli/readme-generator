// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # Project Title
    ## ${data.title}


    ${data.licenseBadge}

    # Description
    ## ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * Questions(#contactInformation)

    # Installation
    ## ${data.installation}
    
    # Usage
    ## ${data.usage}

    # License
    ## ${data.license}

    # Contribution
    ## ${data.contribution}

    # Tests
    ## ${data.tests}

    # Contact Information
    ## Github: ${data.ghUser}
    ## Email: ${data.Email}
  `;
  }
  
  module.exports = generateMarkdown;
  