#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let array: string[] = []
for (let index = 0; index < array.length; index++) {
  console.log(`${index + 1}. ${array[index]}`);
}

let personName = await inquirer.prompt(
  {
    name: "Username",
    type: "input",
    message: "Enter your name",
  }
)

console.log(chalk.blue(` -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
    ${personName.Username}!! Welcome to my Todo List
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`))
let condition = true
while (condition) {
  

let ans = await inquirer.prompt(
  {
  name: "Select",
  type: "list",
  message: "Select an Operation:",
  choices: ["add", "update", "view", "delete"],
}
)
if(ans.Select === "add"){
let addTodo = await inquirer.prompt(
  {
    name: "todo",
    type: "input",
    message: "Add item"
  }
);
array.push(addTodo.todo)

}
else if(ans.Select === "update"){
  let updateTodo = await inquirer.prompt({
    name: "updatetodo",
    type: "list",
    message: "Select item for update",
    choices: array
  });


  let addTodo = await inquirer.prompt(
    {
      name: "todo",
      type: "input",
      message: "Add item"
    })
let newTodo = array.filter(val => val !== updateTodo.updatetodo )
array = [...newTodo, addTodo.todo]

}
else if(ans.Select === "view"){
  for (let index = 0; index < array.length; index++) {
    console.log(`${index + 1}. ${array[index]}`);
  }
  
}
else if(ans.Select === "delete"){
  let deleteTodo = await inquirer.prompt({
    name: "deleteTodo",
    type: "list",
    message: "Select item for delete",
    choices: array
  });
  let newTodo = array.filter(val => val !== deleteTodo.deleteTodo )
array = [...newTodo]
}


let repeatanswer = await inquirer.prompt({
  name: "restart",
  type: "list",
  message: "Do you want to continue?",
  choices: ["Yes","No"]
  
})
if(repeatanswer.restart === "No"){
  condition = false;
}
}

console.log(chalk.blue(`\n.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.
!! Thanks ${personName.Username} for Playing this Game !!
          
.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.`))
