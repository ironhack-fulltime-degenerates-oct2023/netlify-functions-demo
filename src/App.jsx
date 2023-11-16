

import axios from 'axios'
import './App.css'

function App() {
  
  const triggerRequest = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/apiRequestWithCredentials`)
      .then(response => {
        console.log(response.data)
      })
      .catch( e => {
        console.log(e)
      })
  }

  return (
    <>
      
      <h1>Netlify Functions</h1>

      <button onClick={triggerRequest}>Trigger API request</button>    
      
    </>
  )
}

export default App
