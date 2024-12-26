import Header from './components/header/Header'
import Cursor from './components/cursor/Cursor'
import Hero from './components/hero/Hero'

function App() {
  return (
    <div className="page-wrapper">
      {/* <div className="preloader">
        <div className="box"></div>
      </div> */}
      <Cursor />
      <Header />
      <Hero />
    </div>
  )
}

export default App