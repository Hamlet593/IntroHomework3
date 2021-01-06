Write a program to print X star pattern series using loop.

Solution

let n = 5;
for(let i = 0; i < n; i++){
  let k = '';
  for(let j = 0; j < n; j++){
    if(i === j || i + j === n - 1){
      k += '*';
    }
    else{
      k += ' ';
    }
  }
  console.log(k)
}