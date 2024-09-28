import "./frontend.scss";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { questions, calculatePersonality, personalities } from './quiz-data';


const Frontend = ({ className }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [finished, setFinished] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnswerClick = (answer) => {
        setSelectedAnswers([...selectedAnswers, answer]);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            const personality = calculatePersonality(selectedAnswers);
            setResult(personality);
            setFinished(true);
        }
    };

    return (
        <div className={className}>
            {finished ? (
                <div className="quiz-results">
                    <h2>Your Developer Personality: {result}</h2>
                    <p>{personalities[result]}</p>
                </div>
            ) : (
                <div className="quiz-question">
                    <h2>Developer Personality Quiz</h2>
                    {questions[currentQuestion].question}
                    <div className="quiz-answers">
                        {questions[currentQuestion].answers.map((answer, index) => (
                            <button key={index} onClick={() => handleAnswerClick(answer)}>
                                {answer.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    const divsToUpdate = document.querySelectorAll(".quiz-update-me");

    divsToUpdate.forEach(div => {
        const data = JSON.parse(div.querySelector("pre").innerText);
        const root = ReactDOM.createRoot(div);
        root.render(<Frontend {...data} />);
        div.classList.remove("quiz-update-me");
    });
});
