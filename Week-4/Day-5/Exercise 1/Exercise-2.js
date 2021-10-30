// textContent = Property

// Here I will store the first ul element into a variable using the querySelector which will get the first ul in the html
let ulFirst = document.getElementsByClassName("list")

ulFirst[0].lastElementChild.textContent= "Richard"
ulFirst[0].lastElementChild.innerHTML="Shmuel"
ulFirst[0].firstElementChild.innerHTML="Shmuel"

let liAddition = document.createElement("li")
let liAddition2 = document.createElement("li")

ulFirst[0].appendChild(liAddition).textContent="Hello Students"

ulFirst[1].appendChild(liAddition2).textContent="Hello Students"

// ulFirst[1].getElementById("li2-2").textContent= " " 
// Why doesnt this work
document.getElementById("li2-2").textContent= " " 


// Bonus
ulFirst[0].classList.add("Student_list","University", "Attendance")
ulFirst[1].classList.add("Student_list")


