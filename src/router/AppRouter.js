import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import About from '../pages/about/About'
import Details from '../pages/details/Details';

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/details" exact component={Details} />
            </Switch>
        </Router>
    )
}

export default AppRouter

