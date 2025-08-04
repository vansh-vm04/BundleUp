import Sidebar from "./components/ui/Sidebar"
import Home from "./pages/Home"
import { Route,Routes, useLocation } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CreateContentModal from "./components/ui/CreateContentModal"
import ShareContentModal from "./components/ui/ShareContentModal"
import ToastMessage from "./components/ui/ToastMessage"

function App() {
  const location = useLocation();
  const sidbarRoutes = ['/','/video','/audio','/blog','/tweet','/other']
  const showSidbar:boolean = sidbarRoutes.includes(location.pathname);
  return (
  <div className="flex bg-black/20">
   {showSidbar && <Sidebar/>}
   <CreateContentModal/>
   <ShareContentModal/>
   <ToastMessage/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video' element={<Home/>}/>
      <Route path='/audio' element={<Home/>}/>
      <Route path='/tweet' element={<Home/>}/>
      <Route path='/blog' element={<Home/>}/>
      <Route path='/other' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
  </div>
  )
}

export default App
