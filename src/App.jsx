import Filter from './components/Filter'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

// - main imports App
// - store has been created in main.jsx, and provided to App via <Provider store={store}></Provider>

const App = () => {
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