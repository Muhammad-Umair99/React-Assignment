import { Routes, Route, Link } from "react-router-dom"  
import Counter from './Components/Counter'
import TubeLight from './Components/Lightbulb'
import List from './Components/ListRendering'
import './App.css'
import Todo from './Components/Todo'

function App() {


  return (
    <>
{/* Navigation Menu */}
      <nav>
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/light">Tube Light</Link> |{" "}
        <Link to="/list">List</Link> |{" "}
        <Link to="/todo">Todo</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/light" element={<TubeLight />} />
        <Route path="/list" element={<List />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
