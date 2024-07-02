import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationCreator } from '../reducers/notificationReducer'
import { notificationRemover } from '../reducers/notificationReducer'


const AnecdoteForm = () => {                            // props:in vois antaa tälle! Koska perus React-komponentti.
  const dispatch = useDispatch()
  const addAnecdote = event => {                        // OMA!
    event.preventDefault()                              // so that the page doesn't automatically reload
    const content = event.currentTarget.anecdote.value  // works because name=anecdote below
    event.currentTarget.anecdote.value = ''             // reset the field
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