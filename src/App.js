import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Menu from './components/Menu/'
import Routes from './Routes'

export default props => (
    <div className="container">
        <Menu/>
        <Routes/>
    </div>
)