document.querySelector('button').onclick = Click;

let a;
let b;

function Click() {
    a = document.querySelector('.i-1').value;

    let b = a.toString().toLowerCase();
    a = b;

    if (a == "rock" || a == "paper" || a == "scissor") {
        console.log("It's okey");
    } else {
        console.error("You input wrong word");
    }

    b = getComputedChoice();
    console.log(b);


    if (a == "paper" && b == "paper"){
        console.log("Draw");
    } else if (a == "paper" && b == "rock"){
        console.log("You win");
    } else if (a == "paper" && b == "scissor"){
        console.log("You lose");
    } else if (a == "rock" && b == "paper"){
        console.log("You lose");
    } else if (a == "rock" && b == "rock"){
        console.log("Draw");
    } else if (a == "rock" && b == "scissor"){
        console.log("You win");
    } else if (a == "scissor" && b == "paper"){
        console.log("You win");
    } else if (a == "scissor" && b == "scissor"){
        console.log("Draw");
    } else if (a == "scissor" && b == "rock"){
        console.log("You lose");
    }
}

function getComputedChoice(){
    let d = Math.random()*10;
    d = Math.ceil(d);

    if (d % 3 == 0){
        return "rock";
    } else if (d % 3 == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}




