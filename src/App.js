import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [minutes, setMinutes] = useState();
    const [hours, setHours] = useState(0);
    const onChange = (event) => {
        setMinutes(event.target.value);
    };
    const reset = () => {
        setMinutes(0);
    };

    return (
        <div className="App">
            <h1>Super Converter</h1>
            <div>
                <label htmlFor="minutes">minutes</label>
                <input id="minutes" placeholder="minutes" type="number" value={minutes} onChange={onChange}/>
            </div>
            <div>
                <h4>You want to convert </h4>
                <label htmlFor="hours">hours</label>
                <input id="hours" placeholder="hour" type="number" value={minutes / 60}/>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default App;
