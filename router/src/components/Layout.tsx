import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div className="App">
          <header>
        <ul>
            <li>
              <a href="/home" >Inicio</a>
              <ul>
                <li><a href="/home/formulario" >Formulario</a></li>
                <li><a href="/home/perfil" >Perfil</a></li>
              </ul>
            </li>
            <li>
              <a href="/about " >Acerca de mi</a>
              <ul>
                <li><a href="/about/bio" >Bio</a></li>
                <li><a href="/about/trabajo" >Mi Trabajo</a></li>
                <li><a href="/about/tips" >Tips para profesionales</a></li>
              </ul>
              </li>
            <li>
              <a href="/exitCases" >Casos de exito</a>
              <ul>
                <li><a href="/exitCases/clientes" >Clientes</a></li>
                <li><a href="/exitCases/logros" >Logros</a></li>
                <li><a href="/exitCases/colaborar" >Como colaborar</a></li>
              </ul>
              </li>
            <li>
              <a href="/contact" >Contacto</a>
              <ul>
                <li><a href="/contact/redes" >Formulario</a></li>
                <li><a href="/contact/dejaUnMensaje" >Deja un mensaje</a></li>
                <li><a href="/contact/llamame" >Llamame</a></li>
              </ul>
              </li>
        </ul>
          </header>
    
          <section className="hero">
            <Container>
              <Row>
                  <Outlet/> 
              </Row>
            </Container>
          </section>
    
          <footer>
            {/* Información de contacto y enlaces */}
          </footer>
        </div>
      );
};
