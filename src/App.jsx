import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
    </Routes>
    
    </>
  )
}

export default App
