import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./pages/Welcome"
import TestGrid from "./pages/TestGrid"
import TestFlex from "./pages/TestFlex"
import TestSelect from "./pages/TestSelect"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/test-grid" element={<TestGrid />} />
        <Route path="/test-flex" element={<TestFlex />} />
        <Route path="/test-select" element={<TestSelect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
