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
    }
    checkTotalScore();
}

function checkTotalScore() {
    var totalScore = score1 + score2;
    var resultElement = document.getElementById('result3');
    if (resultElement !== null) {
        resultElement.textContent = 'Total Score: ' + totalScore;
        if (totalScore === 2) {
            score1 = 0;
            score2 = 0;
            resultElement.textContent = 'Your total score is 2. You are a genius!';
        } 
    } 
}

