import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import PastWork from './components/PastWork';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <PastWork />
      <Skills />
      <Footer/>
    </div>
  );
}

export default App;
