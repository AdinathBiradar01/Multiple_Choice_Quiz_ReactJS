import React, { useState } from "react";
import "./App.css";

function App() {
  const [showStart, setShowStart] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "In which company are you doing your internship?",
      options: [
        { id: 0, text: "Numetry", isCorrect: true },
        { id: 1, text: "TechCorp", isCorrect: false },
        { id: 2, text: "InnoSoft", isCorrect: false },
        { id: 3, text: "CodeWorks", isCorrect: false },
      ],
    },
    {
      text: "What does CPU stand for?",
      options: [
        { id: 0, text: "Central Processing Unit", isCorrect: true },
        { id: 1, text: "Computer Personal Unit", isCorrect: false },
        { id: 2, text: "Central Personal Unit", isCorrect: false },
        { id: 3, text: "Central Process Unit", isCorrect: false },
      ],
    },
    {
      text: "What is the brain of the computer?",
      options: [
        { id: 0, text: "RAM", isCorrect: false },
        { id: 1, text: "CPU", isCorrect: true },
        { id: 2, text: "Hard Drive", isCorrect: false },
        { id: 3, text: "Motherboard", isCorrect: false },
      ],
    },
    {
      text: "Which programming language is primarily used for web development?",
      options: [
        { id: 0, text: "Python", isCorrect: false },
        { id: 1, text: "Java", isCorrect: false },
        { id: 2, text: "JavaScript", isCorrect: true },
        { id: 3, text: "C++", isCorrect: false },
      ],
    },
    {
      text: "What does RAM stand for?",
      options: [
        { id: 0, text: "Random Access Memory", isCorrect: true },
        { id: 1, text: "Read Access Memory", isCorrect: false },
        { id: 2, text: "Run Access Memory", isCorrect: false },
        { id: 3, text: "Remote Access Memory", isCorrect: false },
      ],
    },
    {
      text: "Which device is used to store permanent data?",
      options: [
        { id: 0, text: "RAM", isCorrect: false },
        { id: 1, text: "Hard Drive", isCorrect: true },
        { id: 2, text: "Cache Memory", isCorrect: false },
        { id: 3, text: "Processor", isCorrect: false },
      ],
    },
    {
      text: "What is an operating system?",
      options: [
        { id: 0, text: "A software that manages hardware", isCorrect: true },
        { id: 1, text: "A type of computer", isCorrect: false },
        { id: 2, text: "A programming language", isCorrect: false },
        { id: 3, text: "A web browser", isCorrect: false },
      ],
    },
    {
      text: "Which protocol is used to send emails?",
      options: [
        { id: 0, text: "HTTP", isCorrect: false },
        { id: 1, text: "FTP", isCorrect: false },
        { id: 2, text: "SMTP", isCorrect: true },
        { id: 3, text: "IMAP", isCorrect: false },
      ],
    },
    {
      text: "What does HTTP stand for?",
      options: [
        { id: 0, text: "HyperText Transfer Protocol", isCorrect: true },
        { id: 1, text: "Hyperlink Transfer Protocol", isCorrect: false },
        { id: 2, text: "HighText Transfer Protocol", isCorrect: false },
        { id: 3, text: "HyperText Transmission Protocol", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of a firewall in a computer network?",
      options: [
        { id: 0, text: "To block unauthorized access", isCorrect: true },
        { id: 1, text: "To store data permanently", isCorrect: false },
        { id: 2, text: "To speed up the network", isCorrect: false },
        { id: 3, text: "To provide Wi-Fi connection", isCorrect: false },
      ],
    }
  ];

  const startQuiz = () => {
    setShowStart(false);
  };

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion + 1 === questions.length) {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setShowStart(true);
  };

  return (
    <div className="App">
      {showStart ? (
        <div className="start-screen">
          <h1>Welcome to the Computer Technology Quiz 💻</h1>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {((score / questions.length) * 100).toFixed(2)}%)
          </h2>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
