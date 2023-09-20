import { useState } from "react";

const Game = (props) => {
  const questions = getQuestions();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = questions[currentQuestion];

  const options = question.answers.map((answer, index) => (
    <p className="option" key={index}>
      <input
        type="radio"
        name="question"
        onClick={() => setSelectedAnswer(index)}
      />{" "}
      {answer}
    </p>
  ));

  const handleDecided = () => {
    if (selectedAnswer == question.correct) {
      console.log("Rätt!!!");
      props.answeredCorrectly();
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // go to result
      props.showResult();
    }
  };

  return (
    <div>
      <h3>{question.question}</h3>
      {options}
      <button onClick={handleDecided}>Svara</button>
    </div>
  );
};

const getQuestions = () => {
  return [
    {
      question: "När är det julafton?",
      answers: ["24 maj", "24 december", "3 maj"],
      correct: 1,
    },
    {
      question: "Vilket är sista datumet för inlämningsuppgiften?",
      answers: ["14 november", "24 december", "6 oktober"],
      correct: 2,
    },
    {
      question: "Vad är bäst?",
      answers: ["Zoom", "Discord", "Teams"],
      correct: 0,
    },
  ];
};

export default Game;
