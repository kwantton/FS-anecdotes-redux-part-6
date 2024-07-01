import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux' // 6b; combineReducers!
import { Provider } from 'react-redux'
import App from './App'

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer' // 6b; filter

const reducer = combineReducers({  anecdotes: anecdoteReducer,  filter: filterReducer}) // 6b
const store = createStore(reducer)

//const store = createStore(anecdoteReducer) // OLD; now we have a combined reducer (6b)!
// store.subscribe(() => console.log(store.getState()))
console.log("main.jsx")

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)