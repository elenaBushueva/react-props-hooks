import React from 'react';

const Controls = (props) => {

    const clearHandle = () => {
        console.log('---CLEAR---');
        props.headerAlarm(123);
    }

    return (
        <div>
            <button onClick={clearHandle}>Clear list</button>
        </div>
    );
};

export default Controls;