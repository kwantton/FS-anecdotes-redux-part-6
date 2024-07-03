import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";          // 6.19

const initialState = ''
const dispatch = useDispatch                        // 6.19

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers: {
        notificationCreator(state, action) {
            const notification = action.payload
            console.log("notificationReducer/notificationSlice:notification:", notification)
            return notification 
        },

        notificationRemover(state, action) {                                // kind of unneccessary, could just use notificationCreator
            return initialState                                             // could also use return action.payload, if the payload is ''
        }
    }
})

export const setNotification = (content, seconds) => {                      // 6.19
    return dispatch => {
        dispatch(notificationCreator(`you upvoted "${content}"`))
        setTimeout(() => {dispatch(notificationRemover())}, 1000*seconds)       // the parameter is seconds, whereas timeout uses milliseconds
    }
}

export const { notificationCreator, notificationRemover } = notificationSlice.actions
export default notificationSlice.reducer