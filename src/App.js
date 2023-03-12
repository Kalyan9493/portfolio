import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact'
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
