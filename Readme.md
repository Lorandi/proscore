
# Cloud Humans - Algorithm documentation

This repository was created for the Cloud Humans developer selection process.

The application aims to verify which project the professional can be allocated, according to their score.

## The Input
The would-be frontend of this application would ask the Pros for their personal information and then it send to API a payload following this contract:

```JSON
{
  "age": 35,
  "education_level": "high_school",
  "past_experiences": {
    "sales": false,
    "support": true
  },
  "internet_test": {
    "download_speed": 50.4,
    "upload_speed": 40.2
  },
  "writing_score": 0.6,
  "referral_code": "token1234"
}
```

## The output
Considering the data provided above, the application return the following JSON payload:

```JSON
{
    "score": 7,
    "selected_project": "determine_schrodinger_cat_is_alive",
    "eligible_projects": ["determine_schrodinger_cat_is_alive", "support_users_from_xyz", "collect_information_for_xpto"],
    "ineligible_projects": ["calculate_dark_matter_nasa"]
}
```

## How to start it
You will need Nodejs installed on your machine. If is necessary, you can download it here: https://nodejs.dev/
After cloning the repository from GitHub is necessary to install the project's dependencies , through the terminal with the command 
```
npm install
```

and then

```
npm start
```
the terminal should show
```
> nodemon server.js
[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
server at port 3000
``` 

### How to run the code
To use this aplication you will need a program that tests API, like Postman https://www.postman.com/

 - 1 - `http://localhost:3000/`
 - 2 - method POST
 - 3 - select Body
 - 4 - select raw
 - 5 - select JSON
 - 6 - write (or copy from above) the frontend payload
 - 7 - click SEND
 - 8 - here is the response object

<img src="./public/image/postman.jpg" alt="postman"/>

You can check the results here https://documenter.getpostman.com/view/16691708/TzsWtpwK#c0f6ace1-293b-4b96-8a02-970a36f22864

## Main technical decisions
For this code I use Nodejs, Express, Nodemon, Jest, ESLint. This was my first backend project and had to learn fast how to build a server, create app with method POST and run tests. I tried to keep the code simple, organized and clean to be easier to read and mantain.

## Comments about project
The files that I worked harder are in folder src. Here is a brief explanation of what each one does.

 - **folder validateData** - The purpose of this files is to validate the data that arrives from the frontend and verify if it is in agreement with what the application needs. If any data is in disagreement, a message appears in the terminal (console.log("") and also in the program that is running the API.

 - **projectData.js** - This file stores the project data and establishes a sort from the one that demands the highest scorer to the one with the lowest demand. This sort was created to facilitate the use of information in other parts of the application.

 - **folder calcProject** - The purpose of this files is to calculate the score of the Pros, receiving the information that came from the frontend after having been validated by **validateData.js**

 - **proProject.js** - This file serves to allocate the Pros in the projects that are in accordance with their score. It uses the return from both **projectsData.js** and **calcProScore.js**

 - **proResults.js** -This is the application's main file because it receives the return from all the others and returns the JSON with the result to be sent by POST.

## How to test 
To check out if the code is working properly, you need to run Jest
```
npm run test
```
To learn more about Jest https://jestjs.io/

## How to find and fix problems
ESLint statically analyzes the code to quickly find problems.
Go to the folder you want to analize and run ESLint.
```
npm run eslint
```  
and to fix the problems
```
npm run eslint:fix
```
To learn more about ESLint https://eslint.org/






### Pro Application


**project** which the **Pro**



