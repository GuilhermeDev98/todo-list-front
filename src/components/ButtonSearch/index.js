import React from 'react'

import Button from '../Button/'

export default props => {
    if(props.searching){
        return (
            <Button icon="times" size="sm" type="warning" onClick={props.clearSearchTodo} />
        )
    }else{
        return (
            <Button icon="search" size="sm" type="success" onClick={props.handleSearchTodo} />
        )
    }
}