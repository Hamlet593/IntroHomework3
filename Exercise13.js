let n = 15;
for(let i = 0; i < n; i++){
  let k = '';
  for(let j = 0; j < n; j++){
    if(i === j || i + j === n - 1 || i === 0 || i === n - 1 || j === 0 || j === n - 1){
      k += '*';
    }
    else{
      k += ' ';
    }
  }
  console.log(k)
}