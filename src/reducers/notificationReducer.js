import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers: {
        notificationCreator(state, action) {
            const notification = action.payload
            console.log("notificationReducer/notificationSlice:notification:", notification)
            return notification 
        },
        notificationRemover() {                                
            return initialState                                             // could also use return action.payload, if the payload is ''
        }
    }
})

export const setNotification = (content, seconds) => {                      // 6.19
    return dispatch => {                                                        // NB! You can call this "horse" if you want, it'll still work -> no need to import useDispatch, that is
        dispatch(notificationCreator(`you upvoted "${content}"`))
        setTimeout(() => {dispatch(notificationRemover())}, 1000*seconds)       // the parameter is seconds, whereas timeout uses milliseconds
    }
}

export const { notificationCreator, notificationRemover } = notificationSlice.actions
export default notificationSlice.reducer