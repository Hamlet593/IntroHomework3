Insert a digit and a number. Check whether the number contains that digit or not.

Solution

function checkDigit(digit, number){
  let loop = number.toString();
  for(let i = 0; i < loop.length; i++){
    let lastDigit = number % 10;
    number = (number - lastDigit) / 10;
    if(digit === lastDigit){
      return 'yes';
    }
    console.log(lastDigit)
  }
  return 'no'
}
console.log(checkDigit(4, 45689))

կամ 

function checkDigit(digit, number){
  let loop = number.toString();
  for(let i = 0; i < loop.length; i++){
    if((Number(loop[i])) === digit){
      return 'yes'
    }
  }
  return 'no'
}
console.log(checkDigit(4, 45689))