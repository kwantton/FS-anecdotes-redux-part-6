import axios from 'axios' // 6c, json-server

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data // returns all, duh. Go to baseUrl ('http://localhost:3001/anecdotes') to check IF your server is running (npm run server in the frontend, 6c)
}

const createNew = async (content) => {  
    const object = { content, votes: 0 }  // id should come from the server
    const response = await axios.post(baseUrl, object)  
    return response.data
}

export default { getAll, createNew }