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
