(***) Enter a number. Find the difference between its biggest and smallest digits.

Solution

function difference(number){
  let str = number + '';
  let max = 0;
  let min = 9;
  let eachDigit;
  for(let x = 0; x < str.length; x++){
    eachDigit = number % 10;
    number = (number - eachDigit) / 10;
    if(eachDigit > max){
      max = eachDigit;
    }
    if(eachDigit < min){
      min = eachDigit;
    }
  }
  return max - min;
}
console.log(difference(4593653))