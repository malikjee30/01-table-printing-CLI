#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcom to GIAIC");
let mytable = true;
// our full code will be within while loop
while (mytable) {
    let myInput = await inquirer.prompt({
        type: "number",
        name: "num",
        message: "Enter your Number"
    });
    let myNumber = myInput.num;
    // console.log(myNumber);
    if (myNumber) {
        console.log(`Here is the table of ${myNumber}\n`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${myNumber} x ${i} = ${myNumber * i}`);
        }
    }
    else {
        console.log('Enter a input in numerical form');
    }
    // asking user if he wants to print table again
    let againPrint = await inquirer.prompt({
        type: 'confirm',
        name: 'askUser',
        message: 'Do you want to print another Table?',
        default: 'false'
    });
    if (againPrint.askUser == false) {
        mytable = false;
        console.log('\n Thank you for using this Project!');
    }
}
