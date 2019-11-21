import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import multi from "redux-multi";

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/* Middlewares
 * 
 * redux-promise-middleware: Serve para tratar Promises.
 * redux-multi: Serve para dar um dispatch em mais de uma action dentro de um mesmo
 *              action creator.
 * redux-thunk: Serve para, quando tiver mais de uma action sofrendo dispatch dentro
 *              de um mesmo action creator, as Promises serem resolvidas de forma 
 *              sequencial.
 * 
 */

const store = createStore(reducers, devTools, 
    applyMiddleware(promise, multi, thunkMiddleware))

const godTag = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(godTag, document.getElementById('app'))