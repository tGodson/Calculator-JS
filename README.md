# Calculator Js

Every project has its beginning in setting up some basic structure and tooling. You will build a calculator for Math-magicians Inc using create-react-app, a tool built by developers at Facebook to help you build React applications, saving you from time-consuming setup and configuration.

# Project Specification

1. Preparation
- Create a new logic folder inside src and initialize two javascript files there: calculate.js and operate.js.
- Add the big.js package to your project dependencies.
2. Implement the calculate.js module
- It should contain one default method: calculate.
- The calculate method should accept a calculator data object and a button name as arguments.
- The calculator data object should contain three properties: total, next and operation.
- This method should use the buttonName argument to mutate the calculator’s data object and return its modified version. For instance if buttonName == "+/-", it should multiply total and next by -1 to make it negative or positive.
3. Implement the operate.js module
- It should import the big.js module from the corresponding npm package.
- It should implement one default function named operate.
- The operate function should accept numberOne, numberTwo and operation as arguments.
- Using the value of the operation argument, this method should perform a simple math operation. For instance if operation == "-", it should return the result of subtracting the two passed numbers. - - - Remember to wrap the numbers with big.js classes so you can operate on big numbers.
- If the buttonName in calculate.js is equal to any operation (e.g. +, -, x, ÷, % [modifier - turning the number into a percentage based number]), operate.js should be used to calculate the total property.
4. Add calculate.js to the App component
- Import the calculate function.

## Live Link

[Live Demo](https://hidden-headland-79447.herokuapp.com/)

## Built With

- HTML5
- CSS
- Javascript ES6
- React Js

## Getting Started

To get a local copy up and running follow these steps:

### Prerequisites

- npm
- webpack
- create-react-app

### Setup

- Clone the repository by running the code `git clone https://github.com/tGodson/Calculator-JS.git`.
- cd into Calculator-JS folder
- Run `npm install`.
- Run `npm start` from your command line to open your app in the browser.

## Deployment

### Install Github Pages

follow to install the Heroku cli: https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

### Install App on Heroku

In Project directory:\
Run: `heroku create`\
Verify with: `git remote -v`,\
You can then doploy app to heroku with: `git push heroku master`\
Provided you are in the master branch else run:`git push heroku branch-name:master`\

👤 **Tendongze Godson**

- Github: [tGodson](https://github.com/tGodson)
- Twitter: [@tendongze95](https://twitter.com/tendongze95)
- Linkedin: [linkedin](https://www.linkedin.com/in/tendongzegodson)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

[Microverse](www.microverse.org)
