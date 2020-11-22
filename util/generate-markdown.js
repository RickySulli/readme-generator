// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # Project Title
    ${data.title}
    ${data.licenseBadge}

    # Description
    ${data.description}

    #Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#installation)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * Questions(#contactInformation)

    # installation
    ${data.installation}
    
    # usage
    ${data.usage}

    # license
    ${data.license}

    # contribution
    ${data.contribution}

    # tests
    ${data.tests}

    # contactInformation
    Github: ${data.ghUser}
    Email: ${data.Email}
  `;
  }
  
  module.exports = generateMarkdown;
  