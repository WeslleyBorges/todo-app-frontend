import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import ButtonIcon from '../template/ButtonIcon'
import { deleteTodo, togglePendency } from './todoActions'

const TodoList = props => {
    
    const renderRows = () => {
        const bagulhoList = props.list || []
        return bagulhoList.map(todo => (            
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <ButtonIcon style="success" icon="check" hide={todo.done}
                        onClick={() => props.togglePendency(todo)}>
                    </ButtonIcon>                                        
                    <ButtonIcon style="warning" icon="undo" hide={!todo.done}
                        onClick={() => props.togglePendency(todo)}>
                    </ButtonIcon>
                    <ButtonIcon style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => props.deleteTodo(todo._id)}>
                    </ButtonIcon>
                </td>
            </tr>
        ))        
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="actionButtons">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>    
        </div>
    )    
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => bindActionCreators({ deleteTodo, togglePendency }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)