let level=document.querySelector("select")
level.addEventListener("change", function() {
      if (level.value=="Easy"){
        let inputt = parseInt(prompt("Guess the number between 0 and 10 :"));
        if (inputt == Math.floor(Math.random()*10)) {
            alert("That's the right number :) !!");
        } else {
            alert("Incorrect :(");
        }}
        if (level.value=="Intermediate"){
            let inputt = prompt("Guess the number between 0 and 100 :");
            if (inputt == Math.floor(Math.random()*100)) {
                alert("That's the right number :) !!");
            } else {
                alert("Incorrect :(");
            }}
        if (level.value=="Hard"){
             let inputt = prompt("Guess the number between 0 and 1000 :");
            if (inputt == Math.floor(Math.random()*1000)) {
                alert("That's the right number :) !!");
                } else {
                    alert("Incorrect :(");
                }}
  }


    );