

let sentence = "This dinner is not that bad! You cook well"
let wordNot = "not"
let wordBad = "bad"

// if (sentence.includes(wordNot&&wordBad)){
//     let a = sentence.substr(sentence.indexOf(wordNot),sentence.indexOf(wordBad)+3-sentence.indexOf(wordNot)) 
//     let b = sentence.replace(a,"good")
//     console.log(b)
// } else {
//    console.log("good")
// }

if (sentence.indexOf(wordNot) < sentence.indexOf(wordBad)){
    let a = sentence.substr(sentence.indexOf(wordNot),sentence.indexOf(wordBad)+3-sentence.indexOf(wordNot)) 
    let b = sentence.replace(a,"good")
    console.log(b)
} else {
   console.log(sentence)
}
