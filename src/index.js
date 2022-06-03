import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/TopBar.js'
import BottomBar from './components/BottomBar.js'
import './index.css';


class App extends React.Component { 
    render() { 
        return (
            <div>
                <TopBar />
                <BottomBar />
            </div>
            
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);