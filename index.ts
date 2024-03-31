#! /usr/bin/env node 
let balance: number = 25000;
let pin: number = 8845;
import inquirer from "inquirer";
const pincode = await inquirer.prompt([
  {
    name: "password",
    type: "number",
    message: " PLEASE ENTER ACCOUNT PASSWORD",
  },
]);
if (pincode.password === pin) {
  console.log("CORRECT PASSWORD");
  let operation = await inquirer.prompt([
    {
      name: "option",
      type: "list",
      message: "SELECT ONE OF THE FOLLOWING OPERATION",
      choices: ["Check Balance", "Withdraw", "Fast Cash"],
    },
  ]);
  if (operation.option === "Check Balance") {
    console.log(`Your Current Balance is RS:${balance}`);
  } else if (operation.option === "Withdraw") {
    let withdrawoption = await inquirer.prompt([
      {
        name: "withdrawamount",
        type: "number",
        message: "ENTER AMOUNT FOR WITHDRAW",
      },
    ]);
    if (balance >= withdrawoption.withdrawamount) {
      balance -= withdrawoption.withdrawamount;
      console.log(`Your Remaining Balance Is Rs:${balance}`);
    } else {
      console.log(`INSUFFICIENT BALANCE`);
    }
  } else if (operation.option === "Fast Cash") {
    let fastcashoption = await inquirer.prompt([
      {
        name: "fastcash",
        type: "list",
        message: "select amount",
        choices: ["1000", "5000", "10000", "20000", "30000", "40000", "50000"],
      },
    ]);
    if (fastcashoption.fastcash <= balance) {
      balance -= fastcashoption.fastcash;
      console.log(`Your Remaining Balance Is Rs:${balance}`);
    } else {
      console.log("INSUFFICIENT BALANCE");
    }
  }
} else {
  console.log("INVALID PASSWORD");
}
