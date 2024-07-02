import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationCreator } from '../reducers/notificationReducer'
import { notificationRemover } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm =  () => {                            // props:in vois antaa tälle! Koska perus React-komponentti.
  const dispatch = useDispatch()
  
  const addAnecdote = async event => {                        // 6c: async, since now we're using json-server, and services/anecdotes.createNew
    event.preventDefault()                              // so that the page doesn't automatically reload
    const content = event.currentTarget.anecdote.value  // works because name=anecdote below // OLD. In 6c, we take json-server into use BUT this still works of course c:
    const anecdoteObject = await anecdoteService.createNew(event.currentTarget.anecdote.value) // DON'T FORGET AWAIT...
    console.log("AnecdoteForm addAnecdote anecdoteObject:", anecdoteObject)
    // const content = anecdoteObject.content
    console.log("AnecdoteForm addAnecdote content:", content)
    event.target.anecdote.value = ''             // reset the field so that it's empty before the user starts typing in the next one. NOTE! currentTarget doesn't work anymore, since there's a new event after the above axios! Damn..
    dispatch(createAnecdote(anecdoteObject))
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