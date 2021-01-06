For every number between 1 and 12 log into console name of the season of corresponding month

Solution

for(var a = 1; a <= 12; a++){
  for(var b = 1; b <= 2; b++){
    if(a == b){
    console.log(b + "winter");
      }
  }
  for(var c = 3; c <= 5; c++){
    if(a == c){
    console.log(c + "spring");
      }
  }
  for(var d = 6; d <= 8; d++){
    if(a == d){
    console.log(d + "summer");
      }
  }
  for(var e = 9; e <= 11; e++){
    if(a == e){
    console.log(d + "autumn");
    }
  }
  for(var f = 12; f <= 12; f++){
    if(a == f){
      console.log(f + "winter");
    }
  }
}

switch-ով

for (var a = 1; a <= 12; a++){
  switch(a){
    case 1:
      console.log("winter " + a);
      break;
    case 2:
      console.log("winter " + a);
      break;
    case 3:
      console.log("spring " + a);
      break;
    case 4:
      console.log("spring " + a);
      break;
    case 5:
      console.log("spring " + a);
      break;
    case 6:
      console.log("summer " + a);
      break;
    case 7:
      console.log("summer " + a);
      break;
    case 8:
      console.log("summer " + a);
      break;
    case 9:
      console.log("autumn " + a);
      break;
    case 10:
      console.log("autumn " + a);
      break;
    case 11:
      console.log("autumn " + a);
      break;
    case 12:
      console.log("winter " + a);
      break;
  }
}

while-ով

var a = 0;
while(a < 12){
  a++;
  if(a > 0 && a < 3){
    console.log("winter " + a);
  }
  else if(a > 2 && a < 6){
    console.log("spring " + a);
  }
  else if(a > 5 && a < 9){
    console.log("summer " + a);
  }
  else if(a > 8 && a <12){
    console.log("autumn " + a)
  }
  else{console.log("winter " + a)}
}