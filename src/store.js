import { configureStore } from '@reduxjs/toolkit' // 6b 2nd half; for redux toolkit
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer' // 6b; filter
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({  
    reducer: {    // NOTE! this combines anecdoteReducer and filterReducer just like the "old" one was combineReducers, above
      anecdotes: anecdoteReducer,    
      filter: filterReducer,
      notification: notificationReducer
    }
  })

  export default store