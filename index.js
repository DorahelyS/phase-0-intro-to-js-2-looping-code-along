/*
for (let age = 30; age < 40 ; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me`)
}
*/
/*
const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts){
for (let i = 0; i < gifts.length; i++){
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
  debugger
}
  return gifts
}
wrapGifts(gifts);
*/
 
const names = ["Guadalupe" , "Olli", "Aki"]
const newEmptyArray = [] // global scope will track forever

function writeCards(names, event){
    //const newEmptyArray = [] //add this when doing console.log not global scope won't track the others
for (let i = 0; i < names.length; i++){
   newEmptyArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
 
}
return newEmptyArray
}

//console.log(writeCards(["Giselle", "Kathryn", "Jina"], "birthday"))

//console.log(writeCards(["Mimi", "Monica", "Sam"], "graduation"))

//console.log(writeCards(["Wille", "Shawn", "Tony"], "rally"))



function countDown(){
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown--);
  } 
}





