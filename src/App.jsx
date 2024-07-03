import { useEffect } from 'react'                                     // 6c 1st; json-server
import Filter from './components/Filter'                              // 6b
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
// import anecdoteService from './services/anecdotes'                 // 6c 1st OLD
// import { setAnecdotes } from './reducers/anecdoteReducer'          // 6c 1st OLD
import { useDispatch } from 'react-redux'                             // 6c 1st
import { initializeAnecdotes } from './reducers/anecdoteReducer'      // 6c 2nd; 6.16

// - main imports App
// - store has been created in main.jsx, and provided to App via <Provider store={store}></Provider>

const App = () => {

  const dispatch = useDispatch()  // 6c, fetch all anecdotes at the very start (json-server)

  // useEffect(() => {            // OLD: 6c 1st half
  //   anecdoteService      
  //   .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))  
  // }, []) // [] ensures this is called ONCE, at the beginning, to initialize, and not after that

  useEffect(() => {
    dispatch(initializeAnecdotes()) // returns a dispatch with "const anecdotes = await anecdoteService.getAll(); dispatch (setAnecdotes(anecdotes))"
  }, [])

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