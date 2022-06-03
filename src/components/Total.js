import React from 'react';


class Total extends React.Component {
    render() { 
        return (
            <div>
                <hr></hr>
                <div className='totalContainer'>
                <div className="total thisMonth">
                    <span>Total this month</span>
                    <span className='totalAmount'>$478.33</span>
                </div>
                <div className='total lastMonth'>
                    <span>+2.4%</span>
                    <span>from last month</span>
                </div>
            </div>
            </div>
            
        );
    }
}
 
export default Total;