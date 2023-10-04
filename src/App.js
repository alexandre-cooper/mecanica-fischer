import React, { useState } from "react";
import MenuExpansivel from '../src/components/Accordion';
import logo from '../src/assets/logo-guga.png';
import motorIcon from '../src/assets/icons/motor-svgrepo-com.svg';
import { BsFillArrowUpSquareFill, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import carMecanico from '../src/assets/undraw_automobile_repair_ywci.svg';
import suspencao from '../src/assets/icons/suspension_638481.png';
import motor from '../src/assets/icons/motor-de-carro.png';
import diagCarro from '../src/assets/icons/diagnostico-do-carro.png';
import oleo from '../src/assets/icons/indicador-de-oleo.png';
import cambio from '../src/assets/icons/cambio-de-marchas.png';
import vavula from '../src/assets/icons/valvula.png';
import freio from '../src/assets/icons/freios.png';



export default function App(){

  

  function handleSubmit(){
    alert('Ts')
  }
  function recolherMenu(){
    document.getElementById('close-menu').checked=false;
  }
  return(
    <div>
      <input type="checkbox" id="close-menu" className="close-menu" name="button" />
      <label for='close-menu' className="close-menu-label" title="close-menu" ></label>
      <header>
        <nav>
          <h1> <img className="logo" src={logo} /> </h1>
          <ul onClick={recolherMenu}>
            <li> <a href="#home">Home</a> </li>
            <li> <a href="#sobre">Sobre</a> </li>
            <li> <a href="#dicas">Dicas</a> </li>
            <li> <a href="#contato">Contato</a> </li>
          </ul>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="container-titulo">
          <h1>Bem-vindo à nossa estação de serviço!</h1>
          <h2>Oferecemos uma ampla gama de serviços para garantir que seu veículo receba o melhor serviço possível.</h2>
        </div>
      <div className="container-banner">
      <img className="home-banner" src={carMecanico} />
      </div>
      </section>

      <section className="sobre" id="sobre">
        
        <div className="container-sobre">
        <h1>Nossos serviços</h1>
        <div className="container-servicos">
          <span className="box">
            <img src={motor} className="icons-servicos" />
            <h5>Motor</h5>
          </span>
          <span className="box">
            <img src={suspencao} className="icons-servicos" />
            <h5>Suspenção</h5>
          </span>
          <span className="box">
            <img src={motorIcon} className="icons-servicos" />
            <h5>Injeção</h5>
          </span>
          <span className="box">
            <img src={diagCarro} className="icons-servicos" />
            <h5>Diagnóstico de computador.</h5>
          </span>
          <span className="box">
            <img src={oleo} className="icons-servicos" />
            <h5>Óleo</h5>
          </span>
          <span className="box">
            <img src={cambio} className="icons-servicos" />
            <h5>Cambio</h5>
          </span>
          <span className="box">
            <img src={vavula} className="icons-servicos" />
            <h5>Ajuste de válvula.</h5>
          </span>
          <span className="box">
            <img src={freio} className="icons-servicos" />
            <h5>Pastilha de freios.</h5>
          </span>
        </div>
        </div>   

      </section>

      <section className="dicas" id="dicas">
        <div className="dicas-container">
        <div>
        <h1>Você sabia?</h1>
        </div>
          <div className="container-menu-expansivel">
          <MenuExpansivel /> </div> 
          </div>
      </section>
      
      <section className="contato" id="contato">
        
        <div className="contato-container" id="contatoForm" method="get" action="mailto:teste@mail.com" target="_blank">
        <h1>Fale Conosco!</h1>
        <h3>
        Se você tem alguma dúvida, sugestão, reclamação ou consideração, preencha o formulário abaixo que teremos o maior prazer de falar com você.
        </h3>
        <form className="container-inputs">
        <input type="text" id="nome" name="nome" placeholder="nome..." ></input>
        <input type="text" id="contato" name="contato" placeholder="digite seu email..." ></input>
        <textarea name="descricao" id="descricao" ></textarea>
        <button type="submit" value="click" id="enviar">Enviar</button>
        </form>
        <div className="contatos-links-sociais">
          <a href="https://wa.me/65993053421" target="_blank"> <BsWhatsapp size={30}/> </a>
          <a href="https://www.instagram.com/gugamecanico/" target="_blank"> <BsInstagram size={30}/> </a>
        </div>
        </div>
      </section>
      <footer>
      <p>Copyright © Alexandre Brasil 2023</p>
      <a className="botao-topo" href="#home"><BsFillArrowUpSquareFill size={30}/> Voltar ao topo </a>
      </footer>
    </div>
  )
}