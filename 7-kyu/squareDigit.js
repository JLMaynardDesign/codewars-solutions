/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

//my solution

const squareDigits = function(num) {
  let parsedNumber = parseFloat(num);
  let i = 0;
  let newNumber = 0;
  while (i < parsedNumber.length) {
    newNumber += Math.sqrt(parsedNumber[i]);
  }
  return newNumber;
};
