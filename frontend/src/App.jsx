<<<<<<< HEAD
import './App.css'
import Login from './components/login'
// import './components/login.css'

function App(){



  return(
    <>
      <Login/>
      
    </>
  )
  }

export default App
=======
import Header from "./Header"
import Sidebar from "./Sidebar"
import Product from "./Product"

export default function App() {
  return (
    <div className="app">
    <Header/>
    <Sidebar />
    <div className="xyz">
    <Product />
    <Product />
    
    </div>
    </div>
    
  )
}
>>>>>>> 0a84cb1ac6e32e3ec24c06efcf32a4e2aaef479b
