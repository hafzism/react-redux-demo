import { createSlice } from "@reduxjs/toolkit";
const taskSlice=createSlice({
    name:"tasks",
    initialState:{
        items:[]
    },

    reducers:{
        addTask:(state,action) =>{
            state.items.push({
                id: Date.now(),
                text:action.payload,
                completed:false
            })
        },
        deleteTask:(state,action) =>{
            state.items = state.items.filter(
                task => task.id !== action.payload
            )
        },
        toggleTask:(state,action)=>{
            const task = state.items.find(
                task => task.id === action.payload
            )
            if(task) task.completed = !task.completed
        }
    }
})

export const {addTask, deleteTask, toggleTask} = taskSlice.actions
export default taskSlice.reducer