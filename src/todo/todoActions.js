import axios from 'axios'

import apiUrls from '../consts'

const URL =  `${process.env.PRODUCTION ? apiUrls.API_URL : apiUrls.LOCAL_API_URL}/todos`

console.log('API URL:', URL)

export const changeDescription = event => {
  return {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
}

export const searchTodo = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description ? `&description__regex=/${description}/` : description
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(res => dispatch({ type: 'TODO_SEARCHED', payload: res.data }))
  }
}

export const addTodo = description => {
  return dispatch => {
    axios.post(URL, { description })
      .then(res => dispatch(cleanDescription()))
      .then(res => dispatch(searchTodo()))
  }
}

export const cleanDescription = () => ([{ type: 'CLEAN_DESCRIPTION' }, searchTodo()])

export const deleteTodo = todoId => {
  return dispatch => {
    axios.delete(`${URL}/${todoId}`)
      .then(res => dispatch(searchTodo()))
  }
}

export const togglePendency = (todo) => {
  const todoDone = todo.done ? false : true
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: todoDone })
      .then(res => dispatch(searchTodo()))
  }
}