const inquirer = require('inquirer');

const Choice = require('inquirer/lib/objects/choice');

const Choices = require('inquirer/lib/objects/choices');



function getUserInput(){
   return inquirer.prompt([
        {
            type: 'input'
            message: 'Please input your GitHub UserName'
            name: 'Username'

        }
        {
            type: 'list'
            message: 'Please choose your favorite color'
            name: 'color'
            Choices: [
                {
                    name: 'Red'
                    value: 'Red'
                },
                {
                    name: 'Blue'
                    value: 'Blue'
                },
            ]
        }
        
    ])
}

async function main() {
    const {username, color} = await getUserInput();
    console.log(username, color);
}

main(); 

const response = await getUserInput();
console.log(response)

