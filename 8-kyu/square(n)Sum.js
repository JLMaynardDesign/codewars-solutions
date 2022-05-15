function squareSum(numbers){
  let output = 0;
 for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i] * numbers[i];
  output += number;
 }
  return output;
}