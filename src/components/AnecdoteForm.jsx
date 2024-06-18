import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = () => {                          // props:in vois antaa tälle! Koska perus React-komponentti.
  const dispatch = useDispatch()
  const addAnecdote = event => {                      // OMA!
    event.preventDefault()                              // so that the page doesn't automatically reload
    const content = event.currentTarget.anecdote.value  // works because name=anecdote
    event.currentTarget.anecdote.value = ''             // reset the field
    dispatch(createAnecdote(content))
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