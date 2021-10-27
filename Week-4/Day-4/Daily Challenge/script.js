

let beer = parseInt(prompt("How many beers on the wall would you like!"))
let fall = beer

if(isNaN(beer)){
    alert("You didnt enter a number goodbye!")
} 

for (let a = 1 ; beer==0; a++){
    let b = a<=1?"it":"them";

    console.log(`${beer} bottles of beer on the wall`)
    console.log(`${beer} bottles of beer on the wall`)
    console.log(`take ${a} down pass ${b} around.`) 
    beer = beer-a
    
    console.log(`now theres ${beer} bottles of beer on the wall`)
}


// while(beer!=0){
//      console.log(`${beer} bottles of beer on the wall`)
        
//     beer= beer-1
    
// }
