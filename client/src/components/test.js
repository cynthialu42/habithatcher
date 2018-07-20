import React from 'react';
import { PromiseProvider } from 'mongoose';

const Test = (props) => {
    return(
        <div>
            <button onClick = {props.updateCount(props.id, props.count, props.iteration)}>Update Count</button>
        </div>
    )
    
}

export default Test;