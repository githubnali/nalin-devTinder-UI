import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import { NotFound } from "./components/NotFound"
function App() {

  return (
  <>
    <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path='/' element={<Body/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/auth" element={<AuthForm />} />
              <Route path='/feed' element={<Feed/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path="/connections" element={<Connections/>}/>
              <Route path="/requests" element={<Requests/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
          </Routes>
        
        </BrowserRouter>
    </Provider>
  </>
  )
}

export default App
