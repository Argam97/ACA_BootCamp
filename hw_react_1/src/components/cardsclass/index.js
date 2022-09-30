import {Component} from 'react';
import Showed from "../mountCounter/showCard";
import Hidden from "../mountCounter/hiddenCard";

class CardsCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible:true,
        }
    }
    
    handleVisible= ()=>{
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
        
        return (this.state.isVisible ? <Showed title={this.props.title} onmountCounter={this.props.onmountCounter} handleVisible={this.handleVisible}/> : <Hidden handleVisible={this.handleVisible} />);
    }
}

export default CardsCreator;