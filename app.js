'use strict';
//----- fibonacci fucntion using recursive -----
// function fib(n){
//     if(n === 0){
//         return 0;
//     } else if(n === 1){
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
//     //recursive
// }

// const length = 20;
// for (let i = 0; i <= length; i++) {
//   console.log(fib(i));
// }


//funtion with Map object
const memo = new Map(); //new map object
memo.set(0, 0); //set 0
memo.set(1, 1); //set 1

function fib(n) {
  if (memo.has(n)) {
    /* validation
    if n = 0 or 1, return as they are
    this is validation for fibonacci formula
    */
    return memo.get(n);
  }

  /* if n >= 2, store the value into map
   */
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value); 
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}

/* the code with Map object can execute code almost 20 times faster
than code with jsut recursive function.
because it can store the calculated value inside the map*/