import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

// - main imports App
// - store has been created in main.jsx, and provided to App via <Provider store={store}></Provider>

const App = () => {
  console.log("-----ENTERING App.jsx-----")
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App