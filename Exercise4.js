Calculate sum of all numbers between 1 and 10 (using loop).

Solution

var sum = null;
for(i = 1; i <= 10; i++){
  sum = sum + i;
}
console.log(sum);

while-ով

var sum = null;
var a = 0;
while(a < 10){
  a++;
  sum = sum + a;
}
console.log(sum);