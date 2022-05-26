function App() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element Below"}
      </button>

      {show && <div>Toggle Challenge</div>}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
