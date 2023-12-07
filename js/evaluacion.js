function checkAnswers() {
    checkAnswer('q1', 'a');

    checkAnswer('q2', 'a');

    checkAnswer('q3', 'c');

    checkAnswer('q4', 'a');

    checkAnswer('q5', 'b');

    checkAnswer('q6', 'a');

    checkAnswer('q7', 'c');
    
    checkAnswer('q8', 'a');
    
    checkAnswer('q9', 'a');
    
    checkAnswer('q10', 'a');
    
    checkAnswer('q11', 'a');
    
    checkAnswer('q12', 'c');
    
    checkAnswer('q13', 'a');
    
    checkAnswer('q14', 'a');
    
    checkAnswer('q15', 'a');
    
    checkAnswer('q16', 'a');
    
    checkAnswer('q17', 'a');
    
    checkAnswer('q18', 'a');
    
    checkAnswer('q19', 'b');
    
    checkAnswer('q20', 'a');
}

function checkAnswer(questionName, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
    const feedbackElement = document.getElementById(`feedback-${questionName}`);

    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            feedbackElement.textContent = '¡Respuesta correcta!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = 'Respuesta incorrecta.';
            feedbackElement.style.color = 'red';
        }
    } else {
        feedbackElement.textContent = 'Por favor, selecciona una respuesta.';
        feedbackElement.style.color = 'blue';
    }
}
