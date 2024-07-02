import { useEffect } from 'react'                     // 6c; json-server
import Filter from './components/Filter'              // 6b
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import anecdoteService from './services/anecdotes'        // 6c
import { setAnecdotes } from './reducers/anecdoteReducer'     // 6c
import { useDispatch } from 'react-redux'             // 6c

// - main imports App
// - store has been created in main.jsx, and provided to App via <Provider store={store}></Provider>

const App = () => {

  const dispatch = useDispatch()  // 6c, fetch all anecdotes at the very start (json-server)
  useEffect(() => {    
    anecdoteService      
    .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))  
  }, []) // [] ensures this is called ONCE, at the beginning, to initialize, and not after that

  console.log("-----ENTERING App.jsx-----")
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App