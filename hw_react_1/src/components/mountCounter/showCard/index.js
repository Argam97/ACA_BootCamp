import React, {Component} from 'react';
import Close from '../../asets/icons/xmark-solid.svg'

class Showed extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        this.props.onmountCounter(this.props.title)
    }
    
    render() {
        return (
            <>
                <div className='UnmountCounter'>
                    <div className='UnmountCard'>
                        <h2>{this.props.title}</h2>
                    </div>
                    <img onClick={this.props.handleVisible} src={Close} alt="" className='remove' />
                </div>
            </>
        );
    }
}

export default Showed;