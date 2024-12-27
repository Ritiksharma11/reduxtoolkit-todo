import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Date.now(),
                text: action.payload,
            };
            state.push(todo)
        },

        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;