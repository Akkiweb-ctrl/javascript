
let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");
let playerEl=document.getElementById("player-el");

player={
    name:"Vaibhav ",
    chips:132
}
playerEl.textContent=player.name+": $"+player.chips;
function startGame()
{
    let firstNumber=getRandomCard();
    let secondNumber=getRandomCard();
    sum=firstNumber+secondNumber;
    cards.push(firstNumber);
    cards.push(secondNumber);
    isAlive=true;
    renderGame();
}
function renderGame()
{
    cardsEl.textContent="Cards: ";
    for(let iterator=0;iterator<cards.length;iterator++)
    {
        cardsEl.textContent+=cards[iterator]+" ";
    }
    sumEl.textContent="Sum: "+sum;

    if(sum<=20)
    {
        message="Do you want to draw a new card?";
    }
    else if(sum===21)
    {
        message="You've got Blackjack";
        hasBlackJack=true;
    }
    else{
        message="You're out of the game!";
        isAlive=false;
    }
    messageEl.textContent=message;
   


}
function newCard(){
    if(isAlive && hasBlackJack===false)
    {
        let number=getRandomCard();
        cards.push(number);
        sum+=number;
        renderGame();
    }
    


}
function getRandomCard()
{
    let number= Math.floor(Math.random()*13)+1;
    if(number>10){
        return 10;
    }
    else if(number===1){
        return 11;
    }
    else{
        return number;
    }
}