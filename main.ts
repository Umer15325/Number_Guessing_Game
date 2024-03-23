#! /usr/bin/env node

// NUMBER GUESSING GAME



// Modules
import inquirer from "inquirer";
import chalk from "chalk";

// CODE 

const random_no= Math.floor(Math.random() * 8 + 1) ;

const guessed_no= await inquirer.prompt([
{
    message: chalk.magentaBright.underline("Guess a number between 1 & 8:") + " " ,
    type: "number",
    name : "ans",
}
])


if(random_no===guessed_no.ans)
{
    console.log(chalk.greenBright("CONGRATULATIONS! You guessed a right number."))
}
else
{
    console.log(chalk.redBright("Oops! Better luck next time."))
}
