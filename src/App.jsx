import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Main from "./Main"
function App({ className }) {
  return (
    <main className={className}>
    <Header/>
    <Home/>
    <Main/>
    <Footer/>
    </main>
  )
}

export default App
