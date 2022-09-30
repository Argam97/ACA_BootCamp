import React, {Component} from 'react';

class Hidden extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible:this.props.isVisible
        }
    }
    render() {
        return (
            <button onClick={this.props.handleVisible} >show</button>
        );
    }
}

export default Hidden;