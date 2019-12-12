import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Todo from './components/Todo/'
import About from './components/About/'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/todos" component={Todo} />
            <Route path="/about" component={About} />
            <Route path="*" component={Todo}/>
        </Switch>
    </BrowserRouter>
)