import './index.scss';
import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import React, { useState } from 'react';
import { questions, calculatePersonality, personalities } from './quiz-data';

registerBlockType(metadata.name, {
    edit: EditComponent,
    save: () => null
});

function EditComponent() {
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
            const personality = calculatePersonality([...selectedAnswers, answer]);
            setResult(personality);
            setFinished(true);
        }
    };

    return (
        <div {...useBlockProps()}>
            {finished ? (
                <div className="quiz-results">
                    <h2>Your Developer Personality: {result}</h2>
                    <p>{personalities[result]}</p>
                </div>
            ) : (
                <div className="quiz-question">
                    <h2>{questions[currentQuestion].question}</h2>
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
}