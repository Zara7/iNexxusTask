import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Initialization from './components/pages/initialization';
import Routing from './components/pages/routing';
import Directional from './components/pages/directional';
import Statistics from './components/pages/statistics';

import Sidebar from './components/sidebarComponent/sidebar'
import Header from './components/headerComponent/header'

class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Sidebar />
                        <Header/>
                        <Switch>
                            <Route exact path="/" component = {Initialization}></Route>
                            <Route exact path="/routing" component = {Routing}></Route>
                            <Route exact path="/directional" component = {Directional}></Route>
                            <Route exact path="/statistics" component = {Statistics}></Route>
                        </Switch>
                </div>    
            </Router>
        );
    }
}
export default App;