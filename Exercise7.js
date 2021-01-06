Calculate sum of squares of all numbers between 1 and 10.

Solution

var sum = null;
for(var a = 1; a <= 10; a++){
  var x = a * a;
  sum = sum + x;
}
console.log(sum);

while-ով

var sum = null;
var a = 0;
while(a < 10){
  a++;
  var x = a * a;
  sum = sum + x;
}
console.log(sum);