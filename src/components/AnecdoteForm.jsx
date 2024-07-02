import { useDispatch } from 'react-redux'
// import { createAnecdote } from '../reducers/anecdoteReducer' // NOTE! THIS EXISTS NOW TOO (BELOW) BUT: THIS WAS BUILT DIFFERENTLY BACK IN 6C FIRST HALF. The name is the same, but now it's an async action creator!
import { notificationCreator } from '../reducers/notificationReducer'
import { notificationRemover } from '../reducers/notificationReducer'
// import anecdoteService from '../services/anecdotes' // OLD: was used in 6c 1st half, but now createAnecdote takes care of this (as per 6.17)
import { createAnecdote } from '../reducers/anecdoteReducer' // 6c 2nd half, 6.17; createAnecdote = content => {return async dispatch => {const newAnecdote = await anecdoteService.createNew(content) {** creates it in the json-server, then updates the state (store) via dispatch below*}; dispatch(appendAnecdote(newAnecdote))}}}


const AnecdoteForm =  () => {                            // props:in vois antaa tälle! Koska perus React-komponentti.
  const dispatch = useDispatch()
  
  const addAnecdote = async event => {                        // 6c: async, since now we're using json-server, and services/anecdotes.createNew
    event.preventDefault()                              // so that the page doesn't automatically reload
    const content = event.currentTarget.anecdote.value  // works because name=anecdote below // OLD. In 6c, we take json-server into use BUT this still works of course c:
    // const anecdoteObject = await anecdoteService.createNew(event.currentTarget.anecdote.value) // OLD // ((DON'T FORGET AWAIT...)) // 6c 2nd half NO LONGER USED;
    // console.log("AnecdoteForm addAnecdote anecdoteObject:", anecdoteObject) // OLD
    // const content = anecdoteObject.content
    console.log("AnecdoteForm addAnecdote content:", content)
    event.target.anecdote.value = ''             // reset the field so that it's empty before the user starts typing in the next one. NOTE! currentTarget doesn't work anymore, since there's a new event after the above axios! Damn..
    // dispatch(createAnecdote(anecdoteObject))
    dispatch(createAnecdote(content))
    dispatch(notificationCreator(`you added anecdote "${content}"`))
    setTimeout(() => {dispatch(notificationRemover())}, 5000)
}

  return (
    <form onSubmit={addAnecdote}> {/** addAnecdote: oma  */}
                
      <div>
          <input name='anecdote'/>
      </div> {/** oma: name='anecdote', jotta voidaan käyttää inpute.anecdote.value */}
      <button>create</button>
    </form>
  )
}


export default AnecdoteForm