import React from 'react';

class Charts extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            days: ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun']
        }
    }
    render() { 
        return (
            <div className="charts">
                <div>
                    <span className="bar"></span>
                    <p>{this.state.days[0]}</p>
                </div>
                <div>
                    <span className="bar"></span>
                    <p>{this.state.days[1]}</p>
                </div>
                <div>
                    <span className="bar"></span>
                    <p>{this.state.days[2]}</p>
                </div>
                <div>
                    <span className="bar"></span>
                    <p>{this.state.days[3]}</p>
                </div>
                <div>
                    <span className="bar"></span>
                    <p>{this.state.days[4]}</p>
                </div>
                <div>
                    <span className="bar"></span>
                    <p>{this.state.days[5]}</p>
                </div>
                <div>
                    <span className="bar"></span>
                    <p>{this.state.days[6]}</p>
                </div>
            </div>  
        );
    }
}

export default Charts;