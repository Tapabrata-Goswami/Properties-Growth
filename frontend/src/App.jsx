import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/blog/:slug' element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App