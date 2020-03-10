//**********************DRAW A CHESS BOARD******************//
// let size = 8;
//
// let board = "";
//
// for (let y = 0; y < size; y++){
//   for (let x = 0; x < size; x++){
//     if ((x+y) % 2 === 0){
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }
// console.log(board);
//**************************FUNCTIONS******************//
// function wrapValue(n) {
//   let local = n;
//   return local;
// }
// let wrap1 = wrapValue(4);
// let wrap2 = wrapValue(5);
//
// console.log(wrap1);
// console.log(wrap2);
//**************************FARM INVENTORY******************//
// function printFarmInventory(cows, chickens){
//   let cowString = String(cows);
//   while (cowString.length < 3){
//     cowString = "0" + cowString;
//   }console.log(cowString+" cows")
//
//   let chickenString = String(chickens);
//   while (chickenString.length < 3){
//     chickenString = "0" + chickenString;
//   }console.log(chickenString+" chickens")
// }
//
// let number1 = printFarmInventory(23, 45);
// console.log(number1);

//**************************MIN FUNCTION******************//
// function minimum(a, b){
//   if (a > b){
//     return a;
//   }else {
//     return b;
//   }
// }
// console.log(minimum(4, 8));

//**************************RECURSIVE FUNCTION******************//

// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }
//
// console.log(isEven(45));
// console.log(isEven(34));

//**************************BEAN COUNTING******************//

/*Write a function countBs that takes a string as its only argument and returns a
number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted (rather
than counting only uppercase “B” characters). Rewrite countBs to make use of
this new function */

// function countB(n){
//   let result = 0;
//   for (let i = 0; i < n.length; i++){
//     if (n[i] == "B") result += 1;
//   }
//   console.log(result);
// }
//
// console.log(countB("BBC"));
//
// function countChar(n, k){
//   let result = 0;
//   for (let i = 0; i < n.length; i++){
//     if (n[i] == k) result += 1;
//   }
//   console.log(result);
// }
//
// console.log(countChar("The location of British Embassy in Ankara is so nice", "t"));


//**************************REST PARAMETERS******************//

// function maximum(...numbers){
//   let result = -Infinity;
//   for (let number of numbers){
//     if (number > result) result = number;
//   }
//   return result;
// }
//
// console.log(maximum(5,2,8,34,-34,45,23,78));
