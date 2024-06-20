import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function MinuteAndHour() {
    const [amount, setAmount] = useState(0);
    const [inverted, setInverted] = useState(true);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = () => {
        setAmount(0);
    };

    const onInverted = () => {
        setInverted(current => !current);
        reset();
    };

    return (
        <div className="MinuteAndHour">
            <div>
                <label htmlFor="minutes">minutes</label>
                <input id="minutes" placeholder="minutes" type="number" value={inverted ? amount : amount * 60}
                       onChange={onChange} disabled={!inverted}/>
            </div>
            <h4>↕️</h4>
            <div>
                <label htmlFor="hours">hours</label>
                <input id="hours" placeholder="hour" type="number" value={inverted ? amount / 60 : amount}
                       onChange={onChange} disabled={inverted}/>
            </div>
            <div>
                <p>
                    <button onClick={reset}>Reset</button>
                    <button onClick={onInverted}>{inverted ? "Minute To Hour" : "Hour To Minute"}</button>
                </p>
            </div>
        </div>
    );
}

function KmAndMile() {
    const [distance, setDistance] = useState(0);
    const [inverted, setInverted] = useState(false);
    const reset = () => {
        setDistance(0);
    }

    const onInverted = () => {
        setInverted(current => !current);
        reset();
    };

    const onChange = (event) => {
        setDistance(event.target.value);
    }

    return (
        <div className="KmToMile">
            <div>
                <label htmlFor="km">Km</label>
                <input type="number" id="km" name="Km" onChange={onChange} value={inverted ? distance / 0.62 : distance}
                       disabled={inverted}/>
            </div>
            <h4>↕️</h4>
            <div>
                <label htmlFor="mile">Mile</label>
                <input type="number" id="mile" name="Mile" onChange={onChange}
                       value={inverted ? distance : distance * 0.62} disabled={!inverted}/>
            </div>
            <div>
                <p>
                    <button onClick={reset}>Reset</button>
                    <button onClick={onInverted}>{inverted ? "Mile To Km" : "Km To Mile"}</button>
                </p>
            </div>
        </div>
    );
}

function Select() {
    const [choice, setChoice] = useState(-1);
    const onSelect = (event) => {
        setChoice(Number(event.target.value));
    };

    const options = [
        {id: 1, value: -1, content: "Select Converting Options"},
        {id: 2, value: 0, content: "Minute & Hour"},
        {id: 3, value: 1, content: "Km & Mile"}
    ];

    const renderConverter = () => {
        switch (choice) {
            case 0:
                return <MinuteAndHour />
            case 1:
                return <KmAndMile />
            default:
                return "Please Select Converting Options";
        }
    };

    return (
        <div className="Select">
            <select value={choice} onChange={onSelect}>
                {options.map(option => {
                    return <option key={option.id} value={option.value}>{option.content}</option>
                })}
            </select>
            <hr/>
            {renderConverter()}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>Super Converter</h1>
            <Select />
        </div>
    );
}

export default App;
