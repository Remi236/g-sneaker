import logo from '/assets/nike.png'
import './styles/App.css'
import { Products, Carts } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>G Sneakers</h1>
        </div>
      </header>
      <main className="App-main">
        <div className="container">
          <div className="main-section-wrap">
            <Products />
            <Carts />
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <p className="copyright">
          © 2023 by Remi Kykoyubi. All rights reversed
        </p>
      </footer>
    </div>
  )
}

export default App
