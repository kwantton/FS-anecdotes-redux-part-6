import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

// - main imports App
// - store has been created in main.jsx, and provided to App via <Provider store={store}></Provider>

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App