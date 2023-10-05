import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Resume from './components/pages/Resume'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resume' element={<Resume />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
