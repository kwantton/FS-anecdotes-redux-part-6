const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {                                // turns each anecdote into an object
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)             // a list of objects! [{content:string, id:int, likes:int}, {....}] 

// FEED SOMETHING TO THIS REDUCER TO USE IT. default state 
const anecdoteReducer = (state = initialState, action) => {

  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {                                         // OMA! mallina noteReducer
    case 'NEW_ANECDOTE': {
      const anecdote = action.payload                           // only "content" (the text of the anecdote) is provided to the reducer
      const newAnecdote = asObject(anecdote)
      return [...state, newAnecdote]                            // state is [{},{},{}...]
      }

    case 'VOTE': {                                              // OMA! mallina noteReducer
        const id = action.payload                               // määrittelin payloadiksi id:n pelkästään
        const anecdoteToVote = state.find(n => n.id === id)     // noteReducer from notesApp as a model here!
        const votedAnecdote = {
          ... anecdoteToVote,
          votes : anecdoteToVote.votes + 1
        }
        return state.map(anecdote =>                            // tämä päivittää storen uudella statella. Kun store päivitetään, view (näkymä) renderöidään uudestaan
          anecdote.id !== id ? anecdote : votedAnecdote
        )
      }  
    
    default:
      return state
  }
}

export const createVote = id => ({type: 'VOTE', payload: id}) // "action creator"; "functions that create actions are action creators"
export const createAnecdote = content => ({type: 'NEW_ANECDOTE', payload: content }) // we only send this information to anecdoteReducer; the rest of the information (id and votes:0) will be added there 

export default anecdoteReducer