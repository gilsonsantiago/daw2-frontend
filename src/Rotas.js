import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

import './App.css';

import PaginaLogin    from "../src/pages/PaginaLogin";
import PaginaCadastro from "../src/pages/PaginaCadastro";
import PaginaTarefa   from "../src/pages/PaginaTarefa";

const Rotas = () => {
   return(
       <BrowserRouter>       
        <div align="center">
            <ul className="menu">
                <li> <Link to='/'>Login</Link> </li>
                <li> <Link to='/cadastro'>Cadastro</Link></li>
                <li> <Link to='/tarefa'>Tarefa</Link></li>
            </ul>
         </div>
         <Routes>
            <Route element={<PaginaLogin />}     path="/" exact />
            <Route element={<PaginaCadastro />}  path="/cadastro" />
            <Route element={<PaginaTarefa />}    path="/tarefa" />    
        </Routes>          
       </BrowserRouter>
   )
}
export default Rotas;