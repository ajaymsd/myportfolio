import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Skills from './pages/Skills';
function App() {
  return (
    <div className="App">
      
    <BrowserRouter>  
       <Header></Header>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
