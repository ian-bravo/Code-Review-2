//Business Logic
function surveyCalculation (question1, question2, question3, question4, question5) {
    let response;
    if

}








//User Logic

const questionOneResponse = document.querySelector('input[name="color"]:checked')
const questionTwoResponse = document.querySelector('input[name="animal"]:checked')
const questionThreeResponse = document.querySelector('input[name="disaster"]:checked')
const questionFourResponse = document.querySelector('input[name="song"]:checked')
const questionFiveResponse = document.querySelector('input[name="movie"]:checked')

let showResults = surveyCalculation(questionOneResponse, questionTwoResponse, questionThreeResponse, questionFourResponse, questionFiveResponse);
document.getElementById("survey-results").innerText = showResults;

