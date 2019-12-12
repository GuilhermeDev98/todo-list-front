import React from 'react'

import Button from '../Button/'

export default props => {
    if(props.done){
        return (
            <Button icon="undo" size="sm" type="warning" onClick={() => props.editDoneTodo(props._id, props.done)} marginRight="2"/>
        )
    }else{
        return (
            <Button icon="check" size="sm" type="success" onClick={() => props.editDoneTodo(props._id, props.done)} marginRight="2"/>
        )
    }
}