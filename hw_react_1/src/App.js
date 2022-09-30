import {Component} from "react";
import Counter from "./components/counter";
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxValue: 0,
            minValue: 0,
            step: 1,
        }
    }
    
    handleValue = (e, key) => {
        this.setState({
            [key]: +e.target.value
        })
    }
    
    render() {
        const {state: {maxValue, minValue, step}} = this
        return (
            
            <div className="appContainer">
                <div>
                    <input
                        onChange={(e) => this.handleValue(e,"maxValue")}
                        value={maxValue}
                        placeholder={"MaxValue"}
                        className="input"
                        type="text"/>
                    <input
                        onChange={(e) => this.handleValue(e,"minValue")}
                        value={minValue}
                        placeholder={"MinValue"}
                        className="input"
                        type="text"/>
                    <input
                        onChange={(e) => this.handleValue(e,"step")}
                        value={step}
                        placeholder={"Step"}
                        className="input"
                        type="text"/>
                </div>
                <Counter
                max={maxValue}
                min={minValue}
                step={step}
                />
            </div>
        )
    }
}

export default App