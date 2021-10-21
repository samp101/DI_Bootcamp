
// Exercise 1

let x = 5;
let y = 2;


if(x>y){
    console.log(x + " is greater than  " + y)
    } else if(x == y){
        console.log(x + " is equal to " + y)
    }else{
        console.log("Y is bigger than X")
    }

// Exercise 2

let newDog = "Chihuahua";


console.log(newDog.length)

console.log(newDog.toUpperCase) 
console.log(newDog.toLowerCase)

if(newDog=="Chihuahua"){
    console.log("I love Chihuahuas! Its my favourite dog breed")
    } else{
        console.log("I dont care I perfer cats")
    }

// Exercise 3

let userNumber = parseInt(prompt("Please choose a number "));

if(userNumber%2 == 2%1){ 
    console.log(userNumber + " is an even number")
}   else{
    console.log( userNumber + " is an odd number")
}

// Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

if(users.length === 0){
    console.log("no one is online.")
} else if( users.length===1){
    console.log(users[0] + " is online")
}else if( users.length === 2){
    console.log(users[0] +", " + users[1] + " are online")
}else if( users.length >= 3 ){
    console.log(users[0] +", "+ users[1] + " and " + (users.length-2) +" other users are online")
}