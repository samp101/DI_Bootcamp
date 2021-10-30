
// Here I storing the Div with the Id navBar into a variable
let a = document.getElementById("navBar")


// using the setAttribute method I am changing the "a"s ID attribute to the value socialNetworkNavigation
a.setAttribute("id","socialNetworkNavigation")
console.log(a.getAttribute("id"))


// Here is made a varable of the parent element.
let body = document.querySelector("body")
// Here I created a li element and stored it in a variable
let b = document.createElement("li")

// Selected the ul and stored it in a variable
let ul = document.querySelector("ul")
// I added the new li node which I created in the ul
ul.appendChild(b)

// Then I selected the last li and gave it the texts of logout and append itinto the li node
let lia = ul.lastElementChild;
let text = document.createTextNode("Log out");
lia.append("text")

// Here i wanted to display the text inside of the first and last li
let firstLi = ul.firstElementChild.textContent

let lastLi = ul.lastElementChild.textContent

console.log(firstLi)
console.log(lastLi)


// 0527669100
console.log(body)
console.log()

Exercise 2
