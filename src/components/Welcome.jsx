const Welcome = (props) => {
  return (
    <section>
      <h2>Välkommen till denna quiz!</h2>
      <p>Vill du sätta igång?</p>
      <button onClick={props.nextScreen}>Ja!</button>
    </section>
  );
};

export default Welcome;
