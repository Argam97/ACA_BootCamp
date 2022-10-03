import {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.min || 0,
            // isDisabled: false,
            // isDisabledAdd: false
        }
    }
    
    
    // static getDerivedStateFromProps(props, state) {
    //     if (state.count <= props.min) {
    //         return {isDisabled: true}
    //     } else if (state.count >= props.max) {
    //         return {isDisabledAdd: true}
    //     } else {
    //         return {isDisabled: false, isDisabledAdd: false}
    //     }
    //
    // }
    
    handleSubmit = () => {
        this.setState({
            count: this.props.min
        })
    }
    
    handleAdd = () => {
        if (this.state.count + this.props.step <= this.props.max) {

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
        if (this.state.count - this.props.step >= this.props.min) {
            
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
            isDisabled: false,
            isDisabledAdd: false,
        })
    }
    
    render() {
        const { min,max,step} = this.props
        const {state: {count, isDisabled, isDisabledAdd}} = this
        return (
            <div className='counter'>
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                
                <div>
                    <button onClick={this.handleAdd} disabled={max <= count}>+</button>
                    <span> Count {count}</span>
                    <button onClick={this.handleSub} disabled={min >= count}>-</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Counter