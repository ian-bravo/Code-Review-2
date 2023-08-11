//Business Logic
// function surveyCalculation (question1, question2, question3, question4, question5) {
    function surveyCalculation (question1) {
        let response;
        if (question1 === "yellow") {            
            response = "Python";
        } else {
            response = "try again";
        }
        return response;    
    }
    

// function surveyCalculation (question1) {
//     let response;
//     if (document.querySelector('input[id="color-yellow"]:checked') === true) {
//         response = "Python";
//     } else {
//         response = "try again";
//     }
//     return response;    
// }

//User Logic
function userSubmitResponse(event) {
    event.preventDefault();
    
    const color = document.querySelector("input[name='color']:checked").value;
// const questionTwoResponse = document.querySelector('input[name="animal"]:checked').value
// const questionThreeResponse = document.querySelector('input[name="disaster"]:checked').value
// const questionFourResponse = document.querySelector('input[name="song"]:checked').value
// const questionFiveResponse = document.querySelector('input[name="movie"]:checked').value

// let showResults = surveyCalculation(questionOneResponse, questionTwoResponse, questionThreeResponse, questionFourResponse, questionFiveResponse);
let showResults = surveyCalculation(color);
document.getElementById("survey-results").innerText = showResults;

}

function loadForm () {
    let userSelectedQuestions = document.querySelector("#radio-form-q1-color");
    userSelectedQuestions.addEventListener("submit", userSubmitResponse);
}

window.addEventListener("load", loadForm);
