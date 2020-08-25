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

//Initializing an Array to push the data of the team
let teamArray = [];
async function init() {
    //using inquirer for the user to answer the questions of manager details to build a team
    const managerAnswers = await inquirer.prompt(prompt.manager);
    //Assigning the answers of the user to the new obj
    const manager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerId,
        managerAnswers.managerEmail,
        managerAnswers.managerOfficeNumber
    );
    //pushing the user input to the array
    teamArray.push(manager);
 //A function add member is called 
    addMember();
}

//function add member
async function addMember() {
//Question for the user to select the list of options
    const choice = await inquirer.prompt(prompt.teamChoice);
//Using the switch case to call the function depending on which the user wants
    switch (choice.employeeChoice) {
        // case Engineer is called if user selects an option engineer
        case 'Engineer':
            console.log("hello");
            await addEngineer();
            break;

        //case Intern is called if user selects an option Intern
        case 'Intern':
            await addIntern();
            break;
        //func buildteam is called if user doesnt want any other members in the team
        default:
            await buildTeam();

    }
}

//function add engineer
async function addEngineer() {
 //using inquirer for the user to answer the questions of engineer details to build a team 
    const engineerAnswers = await inquirer.prompt(prompt.engineer);
    //after getting the response from the user the details of engineer are assigned to a new obj
    const engineer = new Engineer(
        engineerAnswers.engineerName,
        engineerAnswers.engineerId,
        engineerAnswers.engineerEmail,
        engineerAnswers.engineerGithub
    );
    //push the details of the engineer the user entered to build a team
    teamArray.push(engineer);
   //calling the function addMemeber again if the user wants more engineers or interns or if the user is done with building the team
    addMember();
}

async function addIntern() {
    //using inquirer for the user to answer the questions of Intern details to build a team 
    const internAnswers = await inquirer.prompt(prompt.intern);
//after getting the response from the user the details of Intern are assigned to a new obj
    const intern = new Intern(
        internAnswers.internName,
        internAnswers.internId,
        internAnswers.internEmail,
        internAnswers.interSchool
    );
     //push the details of Intern the user entered to build a team
    teamArray.push(intern);
    //calling the function addMemeber again if the user wants more engineers or interns or if the user is done with building the team
    addMember();
}

async function buildTeam() {
  
    try {
        if (!fs.existsSync(OUTPUT_DIR)) {
            // Create 'output' folder if does not exists
            fs.mkdirSync(OUTPUT_DIR, 0744);
            console.log("output folder Created!");
        }
        
        const htmlFile = render(teamArray);
        //Create 'Team.html' file an writes the content of teamArray to bulid a team
        await fs.writeFileSync(outputPath, htmlFile);
        console.log("Team.html Created!!");

        console.log("Success!!Your team is build ,Check your output directory");
    } catch (err) {
        console.log(err);
    }
}

init();

