const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const prompt = require('./prompt');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');
const Choice = require('inquirer/lib/objects/choice');
const { employeeChoice } = require('./prompt');

let teamArray = [];
async function init() {
    const managerAnswers = await inquirer.prompt(prompt.manager);
    const manager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerId,
        managerAnswers.managerEmail,
        managerAnswers.managerOfficeNumber
    );
    teamArray.push(manager);
    console.log(teamArray);
    addMember();
}

async function addMember() {
    const choice = await inquirer.prompt(prompt.teamChoice);
    console.log(choice.employeeChoice);
    switch (choice.employeeChoice) {
        case 'Engineer':
            console.log("hello");
            await addEngineer();
            break;

        case 'Intern':
            await addIntern();
            break;

        default:
            await buildTeam();

    }
}

async function addEngineer() {
    const engineerAnswers = await inquirer.prompt(prompt.engineer);
    const engineer = new Engineer(
        engineerAnswers.engineerName,
        engineerAnswers.engineerId,
        engineerAnswers.engineerEmail,
        engineerAnswers.engineerGithub
    );
    teamArray.push(engineer);
    console.log(teamArray);
    addMember();

}

async function addIntern() {
    const internAnswers = await inquirer.prompt(prompt.intern);
    const intern = new Intern(
        internAnswers.internName,
        internAnswers.internId,
        internAnswers.internEmail,
        internAnswers.interSchool
    );
    teamArray.push(intern);
    console.log(teamArray);
    addMember();

}
async function buildTeam() {
    console.log("Success!!Your team is build");
    try {
        if (!fs.existsSync(OUTPUT_DIR)) {
            // Create 'output' folder if does not exists
            fs.mkdirSync(OUTPUT_DIR, 0744);
            console.log("output folder Created!");
        }

        const htmlFile = render(teamArray);
        await fs.writeFileSync(outputPath, htmlFile);
        console.log("Successfully wrote to team.html");
    } catch (err) {
        console.log(err);
    }
}

init();

