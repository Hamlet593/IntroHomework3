Calculate sum of all odd numbers between 1 and 10.

Solution

var sum = null;
for(i = 1; i <=10; i++){
  if(i % 2 !== 0){
    sum = sum + i;
  }
}
console.log(sum);

while-ով

var sum = null;
var a = 0;
while(a < 10){
  a++;
  if(a % 2 !== 0){
  sum = sum + a;
  }
}
console.log(sum);