import React from 'react';
import Charts from './Charts';
import Total from './Total';

class Chart extends React.Component {
    render() { 
        return (
            <div>
                <h1>Spending - Last 7 days</h1>
                <Charts />
            </div>
        );
    }
}

class BottomBar extends React.Component {
    render() { 
        return (
            <div className='bottomBar'>
                <Chart />
                <Total />
            </div>
        );
    }
}
 
export default BottomBar;
