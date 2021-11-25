import {createStore} from 'redux'
import todosReducer from '../reducers/todos.reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(todosReducer, devTools);