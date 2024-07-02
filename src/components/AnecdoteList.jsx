import { useSelector, useDispatch } from 'react-redux'  // useSelector to select stuff from the state, see below
import { createVote } from '../reducers/anecdoteReducer'
import { notificationCreator } from '../reducers/notificationReducer'
import { notificationRemover } from '../reducers/notificationReducer'

const AnecdoteList = () => { // propsit olis käytettävissä tarvittaessa kans
    console.log("ENTERING AnecdoteList")
    const dispatch = useDispatch()                // use dispatch to send stuff to the store (store stores the state; reducer dispatches actions to store)
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter === '') {
            return anecdotes
        } else {
            const regexObj = new RegExp(filter)
            console.log("       filter:", filter)
            return anecdotes.filter(anecdote => 
                regexObj.test(anecdote.content)
            )
        }}
    ) // 6b; state.anecdotes, since there's now state.anecdotes and state.filter. (Older (previous) case was: all the premade anecdotes by default; see anecdoteReducer)
    console.log("   anecdotes:", anecdotes) // ok
    console.log("   anecdotes[0]:", anecdotes[0])
    
    // NB! https://stackoverflow.com/questions/53420055/error-while-sorting-array-of-objects-cannot-assign-to-read-only-property-2-of
    // " Because the array is frozen in strict mode, you'll need to copy the array before sorting it:
    // array = array.slice().sort((a, b) => b.stats.speed - a.stats.speed) " BELOW: !
    
    // const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes) // sorting based on the number of votes // OLD! worked before slice-bs, now doesn't
    // const sortedAnecdotes = anecdotes.slice().sort((a,b) => b.votes - a.votes) // new - works! so, "slice()" is needed... dumb
    const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes) // new - works! so, "slice()" is needed... dumb
    const vote = (id) => {
        console.log('vote', id) 
        dispatch(createVote(id))  // store.dispatch is not usable here or in main - just write "dispatch". Why? I dunno.                                                                
        dispatch(notificationCreator(`you upvoted "${anecdotes.filter(anecdote => anecdote.id === id)[0].content}"`)) // 6.13
        setTimeout(() => {dispatch(notificationRemover())}, 5000)
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