let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getRandomElement()
{
    let index=Math.floor(Math.random()*3)
    return hands[index];
}
console.log(getRandomElement());