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

//Function to add an engineer to the team
function addEngineer(){
    inquirer.prompt(engQues)
    .then(function(eresponse) {
    let teamEngineer = new Engineer(eresponse.name, eresponse.id, eresponse.email, eresponse.github);
    console.log(teamEngineer);
    console.log(eresponse.addMember);
    if (eresponse.addMember === "Engineer"){
        addEngineer();
    }
    else if(eresponse.addMember === "Intern"){
        addIntern();
    }
    else {
    }
    });
}

//Function to add an intern to the team
function addIntern() {
    inquirer.prompt(internQues)
    .then(function(iresponse){
        let teamIntern = new Intern(iresponse.name, iresponse.id, iresponse.email, iresponse.school);
        console.log(teamIntern);
        console.log(iresponse.addMember);
        if (iresponse.addMember === "Engineer"){
            addEngineer();
        }
        else if(iresponse.addMember === "Intern"){
            addIntern();
        }
        else {
        }
    });
}

function init(){
    inquirer.prompt(managerQues)
    .then(function(mresponse) {
        let teamManager = new Manager(mresponse.name, mresponse.id, mresponse.email, mresponse.officeNumber);
        console.log(teamManager);
        console.log(mresponse.addMember);
        if (mresponse.addMember === "Engineer"){
            addEngineer();
        }
        else if(mresponse.addMember === "Intern"){
            addIntern();
        }
        else {
        }
    });
}

init();

