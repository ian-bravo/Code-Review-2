//Business Logic
function surveyCalculation (colorQuestion, animalQuestion, disasterQuestion, songQuestion, movieQuestion) {
    let response;
    if (colorQuestion === "yellow" && animalQuestion === "kitten" && disasterQuestion === "fog" && songQuestion === "oops" && movieQuestion === "nightmare") {            
        response = "Your first programming language is... Python!";
    } else {
        response = "try again";
    }
return response;    
}
    



//User Logic
function userSubmitResponse(event) {
    event.preventDefault();
    
    const colorChoice = document.querySelector("input[name='color']:checked").value;
    const animalChoice = document.querySelector('input[name="animal"]:checked').value;
    const disasterChoice = document.querySelector('input[name="disaster"]:checked').value;
    const songChoice = document.querySelector('input[name="song"]:checked').value;
    const movieChoice = document.querySelector('input[name="movie"]:checked').value;

let showResults = surveyCalculation(colorChoice, animalChoice, disasterChoice, songChoice, movieChoice);
document.getElementById("survey-results").innerText = showResults;

}

function loadForm () {
    let userSelectedAnswers = document.querySelector("#survey-questions");
    userSelectedAnswers.addEventListener("submit", userSubmitResponse);
}

window.addEventListener("load", loadForm);
