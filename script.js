let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice")
const message =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin)
    {
    userScore++;
    userScorePara.innerText =userScore;
    message.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText =compScore;
        message.innerText=`You loss. ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    // console.log("userChoice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =",compChoice);

    if(userChoice === compChoice)
    {
    message.innerText="Game was Draw";
    message.style.backgroundColor="#040438";

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            userWin = compChoice === "paper" ? false :true ;
        }else if(userChoice === "paper"){
            //rock , scissor
            userWin = compChoice === "scissor" ? false : true; 
        }else{
            // paper,rock
            userWin =compChoice === "paper" ? true :false; 
        }
        showWinner(userWin, userChoice, compChoice);
    }


}

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    let indx = Math.floor((Math.random()*3));
    return options[indx];
}


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice );
        playGame(userChoice)
    })
});