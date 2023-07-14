import { useState, useEffect } from "react";

import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("API LOADED");
  }, []);
  return (
    <div className="App">
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
