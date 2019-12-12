import React from 'react'

export default props => {
    if(!props.hide){
        return (
            <button
                className={`btn btn-${props.type || 'primary'} ${props.size ? 'btn-'+props.size : ''} ${props.marginRight ? 'mr-'+props.marginRight : ''} `}
                onClick={props.onClick}>
                <i className={`fa fa-${props.icon}`} />
            </button>
        )
    }else{
        return null
    }
}