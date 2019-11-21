import React from 'react'

import PageHeader from '../templates/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
    </div>
)