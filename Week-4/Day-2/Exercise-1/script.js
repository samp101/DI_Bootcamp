// Exercise 1

function infoAboutMe(){
    console.log("My name is Shmuel Posner")
}

infoAboutMe()

// Part II

// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(`${personName} is ${personAge} Years old. ${personName}s favourite color is ${personFavoriteColor}`)
// }

// infoAboutPerson("Shmuel",28,"Orange")
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// Part III

// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies){
//     console.log(`${personName} is ${personAge} Years old. ${personName}s favourite color is ${personFavoriteColor}`)   
//     for(let a of personHobbies){
//         console.log(`${personName} likes to play ${a}`)
//     }
// }

// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

// Exercise 2

// let userAge = parseInt(prompt("please Enter your age"))

// function checkDriverAge(age){

//     if (age<18){
//         console.log("Sorry, you are too young to drive this car. Powering off")
//     } else if (age==18){
//         console.log("Congratulations on your first year of driving. Enjoy the ride!")
//     } else {
//         console.log("You are old enough to drive, Powering On. Enjoy the ride!")
//     }
// }



// checkDriverAge(10)

// Exercise 3

// function CheckNumber(){
//     for (let a = 0; a<=100; a++){
//         if(a%2==0){
//             console.log(`${a} is an even number`)
//         } else if(a%2!==0){
//             console.log(`${a} is an odd number`)
//         } 
//     }
// }

// CheckNumber()

// Exercise 4

// function tipCalc(meal){
//     if (meal<50){
//         let finalAmount = meal + (.2 * meal);
//         let tip = (meal*.2);
//         console.log(`Your total bill for your meal is $${finalAmount} and the tip cost $${tip}`)
//     } else if (meal>=50 && meal<=200){
//         let finalAmount = meal + (.15 * meal);
//         let tip = (meal*.15);
//         console.log(`Your total bill for your meal is $${finalAmount} and the tip cost $${tip}`)
//     }   else {
//         let finalAmount = meal + (.1 * meal);
//         let tip = (meal*.1);
//         console.log(`Your total bill for your meal is $${finalAmount} and the tip cost $${tip}`)
//     }

// }

// tipCalc(parseInt(prompt("please enter the bill to get your tip")))

// Exercise 5

// divis= 0
// function isDivisible(){
//     for (let a = 1; a<+500; a++ ){
//         if (a%23 == 0){
//         divis = divis + a;
//         console.log(a)

//     } else{
//             continue
//         }
//     }
//     console.log(divis)
// }
// isDivisible()

// function promptIsDivisible(num,range){
//     for (let a = 1; a<=range; a++ ){
//         if (a%num == 0){
//         divis = divis + a;
//         console.log(a)

//     } else{
//             continue
//         }
//     }
//     console.log(divis)
// }

// promptIsDivisible(prompt(),100)


// Exercise 6



// function checkBasket(array){
//     let f = 0
//     let ques = prompt("which Item would you like to check?")
//     for (let a in array){
//         if(ques == a){
//             console.log(`you have ${array[a]} orders of ${ques} in your basket`)
//             break
            
//         }else if (ques !== a){
//             f++       
//         }}
//         if (f>=1){
//             console.log(`You dont have ${ques} in your basket. Would you like to add it?`)
//     }
// }


// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// checkBasket(amazonBasket)

// Exercise 7

// function myBill(){
    
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// let totalShop = 0
// let totalItems = ""
// let shoppingList = ["banana", "orange", "apple","gg"]

// console.log(stock)
//     for (let element of shoppingList){
//         for (let element1 in stock){
//            if (element==element1&&stock[element1]>0){
//                totalShop += prices[element]
//                totalItems += element1 + " & "
//             //    console.log(`We have ${element}s in stock and it costs $${prices[element]}`)
//                 stock[element1]= stock[element1]-1
//             } 
//             // else if(element==element1||stock[element1]<0){
//             //     console.log(`we dont have carry or have ${element} in stock`)
//             //}          
//         }
//     }
//     console.log("Your total shop of " + totalItems+ "will cost you $" + totalShop)
//     console.log(stock)
//     }
// myBill()

// function myBill1(){
    
//     let stock = { 
//         "banana": 6, 
//         "apple": 0,
//         "pear": 12,
//         "orange": 32,
//         "blueberry":1
//     }  
    
//     let prices = {    
//         "banana": 4, 
//         "apple": 2, 
//         "pear": 1,
//         "orange": 1.5,
//         "blueberry":10
//     } 
//     let totalShop = 0
//     let totalItems = ""
//     let shoppingList = ["banana", "orange", "apple","gg"]
    

//     for (let element of shoppingList){
//         for (let element1 in stock){
//             if (element==element1 && stock[element1]>0){
//                 totalShop += prices[element]
//                 totalItems += element1 + " & "
//             console.log(`We have ${element}s in stock and it costs $${prices[element]}`)
//                 stock[element1]= stock[element1]-1
//         } 
//         else if(element==element1||stock[element1]<0){
//             console.log(`we dont have carry or have ${element} in stock`)
//         }          
//     }
// }}
// myBill1()    

//Exercise 8

// function changeEnough(purchase,[a,b,c,d]){
//     a = a*.25
//     b = b*.10
//     c = c*.05
//     d = d*.01
//     let j = a+b+c+d
//      if (purchase<=j){
//         return true
        

//     } else {
//         return false
        
//     } 
// }



// let happy = changeEnough(10,[10,10,10,0])

// if (happy === true){
//     console.log("you can buy it")
// }else{
//     console.log("you cant")
// }

// Exercise 9

// function hotelCost() {
//     let prom;

//     while (true){
//         prom = (prompt("PLease enter how many nights you would like to stay?")
//            if (prom === "number"){
//                break
//            }
//             alert("A number wasnt entered. Please enter a number of days")
     
//     }
//      let totalCost = prom * 140
//      console.log("your total cost of the hotel is $" + totalCost)
 
    
// }

// hotelCost()

// let company;

// while (true) {
//     company = prompt("What the name of the company that developed the javascript language?", "");
//     if (company === 'netscape') {
//         break;
//     }
//     alert("wrong answer");
// }
// alert("correct answer!");