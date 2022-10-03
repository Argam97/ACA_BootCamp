import {Component} from "react";
import './countryFlags.css';
import Country from "./country";

class CountryFlags extends Component {
    constructor(props) {
        super(props);
        this.flgasarr = []
        this.state = {
            flags: [],
            searched: '',
            isShow: false
        }
    }
    
    componentDidMount() {
        fetch("/data/data.json")
            .then(res => res.json())
            .then(items => {
                this.setState({flags: items});
                this.flgasarr = items
            })
    }
    
    
    componentDidUpdate(prevProps, prevState,sp) {
        // const {state: {flags, searched, isShow}} = this
        if (prevState.searched !== this.state.searched) {
            if (this.state.searched.length >= 3) {
                
                this.setState({flags: this.flgasarr.filter(item => item.name.includes(this.state.searched))})
            } else {
                this.setState({flags: this.flgasarr})
            }
        }
    
    }
    
    handleSearch = (e) => {
        this.setState({
            searched: e.target.value
        })
    }
    handleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    
    
    render() {
        const {state: {flags, searched, isShow}} = this
        console.log(this.state.flags)
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    className="countryInput"
                    onChange={(e) => this.handleSearch(e)}
                    onClick={this.handleShow}
                    value={searched}
                />
                {isShow &&
                    <ul className="flagsContainer">{flags.map(item => <Country {...item} key={item.name}/>)}</ul>}
            </div>
        )
    }
}

export default CountryFlags


// componentDidUpdate() {
//     const {state: {flags, searched, isShow}} = this
//
//     if(flags.includes(searched)){
//         this.setState({
//             flags: Flags.filter(item => item.name.includes(this.state.searched))
//         })
//     }
//     // if(this.state.searched.length > 2) {
//     //     console.log(Flags.filter(item => item.name.includes(this.state.searched)))
//     //     this.setState({
//     //         flags:Flags.filter(item => item.name.includes(this.state.searched))
//     //     })
//     //
//     // }
// }
