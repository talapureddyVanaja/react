
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/body/home';
import About from './components/body/about';
import Service from './components/body/service';
import contact from './components/body/contact';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route path='/react'  exact Component={Home}/>
            <Route path='about' exact Component={About}/>
            <Route path='service' exact Component={Service}/>
            <Route path='contact' exact Component={contact}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
