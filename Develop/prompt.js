module.exports={
    //questions for manager Info
    manager: [
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your Manager Name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your manager Id?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your Manager Email'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your Manager Office number'
        },
    ],
  employeeChoice : [
        {
            type: 'list',
            name: "teamMember",
            message: 'Which type of team member would you like to add',
            choices: [
                'Engineer',
                'Intern',
                'Done',
            ]
        },
    ],
        engineer : [
            {
                type: 'input',
                name: 'enginnerName',
                message: 'What is your Enginner Name'
            },
            {
                type: 'input',
                name: 'enginnerId',
                message: 'What is your Engineer Id'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is your Enginner Email'
            },
            {
                type: 'input',
                name: 'enginnerGithub',
                message: 'What is your Enginner Github Username'
            },
        ],
    intern : [
        {
            type: 'input',
            name: 'internName',
            message: 'What is your Intern Name'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your Intern Id',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your Intern Email'
        },
        {
            type: 'input',
            name: 'interSchool',
            message: 'What is your Intern School'
        },
    ]
}