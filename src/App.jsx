import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Nav from "./components/Nav";
import Contato from "./Routes/Contato";
import Error from "./Routes/Error"
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Produtos from "./Routes/Produtos";
import Sobre from "./Routes/Sobre";

function App() {

  return (

  <Router>
    <Nav/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </main>
    <Footer/>
  </Router>    
    
  )
}

export default App
