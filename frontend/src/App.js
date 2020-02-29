import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route} from 'react-router-dom';
import Home from './Components/Home';
import Invoice from './Components/Invoice';

class App extends Component {
    
    render() { 
        return ( 
            <Router>
                <Route path="/" exact component= {Home} />
                <Route path="/free-invoice"  component= {Invoice} />
            </Router>
         );
    }
}
 
export default App;