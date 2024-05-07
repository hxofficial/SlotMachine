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

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3) : ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("invalid number of lines,try again");
    } else {
      return numberOflines;
    }
  }
};

const numberOfLines = getNumberOfLines();
