


let div = document.querySelector("div")

div.style.backgroundColor = "blue"

let ul = document.querySelector("ul")

let liA = ul.firstElementChild
let lis = ul.lastElementChild
// Here I made the first li text hidden AMD GAVE THE second li a border 
liA.style.visibility = "hidden"

lis.style.border="2px solid black"

// Here I Selected the whole document and then the body Element in order to style it with a bigger font 

document.body.style.fontSize = "30px"

if(div.style.backgroundColor == "blue"){
    alert(`Hello ${liA.textContent}  and ${lis.textContent} `)
}