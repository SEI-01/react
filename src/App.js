import { useState, useEffect, useDeferredValue } from "react";

import styles from "./App.module.css";

function Hello() {
  useEffect(() => {
    console.log("hi:)");
    return () => {
      console.log("bye:(");
    };
  }, []);
  return <div>hello world!</div>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("API LOADED");
  }, []);
  useEffect(() => {
    console.log("present counter is ", counter);
  }, [counter]);
  useEffect(() => {
    console.log("I'm searching for ", keyword);
  }, [keyword]);

  const [showing, setShowing] = useState(false);
  const controlShowing = () => setShowing((prev) => !prev);

  return (
    <div className="App">
      <div>
        {showing ? <Hello /> : null}
        <button onClick={controlShowing}>
          {showing ? "hide" : "showing!"}
        </button>
      </div>

      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here!"
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
