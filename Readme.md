$ npm init

$ npm install express

$ npm install --save-dev nodemon //monitor all changes to your application files and automatically restart the server when needed

$ npm install consign //facilitate route management in express.

responsabilites: 
 - server.js = start server;
 - custonExpress.js = config and change express();
 - controllers/ = config routes

 Download Postman to test API

 $ npm install body-parser //convert reqs to read on javascript

 Download MySQL

 $npm install MySQL

 $npm install browserify //to read require() on client-side javascript
 $ browserify static/getData.js -o bundle/getData.js
 or $ npm run getData

 $npm install eslint --save-dev
 $npx eslint --init
 
 How would you like to use ESLint? ...
> To check syntax, find problems, and enforce code style

What type of modules does your project use? ... 
> CommonJS (require/exports)

? Which framework does your project use? ... 
> None of these

? Does your project use TypeScript? »  No

? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node (press i to select Node)

? How would you like to define a style for your project? ... 
> Use a popular style guide

? Which style guide do you want to follow? ...
> Standard: https://github.com/standard/standard 

? What format do you want your config file to be in? ...
> JSON

? Would you like to install them now with npm? »  Yes

$ npx eslint *.js
$ npx eslint *.js --fix

$npm install --save-dev jest
