# Team-Profile-Generator
# Unit 10 OOP Homework: Template Engine - Employee Summary
 In this homework assignment, The challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable,It should be ensured that all unit tests pass.


## Instructions

The Application is to build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

# Demo
![Alt Text](https://github.com/PratyushaRaghupatruni/Team-Profile-Generator/blob/master/Images/teamprofile.gif)

# Test Demo
![Alt Text](https://github.com/PratyushaRaghupatruni/Team-Profile-Generator/blob/master/Images/teamprofileTest.gif)

* Used the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* The app will run as a Node CLI to gather information about each employee.

# Installation 

  * In the `Develop` folder, there is a `package.json`, so make sure to 
<pre><code>npm install</code></pre>

  * Run the tests at any time with 
 <pre><code>npm run test</code></pre>
   
  * The Application will be invoked with the following Command
  <pre><code>node app</code></app>


### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.






