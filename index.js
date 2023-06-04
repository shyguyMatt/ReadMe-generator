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
            // should include instructions for installation
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Enter instructions for the use of your project: '
            // should include instructions for use
        },
        {
            type: 'input',
            name: 'License',
            message: 'Please select from the list the licence you would like to use: '
            // should add a badge
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Enter instructions for how others can contribute to your project: '
            // should add information for contributing
        },        {
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
        },        {
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
`## Table of Contents
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
${usrname}
${email}`,
        function(err) {
            if (err) throw err;
            console.log('file created!');
        });
        // add table of contents with links
    }
    );