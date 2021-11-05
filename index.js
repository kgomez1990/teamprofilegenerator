const inquirer = require("inquirer")

const fs = require("fs")
const path = require("path")
const render = require("./util/generateHtml")

const Intern = require("./lib/intern")

const Engineer = require("./lib/engineer")

const Employee = require("./lib/employee")
const Manager = require("./lib/manager")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const team = [];
const idArray = [];
const outputPath = path.join(OUTPUT_DIR, "team.html");

function init () {
    promptUser()
}

function promptUser () {
    return inquirer.prompt([
        {
            type: "input",
            message: "Manager Name",
            name: "mgrName"
        },
        {
            type: "input",
            message: "Manager Employee ID",
            name: "mgrId"
        },
        {
            type: "input",
            message: "Manager Email",
            name: "mgrEmail"
        },
        {
            type: "input",
            message: "Manager Office Number",
            name: "mgrOffice Num"
        },
    ]).then((response) => {
        newManager = new Manager(response.mgrId,response.mgrName,response.mgrEmail,response.mgrOfficeNum);

        team.push(newManager);
        idArray.push(response.mgrId);
        askToAdd()
    })
}

function askToAdd () {
    return inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do",
            choices: ["Add Engineer", "Add Intern", "Done"],
            name: "do"
        }
    ]).then((response) => {
        if (response.do === "Add Engineer") {
            addEngineer()
        }
        if (response.do === "Add Intern") {
            addIntern()
        }
        if (response.do === "Done") {
            writeToFile()
        }
    })
}

function addEngineer (id, name, email, github) {
    this.getEngineer = () => {
        return inquirer.prompt([{
            type: "input",
            message: "Engineer Name",
            name: "engName"
        },
        {
            type: "input",
            message: "Engineer ID",
            name: "engId",
            validate: data => {
                const a = data.match(/^[1-9]\d*$/);
                if (a) {
                    if (idArray.includes(data)) {
                        return `The ID is already in use. Please choose a different ID.`
                    } else {
                        return true
                    }
                }
                return `ID should be greater than zero.`
            }
        },
        {
            type: "input",
            message: "Engineer Email",
            name: "engEmail"
        },
        {
            type: "input",
            message: "Engineer Username",
            name: "engGithub"
        },
    ]).then((response) => {
        newEngineer = new Engineer(response.engId,response.engName,response.engEmail,response.engGithub);
        team.push(newEngineer)
        idArray.push(response.engId)
    })
    }
    this.getEngineer().then(askToAdd)
}

function addIntern () {
    let newIntern;
    this.getIntern = () => {
        return inquirer.prompt([{
            type: "input",
            message: "Intern Name",
            name: "intName"
        },
        {
            type: "input",
            message: "Intern ID",
            name: "intId",
            validate: data => {
                const a = data.match(/^[1-9]\d*$/);
                if (a) {
                    if (idArray.includes(data)) {
                        return `The ID is already in use. Please choose a different ID.`
                    } else {
                        return true
                    }
                }
                return `ID should be greater than zero.`
            }
        },
        {
            type: "input",
            message: "Intern Email",
            name: "intEmail"
        },
        {
            type: "input",
            message: "Intern School",
            name: "intGithub"
        },
    ]).then((response) => {
        newEngineer = new Intern(response.intId,response.intName,response.intEmail,response.intGithub);
        team.push(newIntern)
        idArray.push(response.intId)
    })
    }
    this.getIntern().then(askToAdd)
}

function writeToFile (response) {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8")
}

init()

