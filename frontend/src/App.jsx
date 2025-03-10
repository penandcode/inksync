import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import AppHome from "./components/AppHome";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/app" element={<AppHome />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
