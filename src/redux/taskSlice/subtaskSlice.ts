import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState  ={
    subTaskName : "",
    completed : false
}

export const subtaskSlice = createSlice({
    name : "board",
    initialState,
    reducers : {
      changeStStatus : (state , action:PayloadAction<boolean>)=>{
        console.log("changing status")
         state.completed = action.payload
         console.log(state.completed)
      },

    }
})

export const {changeStStatus} = subtaskSlice.actions;
export default subtaskSlice.reducer;