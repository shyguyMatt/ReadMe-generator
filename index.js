const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: ''
        },
        {
            type: 'input',
            name: 'Description',
            message: ''
        },
        {
            type: 'input',
            name: 'Installation',
            message: ''
            // should include instructions for installation
        },
        {
            type: 'input',
            name: 'Usage',
            message: ''
            // should include instructions for use
        },
        {
            type: 'input',
            name: 'License',
            message: ''
            // should add a badge
        },
        {
            type: 'input',
            name: 'Contributing',
            message: ''
            // should add information for contributing
        },        {
            type: 'input',
            name: 'Tests',
            message: ''
        },
        {
            type: 'input',
            name: 'Questions',
            message: ''
            // should inclue github username and a link to github
            // should also include an email address
        },
    ])
    .then((response) =>
        console.log(response.confirmation)

        // add table of contents with links
    )