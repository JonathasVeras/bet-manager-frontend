import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/home/Home"

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}