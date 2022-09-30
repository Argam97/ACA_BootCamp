import {Component} from "react";
import './countryFlags.css';
import Flags from "../asets/source/data";
import Country from "./country";
class CountryFlags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flags: Flags,
            searched:'',
            isShow:false
        }
    }
    handleSearch = (e) => {
        this.setState({
            searched:e.target.value
        })
    }
    handleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    
    render() {
        const {state: {flags,searched,isShow}} = this
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    className="countryInput"
                    onChange={ (e) =>  this.handleSearch(e)}
                    onClick={this.handleShow}
                    value={searched}
                />
                {isShow && <ul className="flagsContainer">{flags.filter(item => item.name.includes(searched))
                    .map(item => <Country {...item} key={item.name}/>)}</ul>}
            </div>
        )
    }
}

export default CountryFlags