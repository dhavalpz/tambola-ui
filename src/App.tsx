import React from "react";
import NumberGenerator from "./components/NumberGenerator";
import "./App.css";
import Board from "./components/Board";
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
