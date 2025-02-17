
function playgame(){
    var inputt = document.querySelector(".input");
let level=document.querySelector("select")
var s;
    switch(level.value){
        case "Easy":
            s=" guess a number between 0 and 10";break;
        case "Intermediate": 
            s=" guess a number between 0 and 100";break;
        case "Hard":
            s=" guess a number between 0 and 1000";break;   
    }
    const newEvent = document.createElement("div");
    newEvent.innerHTML =  `<label for="userGuess">${s}</label>
    <input type="number" id="userGuess" >
    <button type="button" class="btn btn-primary" onclick="checkGuess()">Check</button>
`;
    inputt.appendChild(newEvent);
    inputt.style.display = "block";
    document.getElementById("restart").style.display = "none";
};
function checkGuess() {
    let level = document.querySelector("select").value;
    let randomNumber;
    switch(level) {
        case "Easy":
            randomNumber = Math.floor(Math.random() * 10);
            break;
        case "Intermediate":
            randomNumber = Math.floor(Math.random() * 100);
            break;
        case "Hard":
            randomNumber = Math.floor(Math.random() * 1000);
            break;
    }
    let userGuess = document.getElementById("userGuess").value;
    if (parseInt(userGuess) == randomNumber) {
        alert("That's the right number :) !!");
    } else {
        alert(`Incorrect :( `);
        let anotherGuess = prompt("I'll give you another chance :");
            if (parseInt(anotherGuess) == randomNumber) {
                alert("That's the right number :) !!");
                document.getElementById("restart").style.display = "block";
                } else {
                    alert(`Incorrect :( The correct number was ${randomNumber}`);
                    document.getElementById("restart").style.display = "block";
                }}
        
            
    }
    document.getElementById("restart").addEventListener('click', function() {
        document.querySelector("select").value = ""; 
        document.querySelector(".input").innerHTML = '';
        document.getElementById("restart").style.display = "none"; 
    });
