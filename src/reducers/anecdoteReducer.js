import { createSlice, current } from "@reduxjs/toolkit"   // 6b 2nd half! current is for console.logging from the anecdoteSlice in human-readable format
import anecdoteService from "../services/anecdotes"       // 6c 2nd half

const initialState = []

const anecdoteSlice = createSlice({  
  name: 'anecdotes',  
  initialState,  
  reducers: {  
    updateVote(state, action) {
      const changedAnecdote = action.payload
      const mappi = state.map(anecdote => 
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
      )
      return mappi
    },

    setAnecdotes(state, action) {
      return action.payload                                                         // 6c; the payload is anecdoteService.getAll.then(anecdotes => dispatch(setAnecdotes(anecdotes))), so all anecdotes from the server are dispatched using this one c:
    },

    appendAnecdote(state, action) {                                                 // 6c 2nd half; 6.17
      state.push(action.payload)
    }
  },
})

export const initializeAnecdotes = () => {                                          // 6c latter half; 6.16
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch (setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {                                          // 6c 2nd half; 6.17 NOTE! I also had to create appendAnecdote
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)                    // creates it in the json-server, then updates the state (store) via dispatch below
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const createVote = id => {                                                   // 6.18. This was originally in anecdoteSlice above in different form. In both cases of createVote, note the paramter "id": in AnecdoteList.jsx, "dispatch(createVote(id))" is called, so this works
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateVote(id)                    // response.data is returned from updateVote(id) c: DON'T FORGET AWAIT!!!! >:c
    dispatch(updateVote(updatedAnecdote))
  }
}

export const { setAnecdotes, appendAnecdote, updateVote } = anecdoteSlice.actions   // 6c 2nd half; 6.17 NOTE! I also had to create appendAnecdote, I didn't have it before..
export default anecdoteSlice.reducer
