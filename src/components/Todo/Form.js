import React from 'react'

import Button from '../Button/'
import ButtonSearch from '../ButtonSearch/'

export default props => (
    <form className="todoForm d-flex justify-content-center">
        <div className="input-group mb-3">
            <input 
                id="description"
                className="form-control"
                placeholder="Adicione ou busque uma Tarefa"
                onChange={props.handleChangeInput}
                value={props.description} />  
            <div className="input-group-append">
                <Button icon="plus" onClick={props.handleAddTodo}/>
                <ButtonSearch
                    icon="search"
                    type="success"
                    searching={props.searching}
                    clearSearchTodo={props.clearSearchTodo}
                    handleSearchTodo={props.handleSearchTodo}/>
            </div>
        </div>
    </form>
)