const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

//Manager questions
const managerQues = [
    {
        type: "input",
        name: "name",
        message: "What's your Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What's your Manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your Manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What's your Manager's officeNumber?"
    },
    {
        type: "list",
        name: "addMember",
        message: "Which team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "No more members to add"
        ]
    }
];

//Engineer ques
const engQues = [
    {
        type: "input",
        name: "name",
        message: "What's your Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What's your Engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your Engineer's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What's your engineer's github username?"
    },
    {
        type: "list",
        name: "addMember",
        message: "Which team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "No more members to add"
        ]
    }
];

//Intern ques
const internQues = [
    {
        type: "input",
        name: "name",
        message: "What's your Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What's your Intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your Intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What is your Intern's school?"
    },
    {
        type: "list",
        name: "addMember",
        message: "Which team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "No more members to add"
        ]
    }
];


