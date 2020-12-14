import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardDetail from "./CardDetail";
import Home from "./Home";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/:id" exact component={CardDetail} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
