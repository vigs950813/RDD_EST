function checkAnswers() {
    checkAnswer('q1', 'a');
    checkAnswer('q2', 'a');
    checkAnswer('q3', 'a');
    checkAnswer('q4', 'a');
    checkAnswer('q5', 'b');
    checkAnswer('q6', 'c');
    checkAnswer('q7', 'a');
    checkAnswer('q8', 'b');
    checkAnswer('q9', 'a');
    checkAnswer('q10', 'a');
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
