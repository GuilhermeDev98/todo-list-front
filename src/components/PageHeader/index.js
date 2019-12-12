import React from 'react'

export default props => (
    <header className="page-header">
        <h2>{props.name} <small style={{fontSize: '16px'}}>{props.small}</small></h2>
        <hr/>
    </header>
)