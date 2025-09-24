import React from 'react';
import './Styles/Styles.css';

class IncreamentDecreamentClassComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    Increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
    Decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return (
            <div className='container'>
                <h1 className='heading'>Assignment-2 Counter Application With Class Component</h1>
                <div className='counter-card'>
                    <button className='counter-button' onClick={()=> this.Decrement()}>Decrement</button>
                    <span className='counter-value'>{this.state.count < 0 ? 0 : this.state.count}</span>
                    <button className='counter-button' onClick={()=> this.Increment()}>Increment</button>
                </div>
            </div>
        )
    }
}
export default IncreamentDecreamentClassComp;