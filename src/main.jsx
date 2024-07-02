import ReactDOM from 'react-dom/client'
// import { createStore, combineReducers } from 'redux' // 6b; combineReducers! OLD, 1st half
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

// OLD:
// const reducer = combineReducers({  anecdotes: anecdoteReducer,  filter: filterReducer}) // 6b OLD (1st half)
// const store = createStore(reducer) // OLD, part 6 
//const store = createStore(anecdoteReducer) // OLD; now we have a combined reducer (6b)!
// store.subscribe(() => console.log(store.getState()))

console.log("main.jsx")

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)