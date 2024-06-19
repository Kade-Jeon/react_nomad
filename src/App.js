import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  var [counter, setCounter] = useState(0);
  var countUp = () => {
    console.log(counter);
    setCounter((current) => current + 1);
  };
  return (
    <div className="App">
      <div>
        <h3>Total Clicks: {counter}</h3>
        <button onClick={countUp}>click me</button>
      </div>
    </div>
  );
}

export default App;
