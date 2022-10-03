import React, {Component} from 'react';
import Image from "../../asets/xmark-solid.svg"
class UnmountCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            isClosed:false
        }
    }
    handleClose =() => {
        this.setState({
            count: this.state.count + 1,
            isClosed:!this.state.isClosed
        })
    }
    


    render() {
        const {initial} = this.props
        const {isClosed,count} = this.state
        console.log(count,initial);
        return (

            <div className="UnmountCounter">
                {!isClosed ? <div className="UnmountCard">
                    {initial}
                </div> : <button onClick={this.handleClose}>{isClosed ? "show" : "hide"}</button>}
                <img onClick={this.handleClose} className="remove" src={Image} alt='as'/>
            </div>

        );
    }
}

export default UnmountCounter;