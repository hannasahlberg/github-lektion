document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById('question');
    const buttons = document.querySelector('.answer-btn');
    const scoreElement = document.getElementById('score');
    
    let currentQuestion = 0;
    let score = 0;

    const questions = [
        {
            question : "Vad står html för?",
            answers: ["HighText Machine Language", "Home Tool Markup Language", "Hyperlinks Text Management Language"],
            correct: 0;
        },
        {
            question: "Vilket år skapades Javascript?",
            answers: ["1995", "2000", "1990", "1985"],
            correct: 0;
        }
    ];

    function loadQuestion(){
        const q = questions[currentQuestion];
        questionElement.textContent = q.question;
        buttons.forEach((button, index) => {
            button.textContent = q.answers[index];
            button.onclick = () => {
                if (index === q.correct){
                    score++;
                    scoreElement.textContent = `Poäng: ${score}`;
                }
                currentQuestion++;
                if(currentQuestion < questions.length){
                    loadQuestion();
                }else{
                    questionElement.textContent = 'Spelet är slut';
                    buttons.forEach(btn => btn.style.display = "none");
                }
            };
        });
    }

    loadQuestion();
});