import { useSelector, useDispatch } from 'react-redux'  // useSelector to select stuff from the state, see below
import { createVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'       // 6.19; combines notificationCreator and notificationRemover (both from notificationReducer)

const AnecdoteList = () => { // propsit olis käytettävissä tarvittaessa kans
    console.log("ENTERING AnecdoteList (component)")
    const dispatch = useDispatch()                // use dispatch to send stuff to the store (store stores the state; reducer dispatches actions to store)
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter === '') {
            return anecdotes
        } else {
            const regexObj = new RegExp(filter) // the problem with this is that you can type in bad regex, causing the whole frontend to crash c:::
            console.log("       filter:", filter)
            return anecdotes.filter(anecdote => 
                regexObj.test(anecdote.content)
            )
        }}
    )
    console.log("   anecdotes:", anecdotes) 
    console.log("   anecdotes[0]:", anecdotes[0])
    
    const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes)     // make a COPY: [...anecdotes], or anecdotes.slice() - both are ok
    const vote = id => {
        console.log('   vote id:', id) 
        dispatch(createVote(id))  
        const anecdote = anecdotes.filter(anecdote => anecdote.id === id)[0]    // non-optimal
        console.log("AnecdoteList/vote: dispatching setNotification...")
        dispatch(setNotification(`you upvoted '${anecdote.content}'`, 5))       // 6.19; content, time in seconds
        console.log("AnecdoteList/vote: COMPLETED dispatching setNotification")
      }
    
    return (
      <>
        {sortedAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} votes  {" "} {/** " " is just adding some whitespace to the end before the button */}
              <button onClick={() => vote(anecdote.id)}>vote</button>  {/* tänne dispatch? */}
            </div>
          </div>
        )}
        <h2>create new</h2>
      </>)   
}

export default AnecdoteList