import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from '../template/Grid'
import ButtonIcon from '../template/ButtonIcon'
import { changeDescription, searchTodo, addTodo, cleanDescription } from "./todoActions";

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler (e) {
        const { addTodo, searchTodo, cleanDescription } = this.props
        if (e.key === 'Enter')
            e.shiftKey ? searchTodo(description) : addTodo()
        else if (e.key === 'Escape')
                cleanDescription()
    }

    componentWillMount() {
        this.props.searchTodo()
    }

    render() {
        const { addTodo, searchTodo, description } = this.props

        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input type="text" id="description" className="form-control"
                            value={this.props.description}
                            placeholder="Adicione uma tarefa" 
                            onChange={this.props.changeDescription}  
                            onKeyUp={this.keyHandler}/> 
                </Grid>
                <Grid cols="12 3 2">
                    <ButtonIcon onClick={() => addTodo(description)} style="primary" icon="plus"></ButtonIcon>
                    <ButtonIcon onClick={() => searchTodo(description)} style="info" icon="search"></ButtonIcon>
                    <ButtonIcon onClick={this.props.cleanDescription} style="default" icon="close"></ButtonIcon>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, searchTodo, addTodo, cleanDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)