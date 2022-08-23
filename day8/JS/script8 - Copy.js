//Day 8 Notes

//Objects

//let user1 = {}; //Object literal
//let user2 = new object (); //object constructor

//let user3 = {
    //name: "Mehdi",
    //age: 44
//};
//alert(user.name);
//alert(user.age);
//user1.isAdmin = true;
//delete user1.age;

//let user4 = {
    //name: "john",
    //age: 30,
    //"likes birds": true,
//}
// alert(user4["likes birds"]);

// let user5 = {
//     name: "john",
//     age: 30
// };
// let key = prompt ("what do you want to know about the user?", "name");
// alert(user5[key]);

// let fruit = prompt ("which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5
// };
// alert(bag.apple);

// Property value shorthand
// function makeUser (name,age){
//     return {
//         name,
//         age
//     };
// }
// let user5 = makeUser("john",30);
// alert(user5.name);

//Property name limitations
// let obj = {
//     for: 1,
//     let: 2,
//     return:3,
//     class:4,
// };

//Property existenec test: in operator
// let user6 = {};
// alert(user6.noSuchProperty === undefined);

//The for..in loop
// let user7 = {
//     name: "john",
//     age:30
    
// };

// for(let key in user7){
//     alert(key);
//     alert(user7[key]);
// }

//Daily Challenge
// const dog = {
//     name: tortuga,
//     legs:4,
//     "fur color": "Gray with balck spots",
//     speak: function(){alert("woof!")},
//     fetch: function(){alert ("run and fetch the ball!")}
// };
// dog.speak();
// dog.fetch():
// alert(dog["fur color"]);
// const app = document.getElementById("root")
// const header1 = document.createElement("h1");
// header1.textContent = '${dog.name} has ${dog,legs} legs and her fur color is ${dog["furcolor"]}!';
//app.appendChild(header1); 


//The class syntax
// class User{
//     //methods
//     constructor(name){
//         this.name = name;
//     }
//     greeting(){
//         alert("Good Morning" + this.name);
//     }
// }
// let user = new User (" john");
// user.greeting();