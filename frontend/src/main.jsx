import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Success from './components/Success.jsx'
import Fail from './components/Fail.jsx'

createRoot(document.getElementById('root')).render(
 
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/success' element={<Success/>}></Route>
    <Route path='/fail' element={<Fail/>}></Route>

   </Routes>
   </BrowserRouter>
  
)
