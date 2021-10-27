



let fewWords =  prompt("please enter a few words with commas in bewtween")

let a = fewWords.split(" ")

let longestWord = 0;

  for(let i = 0; i <= fewWords.length; i++){
    if(fewWords[i].length > longestWord){ 
	    longestWord = fewWords[i].length; 
}
}


console.log(longestWord)

for ( let b of a){
    console.log(`* ${b} *`) }