import {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.min || 0,
        }
    }
    
    // handleSubmit = () => {
    //     this.setState({
    //         count : this.props.min
    //     })
    // }
    
    handleAdd = () => {
        if(this.state.count + this.props.step <= this.props.max) {
            this.setState({
                count: this.state.count + this.props.step
            })
        } else {
            this.setState({
                count: this.props.max
            })
        }
    }
    
    handleSub = () => {
        if(this.state.count - this.props.step >= this.props.min) {
            this.setState({
                count: this.state.count - this.props.step
            })
        } else {
            this.setState({
                count: this.props.min
            })
        }
    }
    handleReset = () => {
        this.setState({
            count: this.props.min || 0,
        })
    }
    
    
    render() {
        const { min,max,step} = this.props
        const {state: {count}} = this
        console.log(min,max,step)
        return (
            <div className="container">
                {/*<button onClick={this.handleSubmit}>Submit</button>*/}
                
                <div>
                    <button onClick={this.handleAdd} disabled={max <= count}>+</button>
                    <h2>Count {count}</h2>
                    <button onClick={this.handleSub} disabled={min >= count}>-</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}
export default Counter