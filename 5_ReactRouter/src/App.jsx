
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './componenets/Footer/Footer'
import Header from './componenets/Header/Header'

function App() {

  return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>
  )
}

export default App
