let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const playGround =document.querySelector("#msg-container");

let userScorePara = document.querySelector("#score-user");
let compScorePara = document.querySelector("#score-comp");



const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        
        playGround.innerText= `You Win ! ${userChoice} beats ${compChoice}`;
        userScore++;
        userScorePara.innerText = userScore;
        playGround.style.backgroundColor="green";
        
        
    }else{
        
        playGround.innerText=`You Loss! ${compChoice} beats ${userChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
        playGround.style.backgroundColor="red";
       
    }
}


const drawgame = (userChoice,compChoice)=>{
    playGround.innerText=`Game Draw! ${userChoice} VS ${compChoice}`;
    playGround.style.backgroundColor="#081b31";
}


const genCompChoice=()=>{
    //rock ,paper,scissors
    const options = ["rock","paper","scissors"];

    const randomIdx = Math.floor(Math.random()*3);

    return options[randomIdx];
}

const playGame = (userChoice)=>{
    // console.log("userchoice : ",userChoice);

    //Gen Computer Choice
    const compChoice = genCompChoice();
    // console.log("compchoice: ",compChoice);

    //draw game
    if(userChoice===compChoice){
        drawgame(userChoice,compChoice);
    }else{
        let userWin= true;
        //User Selects Rock Means Comp Options (Paper,Scissors)
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //User Selects Paper Means Comp Options (rock,Scissors)
            userWin = compChoice==="scissors" ? false : true; 

        }else{
            //User Selects Scissors Means Comp Options (rock,paper)
            userWin = compChoice ==="paper" ? false : true; 
            
        }

        showWinner(userWin,userChoice,compChoice);
    }






}

choices.forEach((choice)=>{  
    choice.addEventListener("click",()=>{

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })

})