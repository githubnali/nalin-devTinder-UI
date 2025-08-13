import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App() {

  return (
  <>

  <BrowserRouter basename="/">
    <Routes>
      <Route path='/' element={<Body/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Route>
      {/* <Route path='/login' element={<div>this is login page</div>}/>
      <Route path='/test' element={<div>this is test page</div>}/> */}
    </Routes>
  
  </BrowserRouter>
  </>
  )
}

export default App
