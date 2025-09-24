import React, { useState } from "react";
import './Styles/Styles.css';

function IncreamentDecreamentFuncComp(){
    const [count, setCount] = useState(0);

    function Increment(){
        setCount(count + 1);
    }
    function Decrement(){
        setCount(count - 1);
    }
    return(
        <div className='container'>
            <h1 className='heading'>Assignment-2 Counter Application With Function Component</h1>
            <div className='counter-card'>
                <button className='counter-button' onClick={()=> Decrement()}>Decrement</button>
                <span className='counter-value'>{count < 0 ? 0 : count}</span>
                <button className='counter-button' onClick={()=> Increment()}>Increment</button>
            </div>
        </div>
    )
}
export default IncreamentDecreamentFuncComp;