// *** OBJECTS *** //

// How can we store related pieces of data?
var name = 'Beth';
var hair = 'blonde';
var email = 'beth@dm.com';
var password = '$ecret';

    //keyvalue pairs
  //propoerty :value  

let user = {
    name: name,
    hair: hair,
    email: email,
    password: password

}
console.log(user.name)

// Would an array work?

// What is an object? What syntax does it use?

// What can we keep in an object?

let newObj = {
    fisrt: true,
    second: null,
    third: undefined,
    fourth: 'Tim Allen',
    fifth: 2,
    sixth: {name: 'Bob Ross'},
    seventh: [1,2,3,],
    eighth: function(){
        return 5
    }
}

console.log(newObj.sixth.name)
// How can we access the items in an object?

// How can we add more data to an object?

newObj.bestMan = 'Best Man';

console.log(newObj)

let thing = newObj.eighth()

console.log(thing)


// METHODS //

// What are functions that are stored in objects called? What syntax do they use?

// How do we write them?

// How do we invoke them?




// NESTED DATA //

// What if we have arrays and objects inside of each other???
//// Simple data types
//// Objects
//// Methods on objects
//// Using a for loop

let myData = {
    name: 'Bob Ross',
    coolThings: ['rain dancing', 'happy clouds', 'giving out friends'],
    hair: 'bad ass'
}
console.log(myData.coolThings[1])
for(let i = 0; i < myData.coolThings.length; i++){
    console.log(myData.coolThings[i])
    myData.coolThings[i] = 'smiling'
}
console.log(myData.coolThings)