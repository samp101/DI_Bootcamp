

// let language = prompt("What language do you speak?").toLowerCase()


// switch(language){

//     case "french":
//        console.log("bonjour");
//        break;

//     case "english":
//         console.log("Hello");
        
//         break;
    
//     case "hebrew":
//         console.log("Shalom")
        
//         break;
    
 
 
// //     default:

// //         console.log("01110011 01101111 01110010 01110010 01111001")
        
// //         break;


// // }

// // exercise 2

// let grade = parseint(prompt("Please enter your grade"));

// switch(grade){

//     case (grade>90):
// //         console.log("A")

// //         break;

    
// //     case grade>80 && grade<=90:
// //         console.log("B")

// //         break;
    
    
// //     case grade>=70 && grade<=80:
// //         console.log("C")

// //         break;

// //     default:
// //         console.log("D")
// //         break;




// // }

    
// let grade = parseInt(prompt("please enter your grade"))

// if (grade > 90){
//     console.log("A")
// } else if (grade>80 && grade <=90) {
//     console.log("B")
// }else if (grade>=70 && grade<=80){
//     console.log("c")
// }else {
//     console.log("D")
// }

// exercise 3

let verb = prompt("please enter a verb.")

    if (verb.length>= 3 && !verb.includes("ing")){
        console.log(verb+"ing")    
                
    } else if(verb.length>=3 && verb.includes("ing")){
        console.log(verb+"ly")
    }else if (verb.length<3){
        console.log(verb)

    }

