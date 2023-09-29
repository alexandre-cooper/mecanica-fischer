import React from "react";
import logo from '../src/assets/logo.png';
import motorIcon from '../src/assets/icons/motor-svgrepo-com.svg';
import { BsFillCarFrontFill } from 'react-icons/bs';
import carMecanico from '../src/assets/undraw_automobile_repair_ywci.svg';


export default function App(){
  function recolherMenu(){
    document.getElementById('close-menu').checked=false;
  }
  return(
    <div>
      <input type="checkbox" id="close-menu" className="close-menu" name="button" />
      <label for='close-menu' className="close-menu-label" title="close-menu" ></label>
      <header>
        <nav>
          <h1> <img width={60} src={logo} /> </h1>
          <ul onClick={recolherMenu}>
            <li> <a href="#home">Home</a> </li>
            <li> <a href="#sobre">Sobre</a> </li>
            <li> <a href="#dicas">Dicas</a> </li>
            <li> <a href="#contato">Contato</a> </li>
          </ul>
        </nav>
      </header>
      <section className="home" id="home">
        <h1>Precisa de um reparo?</h1>
      </section>

      <section className="sobre" id="sobre">
        <div className="container-sobre">
        <h1>
        Somos uma oficina mecânica especializada em manutenção de motores automotivos localizada em Lucas do Rio Verde.
        </h1>
        <div className="container-servicos">
          <span><h5> <img src={motorIcon} className="icons-servicos" /> Motor</h5></span>
          <span><h5>suspenção</h5></span>
          <span><h5>injeção</h5></span>
        </div>
        </div>

      </section>

      <section className="dicas" id="dicas">
        <h1>Você sabia?</h1>
        <img src={carMecanico} />
      </section>
      
      <section className="contato" id="contato">
        
        <div className="contato-container">
        <h1>Fale Conosco!</h1>
        <h3>
        Se você tem alguma dúvida, sugestão, reclamação ou consideração, preencha o formulário abaixo que teremos o maior prazer de falar com você.
        </h3>
        <div className="contatos-links-sociais">
          <a href="https://wa.me/65992792383" target="_blank">Whatsapp</a>
          <a href="https://www.instagram.com/gugamecanico/" target="_blank">Whatsapp</a>
        </div>
        </div>
      </section>
    </div>
  )
}