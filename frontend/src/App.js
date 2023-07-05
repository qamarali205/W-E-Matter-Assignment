
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Map from './components/Map';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path='/' element={<Map /> } />
        <Route path='/logout' element={<h1>Logout components</h1>} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
  
      </Routes>
      
      </BrowserRouter>
      <Footer />   
    </div>
  );
}

export default App;