import {Component} from 'react';
import UnmountCounter from "./Components/Unmounting";

class App2 extends Component {
    constructor() {
        super();
    }
    
    
    render() {
        return (
            <div className="app2">
                
                <div className="section1">
                    <UnmountCounter initial={1} />
                    <UnmountCounter initial={2} />
                    <UnmountCounter initial={3} />
                    <UnmountCounter initial={4} />
                    <UnmountCounter initial={5} />
                    <UnmountCounter initial={6} />
                </div>
                
                <div className="reportSide">
                
                </div>
            </div>
        );
    }
}

export default App2;