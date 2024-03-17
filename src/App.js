import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import BlogList from './components/BlogList'; 

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works/>
      <BlogList />
      <Contact />
    </div>
  );
}

export default App;