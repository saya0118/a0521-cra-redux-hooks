import {v4 as uuidv4 } from 'uuid'
import { NEW_TO_DO, COMPLETE_TO_DO } from '../action/actions'

const initState = {
    todoList: [
        {id: uuidv4() , content: 'Buy Bread', isDone: false},
        {id: uuidv4() , content: 'Buy Milk', isDone: true}
    ]
}

const todosReducer = (state = initState, action) => {
    
    switch (action.type) {
        case NEW_TO_DO:
            action.payload.id = uuidv4()
            action.payload.isDone = false

            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }

        case COMPLETE_TO_DO:
            const updatedState = state.todoList.map(todo => {
                if (todo.id === action.payload) {
                    todo.isDone = !todo.isDone;
                    return todo;
                } else {
                    return todo;
                }
            });

            console.log(updatedState)

            return {
                ...state,
                todoList: updatedState
            }
            
        default:
            return state;
    }
}

export default todosReducer