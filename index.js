const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'Enter the title for your project: '
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter a description for the project: '
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Enter instructions for how to install the project: '
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Enter instructions for the use of your project: '
        },
        {
            type: 'list',
            choices: ['MIT_License', 'GNU_Public_License_2.0', 'Apache_License_2.0', 'GNU_Public_License_3.0'],
            name: 'License',
            message: 'Please select from the list the licence you would like to use: '
            // should add a badge
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Enter instructions for how others can contribute to your project: '
        },        
        {
            type: 'input',
            name: 'Tests',
            message: 'Enter the tests to be used with your project: '
        },
        {
            type: 'input',
            name: 'UsrName',
            message: 'Enter a github username where questions can be submitted: '
            // should inclue github username and a link to github
            // should also include an email address
        },        
        {
            type: 'input',
            name: 'Email',
            message: 'Enter an email where questions can be submitted: '
        },
    ])
    .then((response) => {
        console.log('createing file');

        const {
            Title: title,
            Description: desc,
            Installation: install,
            Usage: usage,
            License: licence,
            Contributing: contribute,
            Tests: test,
            UsrName: usrname,
            Email: email} = response;

        fs.writeFile('GeneratedReadMe/README.md',
`[![License](https://img.shields.io/badge/License-${licence}-blue.svg)](https://opensource.org/licenses/${licence})
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# ${title}
## Description
${desc}
## Installation
${install}
## Usage
${usage}
## License
${licence}
## Contributing
${contribute}
## Tests
${test}
## Questions
[${usrname}](https://github.com/${usrname})\n
you can reach me by email here: ${email}`,
        function(err) {
            if (err) throw err;
            console.log('file created!');
        });
        // add table of contents with links
    }
    );