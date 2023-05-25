//In Asynchronous ,Second Task do not wait to finish first Task
// console.log("code execute:");
// setTimeout(() => {
// console.log("Bittu kumar");
// }, 2000);
// console.log("kumar Bittu");

//let a = 10;
//let b = 0;
//setTimeout(() => {
//  b = 20;
//}, 2000);
//console.log(a + b);

//o/p 10  Drawback

// let a = 20;
// let b = 0;
// //promises
// let waitingData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30); //we can pass array number or object
//   }, 2000);
// });
// waitingData.then(data => {
//   //then means phir
//   console.log(a + data);
// });