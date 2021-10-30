






let vv = document.body
vv.style.background = "pink"
let h1s = document.getElementById("hh")
h1s.style.background = "red"
h1s.style.fontSize = "30px"
h1s.style.color = "pink"
h1s.style.margin = "50px"


let Div = document.getElementById("divv")
console.log(document)

let Div2 = document.getElementsByClassName("classs")

let ull = document.getElementById("ul-id")
let ull2 = document.getElementsByClassName("ul-class")
console.log(Div)
Div.style.background = "red"
console.log(Div2)
for(let i = 0;i<Div2.length;i++){
    let current = Div2[i]
    current.style.background = "green"

}

// ull.style.background = "yellow"
// ull2