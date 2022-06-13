// import logo from './logo.svg';

import './App.css'
import CardsContainer from './components/CardsContainer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardsContainer />
    </div>
  )
}

export default App
