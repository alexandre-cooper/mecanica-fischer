import React from "react";
import logo from '../src/assets/logo.png';
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
        <h1>Você sabia?</h1>
        <h2>Quando um carro deve ser reparado?</h2>
        <h3>Existem várias categorias de diagnósticos e reparos de veículos que precisam ser realizados em determinadas situações:</h3>
        <p>
        1. Reparação e diagnóstico de serralheria. Essas medidas são realizadas quando são detectadas avarias decorrentes do desgaste de peças e se manifestam por batidas, sons incomuns, fluxos de líquidos, folgas entre componentes ou alterações na controlabilidade do veículo.
        </p>
        <p>
        2. Reparo atual ao comprar um carro usado ou antes de uma viagem.
        </p>
        <p>
          3. Inspeção e manutenção sazonais. Antes do início da estação fria ou quente, é necessário trocar os pneus, atualizar o fluido e realizar diagnósticos dos mecanismos.
        </p>
        <p>
        4. Reparação de carroçarias para mossas ou riscos na carroçaria para devolver um aspeto apresentável e completo ao veículo. 
        </p>
        <p>
        Isso está longe de ser uma lista completa de diagnósticos de carros. Se não houver avarias visíveis ou sintomas de mau funcionamento, recomenda-se a manutenção programada anualmente ou a cada 10-15 km. quilometragem Isso permitirá que você mantenha o desempenho da máquina e detecte possíveis defeitos nos estágios iniciais.
        </p>
        <h1>O custo do trabalho de diagnóstico e reparo do carro</h1>
        <p>
        Ao escolher um serviço de carro, um fator importante é o custo de manutenção do carro. Ao mesmo tempo, é importante que o diagnóstico e o reparo dos carros não sejam tão baratos quanto com tarifas transparentes. Se toda a lista de preços com tipos individuais de trabalho e serviços complexos estiver escrita no site, isso indica que a empresa é honesta com você e se preocupa. Assim o cliente saberá qual o valor a navegar no que diz respeito às medidas necessárias. No serviço de carros Wegarstol, todos os preços dos serviços de reparo estão detalhados na tabela abaixo. Você também pode visitar uma página separada "
        </p>
        </div>
      </section>
      
      <section className="contato" id="contato">
        
        <div className="contato-container">
        <h1>Fale Conosco!</h1>
        <h3>
        Se você tem alguma dúvida, sugestão, reclamação ou consideração, preencha o formulário abaixo que teremos o maior prazer de falar com você.
        </h3>
        <div className="container-inputs">
        <input
        placeholder="Digite seu nome..." />
        <input
        placeholder="Digite seu nome..." />
        <input 
        placeholder="Digite seu nome..." />
        <textarea
        placeholder="Mensagem..."/>
        <button>Enviar</button>
        </div>
        <div className="contatos-links-sociais">
          <a href="https://wa.me/65992792383" target="_blank"> <BsWhatsapp size={30}/> </a>
          <a href="https://www.instagram.com/gugamecanico/" target="_blank"> <BsInstagram size={30}/> </a>
        </div>
        </div>
      </section>
      <footer>
      Copyright © Alexandre Brasil 2023
      <a className="botao-topo" href="#home"><BsFillArrowUpSquareFill size={30}/> Voltar ao topo </a>
      </footer>
    </div>
  )
}