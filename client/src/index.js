import React from 'react';
import ReactDOM from 'react-dom';
import Register from './pages/Register/Register';
import { GlobalStyle } from './styles/global';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import CardContainer from './components/CardContainer/CardContainer';

axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    {/* Área de renderização dinamica */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        
        <CardContainer title='Jogos'><Card image='https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/pt_BR/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?v=2021122417' title='Super Mario™ 3D World + Bowser’s Fury' price='299,00'/>
        <Card image='https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/pt_BR/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?v=2021122417' title='Super Mario™ 3D World + Bowser’s Fury' price='299,00'/>
        <Card image='https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/pt_BR/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?v=2021122417' title='Super Mario™ 3D World + Bowser’s Fury' price='299,00'/>
        <Card image='https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/pt_BR/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?v=2021122417' title='Super Mario™ 3D World + Bowser’s Fury' price='299,00'/>
        <Card image='https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/pt_BR/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?v=2021122417' title='Super Mario™ 3D World + Bowser’s Fury' price='299,00'/>
        <Card image='https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/pt_BR/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?v=2021122417' title='Super Mario™ 3D World + Bowser’s Fury' price='299,00'/>
        <Card image='https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/pt_BR/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?v=2021122417' title='Super Mario™ 3D World + Bowser’s Fury' price='299,00'/>
        <Card image='https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/pt_BR/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?v=2021122417' title='Super Mario™ 3D World + Bowser’s Fury' price='299,00'/>
        
        </CardContainer>
        
        } />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
