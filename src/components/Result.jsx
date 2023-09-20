const Result = (props) => {
  return (
    <section>
      <h2>Resultat</h2>
      <p>Du fick {props.score} rätt svar!</p>
      <button onClick={props.restartQuiz}>Börja om</button>
    </section>
  );
};

export default Result;
