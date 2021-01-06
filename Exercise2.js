Print all number between 1 and 10 except 6.

Solution

Սա for-ով

for(var i = 1; i <= 10; i++){
  if(i == 6){
    continue;
  }
  console.log(i);
}

Սա While-ով

var a = 0;
while (a < 10){
  a++;
  if(a == 6){continue};
  console.log(a);
}