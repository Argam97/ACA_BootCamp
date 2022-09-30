import {Component} from 'react';
import CardsCreator from "../cardsclass";
import "../../App.css"

const cardsArr = [
    {
        title: "Card No.1",
        renderCount: 0,
        
    },
    {
        title: "Card No.2",
        renderCount: 0,
        
    },
    {
        title: "Card No.3",
        renderCount: 0,
        
    },
    {
        title: "Card No.4",
        renderCount: 0,
        
    },
    {
        title: "Card No.5",
        renderCount: 0,
        
    }
]

class MountCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards : cardsArr,
        }
    }
    onmountCounter=(title)=>{
        this.setState({
            cards: this.state.cards.map(item=>{
                if(item.title==title) {
                    item.renderCount = item.renderCount+1
                }
                return item
            })
        })
    }
    
    
    render() {
        const {cards} = this.state
        // console.log(cards)
        return (
            <>
                <div className="CardsSection">
                    {cards.map(item => <CardsCreator
                        title={item.title}
                        onmountCounter={this.onmountCounter}
                        
                        key={item.title}/>)}
                </div>
                <div>{cards.map(item => <p key={item.title}>{item.title} => {item.renderCount}</p> )}</div>
            </>
            
        );
    }
}

export default MountCounter;