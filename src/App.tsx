import React from 'react';
import logo from './logo.svg';
import './App.css';



import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import PrivateRoutes from './auth/PrivateRoutes';
import MyAccount from './pages/private/MyAccount';
import Login from './pages/Login';
import { AuthProvider } from './auth/AuthContext';

const Home= React.lazy(()=>import('./pages/Home'));

function App() {
  return (
    <div className="App">
      <Header/>
   
   <BrowserRouter>
   <AuthProvider>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<About/>} />
    <Route element={<PrivateRoutes/>}>
    <Route path='/my-account' element={<MyAccount/>} />
    </Route>
   </Routes>
   </AuthProvider>
   
   </BrowserRouter>
     
     <Footer/>
    </div>
  );
}

export default App;
