import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App