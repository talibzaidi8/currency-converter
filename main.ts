import inquirer from "inquirer";

const currency : any = {
  PKR: 280,
  USD: 1,
  EUR: 0.91,
};

let userAnswer = await inquirer.prompt(
  [
    {
      name: "from",
      message: "ënter from currency ",
      type: "list",
      choices: ["PKR", "USD", "EUR"],
    },
    {
        name:'to',
        message:"enter to currency",
        type:'list',
        choices:["PKR", "USD", "EUR"]
    },
    {
        name:'amount',
        message:"enter your amount ",
        type:'number'
    }
  ]

  
);
let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);







