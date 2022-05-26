function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button disabled={value.length < 1}>Submit</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));