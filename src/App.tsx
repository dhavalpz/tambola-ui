import React from "react";
import "./App.css";
import Board from "./components/Board";
import NumberGenerator from "./components/NumberGenerator";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
function App() {
  return (
    <div className="App">
      <NumberGenerator />
      <Board />
    </div>
  );
}

export default App;
