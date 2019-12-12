import React from 'react'

import Button from '../Button/'
import StrikeText from '../StrikeText/'
import CheckTodo from '../CheckTodo/'

export default props => {
    if(props.loadingTodos){
        return (
            <div className="p-2 text-center">
                <i className="fas fa-spinner fa-pulse fa-3x" />
                <br/>
                Carregando Tarefas
            </div>
        )
    }else{
        return (
            <>
                <hr/>
                <ul className="list-group">
                    {props.todos && props.todos.map((todo) => (
                        <li className="list-group-item" key={todo._id}>
                            <StrikeText strike={todo.done}>{todo.description}</StrikeText>
                            <div className="float-right">
                                <CheckTodo {...todo} editDoneTodo={props.editDoneTodo} />
                                <Button icon="trash" size="sm" type="danger" onClick={() => props.removeTodo(todo._id)}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}