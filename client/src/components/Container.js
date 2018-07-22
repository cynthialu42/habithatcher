import React from 'react';
import { PromiseProvider } from 'mongoose';

const Container = props =>{
    return(
        <div className = 'container-fluid'>
            {props.children}
        </div>
    )
}

export default Container;