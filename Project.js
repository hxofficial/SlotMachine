const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositeAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0) {
      console.log("invalid deposit amount,try again");
    } else {
      return numberDepositeAmount;
    }
  }
};
const depositAmount = deposit();
console.log(depositAmount);
