import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div id=""><Home /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <Footer />
    </>
  );
}

export default App;
