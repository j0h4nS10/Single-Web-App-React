
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Listlink } from './pages/Arrays'

import Navigationrouter from './utils/Navigationrouter'


function App() {
  
  return (<>
  <Navigationrouter props={Listlink}></Navigationrouter>
    </>
  )
}

export default App
