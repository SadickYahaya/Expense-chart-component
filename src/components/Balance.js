import React from 'react';

class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 921.48}
    }
    render() { 
        return (
            <h2 className='balanceFigure'>${this.state.value}</h2>
        );
    }
}

export default Balance;