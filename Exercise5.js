Calculate sum of all numbers between 1 and 10 except 8.

Solution

var sum = null;
for(i = 1; i <=10; i++){
  if(i == 8){ continue; }
  sum = sum + i;
}
console.log(sum);

while-ով

var sum = null;
var a = 0;
while(a < 10){
  a++;
  if(a == 8){continue};
  sum = sum + a;
}
console.log(sum);