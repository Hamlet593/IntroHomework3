Print all even number between 1 and 10.

Solution

for(var i = 1; i <= 10; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

While-ով

var a = 0;
while(a < 10){
  a++;
  if(a % 2 == 0) {
  console.log(a);
    }
}