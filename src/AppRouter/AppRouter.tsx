import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomeMenu from "../HomeMenu/HomeMenu";

const AppRouter = () => {
    return <Router>
        <Route path="/" exact component={HomeMenu}/>
    </Router>
}

export default AppRouter
