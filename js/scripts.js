//Business Logic
function surveyCalculation (colorQuestion, animalQuestion, disasterQuestion, songQuestion, movieQuestion) {
    let response;
    //conditions must match HTML value fields!
    if (colorQuestion === "yellow" && animalQuestion === "kitten" && disasterQuestion === "fog" && songQuestion === "oops" && movieQuestion === "nightmare") {            
        response = "Python!";
    } else if (colorQuestion === "red" && animalQuestion === "megalodon" && disasterQuestion === "earthquake" && songQuestion === "toxic" && movieQuestion === "hellraiser") {
        response = "Javascript!";
    } else if (colorQuestion === "green" && animalQuestion === "sabertooth" && disasterQuestion === "meteor" && songQuestion === "circus" && movieQuestion === "scream") {
        response = "Go!"
    } else {
        response = "Scratch!"
    }
return response;    
}

//User Logic
function userSubmitResponse(event) {
    event.preventDefault();
    
    //all the names from the one form
    const colorChoice = document.querySelector("input[name='color']:checked").value;
    const animalChoice = document.querySelector('input[name="animal"]:checked').value;
    const disasterChoice = document.querySelector('input[name="disaster"]:checked').value;
    const songChoice = document.querySelector('input[name="song"]:checked').value;
    const movieChoice = document.querySelector('input[name="movie"]:checked').value;

    //arguments must match const syntax in order to use business logic function
    let showResults = surveyCalculation(colorChoice, animalChoice, disasterChoice, songChoice, movieChoice);
    document.getElementById("answer-reveal").innerText = showResults;
    //allows the answer to be revealed
    document.getElementById("final-results").removeAttribute("class");
}

function loadForm () {  
    //form ID that contains all the [names]
    let userSelectedAnswers = document.querySelector("#form-questions");
    userSelectedAnswers.addEventListener("submit", userSubmitResponse);
}

window.addEventListener("load", loadForm);
