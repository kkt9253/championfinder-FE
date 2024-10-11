import React from 'react';

interface QuestionItemProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: boolean) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  return (
    <div className="question-item">
      <h2>질문 {questionNumber} / {totalQuestions}</h2>
      <p>{question}</p>
      <div className="answer-buttons">
        <button className="answer-button" onClick={() => onAnswer(true)}>예</button>
        <button className="answer-button" onClick={() => onAnswer(false)}>아니요</button>
      </div>
    </div>
  );
};

export default QuestionItem;
