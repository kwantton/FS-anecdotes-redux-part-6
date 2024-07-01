import { useSelector, useDispatch } from 'react-redux'  // useSelector to select stuff from the state, see below
import { createVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => { // propsit olis käytettävissä tarvittaessa kans
    console.log("ENTERING AnecdoteList")
    const dispatch = useDispatch()                // use dispatch to send stuff to the store (store stores the state; reducer dispatches actions to store)
    const anecdotes = useSelector(({filter,anecdotes}) => {
        if (filter === '') {
            return anecdotes
        } else {
            const regexObj = new RegExp(filter)
            console.log("       filter:", filter)
            return anecdotes.filter(blog => 
                regexObj.test(blog.content)
            )
        }}
    ) // 6b; state.anecdotes, since there's now state.anecdotes and state.filter. (Older (previous) case was: all the premade anecdotes by default; see anecdoteReducer)
    const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes) // sorting based on the number of votes

    const vote = (id) => {
        console.log('vote', id) 
        dispatch(createVote(id))  // store.dispatch is not usable here or in main - just write "dispatch". Why? I dunno.                                                                
      }
    
    return (
      <>
        {sortedAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>  {/* tänne dispatch? */}
            </div>
          </div>
        )}
        <h2>create new</h2>
      </>)   
}

export default AnecdoteList