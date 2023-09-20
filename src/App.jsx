import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Game from "./components/Game";
import Result from "./components/Result";

function App() {
  const WELCOME = "welcome",
    GAME = "game",
    RESULT = "result";
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [score, setScore] = useState(0);

  const restartQuiz = () => {
    setScore(0);
    setCurrentScreen(WELCOME);
  };

  let content = null;

  switch (currentScreen) {
    case WELCOME:
      content = <Welcome nextScreen={() => setCurrentScreen(GAME)} />;
      break;
    case GAME:
      content = (
        <Game
          answeredCorrectly={() => setScore(score + 1)}
          showResult={() => setCurrentScreen(RESULT)}
        />
      );
      break;
    case RESULT:
      content = <Result score={score} restartQuiz={restartQuiz}/>;
      break;
    default:
      content = <Welcome />;
  }

  return <div>{content}</div>;
}

export default App;
