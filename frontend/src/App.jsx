import Header from './components/header/Header'
import Cursor from './components/cursor/Cursor'
import Hero from './components/hero/Hero'
import Blogs from './components/blogs/Blogs'
import ScrollTop from './components/scrolltop/ScrollTop'

function App() {
  return (
    <div className="page-wrapper">
      {/* <div className="preloader">
        <div className="box"></div>
      </div> */}
      {/* <Cursor /> */}
      <Header />
      <Hero />
      <Blogs />
      <ScrollTop />
    </div>
  )
}

export default App