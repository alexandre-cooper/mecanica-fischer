import React from "react";
import logo from '../src/assets/logo.png'

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
        <h4>Motor, suspenção e injeção</h4>

      </section>

      <section className="sobre" id="sobre">
        <div className="container-sobre">
        <h2>
        Somos uma oficina mecânica especializada em manutenção de motores automotivos localizada em Lucas do Rio Verde.
        </h2>
        </div>

      </section>

      <section className="dicas" id="dicas">
        <h1>Você sabia?</h1>
        <h2>ajlhjdhasjh</h2>
      </section>
      <section className="contato" id="contato">
        <h1>Fale Conosco</h1>
        <div>
        <h3>
        Se você tem alguma dúvida, sugestão, reclamação ou consideração, preencha o formulário abaixo que teremos o maior prazer de falar com você.
        </h3>
        </div>
      </section>
    </div>
  )
}