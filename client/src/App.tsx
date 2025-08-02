import Sidebar from "./components/ui/Sidebar"
import Home from "./pages/Home"
import { Route,Routes,BrowserRouter } from "react-router-dom"

function App() {
  return <BrowserRouter>
  <div className="flex">
   <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video' element={<Home/>}/>
      <Route path='/audio' element={<Home/>}/>
      <Route path='/tweet' element={<Home/>}/>
      <Route path='/blog' element={<Home/>}/>
      <Route path='/other' element={<Home/>}/>
    </Routes>
  </div>
  </BrowserRouter>
}

export default App
