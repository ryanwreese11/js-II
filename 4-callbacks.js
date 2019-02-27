// *** CALLBACKS *** //

// What datatypes can we pass into a function?

function example(callBack, name) {
    console.log(callBack, name)
    console.log(callBack(name))
}

function helloMachine(name){
  return 'hello ' + name;
}

console.log(helloMachine('Bob Ross'));



example(helloMachine, 'Tim')






//function
function doubler(num){
  return num * 2
}
//array
let nums = [1,2,3,4,5];

function modifier(cb, array){
  for(let i = 0; i < array.length; i++){
    array[i] = cb(nums[i])
  
  }
  return array
}

console.log(modifier(doubler, nums))

function allPeopleAreBob (){
  return 'Bob Ross'
}

let names = ['todd', 'tiny tim', 'helga', 'josh']


console.log(modifier(allPeopleAreBob, names))



//for loop
for(let i = 0; i < nums.length; i++){
  nums[i] = doubler(nums[i])

}

console.log(nums)



// logger();


// What is a callback?

// Can we invoke a callback?

// Why on earth would we do this madness?

//// Dry code

//// Higher order functions that already exist

//// Asynchronous processes

//// Event listeners