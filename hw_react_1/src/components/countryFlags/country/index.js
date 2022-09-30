import {Component} from "react";


class Country extends Component {
    constructor(props) {
        super(props);
        
    }
    
    
    render() {
        const {name,img} = this.props
        return (
            <li className="countriesBox">
                <img src={img} alt={name}/>
                {name}
            </li>
        )
    }
}

export default Country