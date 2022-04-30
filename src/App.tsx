import { Route, Routes } from "react-router-dom"
import MoreDetails from "./pages/MoreDetails"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path='/more-details' element={<MoreDetails/>} />
    </Routes>
  )
}

export default App
