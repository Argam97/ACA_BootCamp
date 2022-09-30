import {Component} from "react";
import CountryFlags from "./components/countryFlags";

class App extends Component{
    constructor(props) {
        super(props);
        
    }
    
    
    
    render() {
        
        return (
            <div>
                <CountryFlags/>
            </div>
        )
    }
}
export default App