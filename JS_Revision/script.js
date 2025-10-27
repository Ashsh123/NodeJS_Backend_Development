//Fundamental of JavaScript
// Arrays and objects
// Function Return
// Async JS coding

// In Js, array is a collection of data types.
let arr = [1,2,3,4,true,[1,2,3,4],{a:"ashish",b:"bobby",c:"chandu",d:"duggu"},function(){}];
// foreach, map, filter, find, indexOf
// 1
// arr.forEach(function(val){
//    console.log(typeof(val));
// })

// this is the example of function statement
// function(val){
//    console.log(typeof(val));
// }

// 2
// arr.forEach(function(val){
//     if(typeof(val)=='number'){
//         console.log(val);
//     }
// })

// 3
// arr.forEach(function(val){
//     if(typeof(val)=='number'){
//         arr[val-1] = val + 3;
//     }
// })
// console.log(arr);


// map, filter, find, indexOf

// map : it doesnot change original array and returns a new array. Similar length to the original array.
// It confirm the changes of original array and return the changed values in the new array.


// arr.map((val)=>{
//    return "ashish";
// }) //=> output empty because it returns a new array and you have to store it.
// Note : arrow function--- 
// (val)=>{
//    return "ashish";
// } 


//  let newArr = arr.map((val)=>{
//    return "ashish";
// }) 
// console.log(newArr);


// filter, find, indexOf

// filter : It filters the array according to the condition. Return the value in the new array

// let newArr2 = arr.filter((val)=>{
//   if(typeof(val)=='number')return true; // which condition is true then it returns that value.
// })
// console.log(newArr2);




// find, indexOf

// find : return the first true value
// let findValue = arr.find((val)=>{
//     if(typeof(val)=='function'){
//         return true;
    // } //if the condition is not matched then the value is default "undefined"
// })
// console.log(findValue);




// indexOf : return output if the condition is true then return 1 &  if the condition is false then returns -1





// objects -> objects are the key value pairs
// ex1: {} -> blank object
// ex2: {a:"ashish"} => {key:value} -> object

// let obj1 = {
//     key:"value"
// }
// console.log(obj1.key);


let obj2 = {
 a:[1,2,3,4],
 b:true,
 c:'a',
 d:[12,true,['a','b','c']],
 e:function(){
    console.log("I'm a functional statement");
 },
 f:()=>{
    console.log("I'm an arrow function");
 },
}

// console.log(obj2);
// console.log(obj2.e);
// console.log(obj2.e()); // function doesnot return anything then its returns undefined

// console.log(obj2['f()']);
// console.log(obj2['f']());

// obj2.a = false;
// obj2["b"] = [1,2,2,1];
// console.log(obj2);


// Object.freeze(obj2); //This method stops the updation in object
 // obj2.a = false; //this does'nt update the object
// obj2["b"] = [1,2,2,1];
// console.log(obj2);





// Function : In JS, Function is an object.
//  method console.dir(func_name);
// no. of argument = function length

// function f(a,b ,c,d){ // length = 4;

// }
// console.log(f.length);
// function f2(){
//    return ashish;
// }
// let ans = f2();
// console.log(f2());





// Async JS
// Jo bhi code async nature ka ho, usey side stack me bhej do and agle code ko chlao jo v sync nature ka ho, jb v saara sync code chal jaye, tb check kro ki async code completehua he ya nahi and agr wo complete huw ho to usey main stack me laao and chala do.

// var blob = await fetch(`https://randomuser.me/api/`);
// var res = await blob.json();
// console.log(res);


// async function f3() {
//    var blob = await fetch(`https://randomuser.me/api/`);//this returns a promise(json format)
//    var ans = await blob.json(); // json() : convert a json into an object
// console.log(ans);
// console.log(async.results[0].name);
// }
// f3();











