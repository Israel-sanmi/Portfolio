import NavBar from './Components/Head/NavBar'
import { BrowserRouter } from 'react-router-dom'
import PathRoute from './PathRoute'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <PathRoute/>
      </BrowserRouter>
    </>
  )
}

export default App
