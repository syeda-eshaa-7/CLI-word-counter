#!/usr/bin/env node

import inquirer from "inquirer"

let answer = await inquirer.prompt
(
    [
        {
            name : "counter",
            type: "input",
            message : "enter a sentence to count words"

        }
    ]
);
let words = answer.counter.split(" ");
console.log(`the word count is ${words.length} `);
