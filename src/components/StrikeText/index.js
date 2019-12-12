import React from 'react'

export default props => {
    if(props.strike){
        return (
            <strike>{props.children}</strike>
        )
    }else{
        return (
            props.children
        )
    }
}