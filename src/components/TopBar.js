import React from 'react';
import Balance from './Balance';
 
class TopBar extends React.Component {
    render() { 
        return (
            <header>
                <div className="headerInfo">
                    <h4 className="balanceText">My balance</h4>
                    <Balance />
                </div>  
                <div className='logo'>
                <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
                </div>
            </header>
        );
    }
}

export default TopBar;