import React from 'react';

import { Line } from 'rc-progress';

const ProgressBar = props => {
    // var options = {
    //     strokeWidth: 2
    // }

    // var containerStyle = {
    //     width: '200px',
    //     height: '200px'
    // }


    return(
        <Line percent = {props.percent} strokeWidth = '4' strokeColor = {props.color} />
    )
}
export default ProgressBar;