import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Invoice from "@/pages/Invoice"
import Task from "@/pages/Task"

function App() {
  return (
    <Router>
      <nav className="p-4 flex gap-4 border-b">
        <Link to="/task">Task</Link>
        <Link to="/invoice">Invoice</Link>
      </nav>

      <Routes>
        <Route path="/task" element={<Task />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Router>
  )
}

export default App