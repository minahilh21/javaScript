//example 1
let promise1 = new Promise(function(myResolve, myReject) {
  let x = 0;
// The producing code (this may take some time)
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
promise1.then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);

//example 2
var age = 25;
const promise2 = new Promise( (resolutionFunc,rejectionFunc) => {
  resolutionFunc(age);
});
// At this point, "promise2" is already settled.
promise2.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

//example 3
//Promise.resolve() method in JS returns a Promise object that is resolved with a given value
const promise3 = Promise.resolve(123);
promise3.then((val)=> {
  console.log(val);
});
//example 4
const promise4 = new Promise((resolve, reject) => {
  throw 'Uh-oh!';
});
promise4.then((val)=>{
  console.log('from then!');
}).catch((error) => {
  console.error(error);
}).finally((val)=>{
  console.log('from finally!');
});
//ASYNC AWAIT
// async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise
//example 5
async function function1() {
  return "Hello";
}
//THIS ASYNC IS SAME AS 
// function function1() {
//   return Promise.resolve("Hello");
// } 
function1().then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);
//example 6
const getData = async() => {
  var data = "Hello World..";
  return data;
}

getData().then(data => console.log(data));
//The keyword await before a function makes the function wait for a promise:
//The await keyword can only be used inside an async function.
//example 7
async function asyncFunction() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("Hello World!!");
  });
 console.log(await myPromise);
}
asyncFunction();

