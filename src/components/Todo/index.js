import React, { Component } from 'react'
import api from '../../services/Api'

import PageHeader from '../PageHeader/'
import Form from './Form'
import List from './List'

export default class Todo extends Component {

    state = {
        description: '',
        todos: [],
        loadingTodos: true,
        searching: false    
    }

    handleChangeInput = e => {
        this.setState({...this.state, description: e.target.value})
    }

    handleAddTodo = e => {
        e.preventDefault()
        const description = this.state.description
        api.post('todos', {description})
            .then(() => {
                this.loadTodos()
                this.setState({...this.state, description: ''})
            }
        ).catch(err => console.log(err))
    }

    loadTodos = (filters = null) => {
        api.get('todos?sort=createdAt')
            .then(res => {
                this.setState({...this.state, todos: res.data, loadingTodos: false})
            })
    }

    removeTodo = id => {
        api.delete(`todos/${id}`)
            .then(() => {
                this.loadTodos()
            }
        ).catch(err => console.log(err))
    }

    clearSearchTodo = e => {
        e.preventDefault()
        this.setState({...this.state, loadingTodos: true})
        this.loadTodos()
        this.setState({...this.state, loadingTodos: false, searching: false, description: ''})
    }

    handleSearchTodo = e => {
        e.preventDefault()
        this.setState({...this.state, loadingTodos: true, searching: true}, () => {
            const resultados = this.state.todos.filter(todo => {
                return todo.description.includes(this.state.description)
            })
            this.setState({...this.state, todos: resultados, loadingTodos: false})
        })
    }

    editDoneTodo = (id, done) => {
        done = done ? false : true

        api.put(`todos/${id}`, { done })
            .then(() => {
                this.loadTodos()
            }
        ).catch(err => console.log(err))
    }

    componentDidMount(){
        setTimeout(() => {
            this.loadTodos()
        }, 2000)
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro de Tarefas"/>
                <Form
                    searching={this.state.searching}
                    description={this.state.description}
                    handleAddTodo={this.handleAddTodo}
                    handleSearchTodo={this.handleSearchTodo}
                    clearSearchTodo={this.clearSearchTodo}
                    handleChangeInput={this.handleChangeInput} />
                <List
                    loadingTodos={this.state.loadingTodos}
                    todos={this.state.todos}
                    removeTodo={this.removeTodo}
                    editDoneTodo={this.editDoneTodo}
                    />
            </div>
        )
    }
}