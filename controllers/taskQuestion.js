const inquirer = require('inquirer');

const questTask = [
    {
        type: 'rawList',
        name: 'task',
        message: 'What would you like to do today?', 
        choices: [
            new inquirer.Separator('=== View Info ==='),
            'View All Employees',
            'View Employees by Manager',
            'View All Roles',
            'View All Departments',
            new inquirer.Separator('=== ADD NEW INFO ==='),
            'Add Employee',
            'Add Role',
            'Add Department',
            new inquirer.Separator('=== UPDATE INFO ==='),
            'Update Employee',
            new inquirer.Separator('=== DELETE INFO ==='),
            'Delete Employee',
            'Delete Role',
            'Delete Department',
            new inquirer.Separator('=== EXIT ==='),
            'Exit Application'
        ],
        pageSize: 13
    }
]

module.exports = questTask;