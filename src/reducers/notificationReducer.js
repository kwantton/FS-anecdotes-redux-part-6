import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers: {
        notificationCreator(state, action) {
            const notification = action.payload
            return notification 
        },
        notificationRemover(state, action) {    // kind of unneccessary, could just use notificationCreator
            return initialState                 // could also use return action.payload, if the payload is ''
        }
    }
})
export const { notificationCreator, notificationRemover } = notificationSlice.actions
export default notificationSlice.reducer