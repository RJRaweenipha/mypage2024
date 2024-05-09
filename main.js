var score1 = 0;
var score2 = 0; 

function checkAnswer1(answer) {
    var resultElement = document.getElementById('result1');
    if (answer === 'a') {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        score1 = 1;
    } else {
        resultElement.textContent = 'Incorrect!';
        resultElement.style.color = 'red';
        score1 = 0;
    }
    checkTotalScore();
}

function checkAnswer2(answer) {
    var resultElement = document.getElementById('result2');
    if (answer === 'c') {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        score2 = 1;
    } else {
        resultElement.textContent = 'Incorrect!';
        resultElement.style.color = 'red';
        score2 = 0;
    }
    checkTotalScore();
}

function checkTotalScore() {
    var resultElement3 = document.getElementById('result3');

    var totalScore = score1 + score2;
    resultElement3.textContent = 'Total Score: ' + totalScore;

    if (totalScore === 2) {
        score1 = 0;
        score2 = 0;
        resultElement3.textContent = 'Your total score is 2. You are a genius!';
    } 

}