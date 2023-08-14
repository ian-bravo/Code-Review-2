//`'~-,_,-~'`'~-,_,-~'`'~-,_,-~' Business Logic `'~-,_,-~'`'~-,_,-~'`'~-,_,-~'
function surveyCalculation (colorQuestion, animalQuestion, disasterQuestion, songQuestion, movieQuestion) {
    let response;
    //condition values must match HTML value fields!
    if (colorQuestion === "yellow" && animalQuestion === "kitten" && disasterQuestion === "fog" && songQuestion === "oops" && movieQuestion === "nightmare") {            
        response = "Python!";
    } else if (colorQuestion === "red" && animalQuestion === "megalodon" && disasterQuestion === "earthquake" && songQuestion === "toxic" && movieQuestion === "hellraiser") {
        response = "Javascript!";
    } else if (colorQuestion === "green" && animalQuestion === "pterodactyl" && disasterQuestion === "meteor" && songQuestion === "circus" && movieQuestion === "scream") {
        response = "C++!"
    } else {
        response = "Scratch!";
    }
return response;    
}

//`'~-,_,-~'`'~-,_,-~'`'~-,_,-~'` User Interface Logic `'~-,_,-~'`'~-,_,-~'`'~-,_,-~'`

//upon loading window, call on loadForm
window.addEventListener("load", loadForm);
    

function loadForm () {  
    //use form ID that contains all the [names]
    let userSelectedAnswers = document.querySelector("#form-questions");
    //upon submit, call on userSubmitResponse
    userSelectedAnswers.addEventListener("submit", userSubmitResponse);

    //mouseover the box to reveal the different combinations (cheatsheet)
    let teacherCheatsheet = document.querySelector("#cheatsheet-box");
    teacherCheatsheet.addEventListener("mouseover", revealFunction);
}
//allows the cheatsheet reveal
function revealFunction () {
    document.getElementById("hover-reveal-python").removeAttribute("class");
    document.getElementById("hover-reveal-JS").removeAttribute("class");
    document.getElementById("hover-reveal-C++").removeAttribute("class");
    document.getElementById("hover-reveal-Scratch").removeAttribute("class");
}

//runs the surveyCalculation function to determine what language to pick based on user submitting their response.
function userSubmitResponse(event) {
    event.preventDefault();
    
    //all the [names] from form
    const colorChoice = document.querySelector("input[name='color']:checked").value;
    const animalChoice = document.querySelector('input[name="animal"]:checked').value;
    const disasterChoice = document.querySelector('input[name="disaster"]:checked').value;
    const songChoice = document.querySelector('input[name="song"]:checked').value;
    const movieChoice = document.querySelector('input[name="movie"]:checked').value;

    //[names] to be used for surveyCalculation function
    let showResults = surveyCalculation(colorChoice, animalChoice, disasterChoice, songChoice, movieChoice);
    //displays the response from the surveyCalculation function
    document.getElementById("answer-reveal").innerText = showResults;
    //removes the class to allow the final results to be revealed
    document.getElementById("final-results").removeAttribute("class");
}