import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import router from './router'

function App() {
  return (
    /* Depois retirar o nome/class temporaria container, teste do routerProvider */
    <div className='container' RouterProvider router={router}>
    <Header/>
    <h3>Teste</h3>
    <Footer/>
    </div>
  )
}

export default App


