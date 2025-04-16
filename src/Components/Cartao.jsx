import React from "react";
import './Cartao.css';
import logo1 from "../assets/joao silva.jpg"
function Cartao(){
    return( 
        <div className="business-card">
        <div className="profile-section">
         <img src={logo1} alt=""  className="profile-img"/> 
        
    
        </div>
        <div className="info-section">
          <h1>João da Silva</h1>
          <h2>Desenvolvedor Full Stack</h2>
          <p>📞 (11) 91234-5678</p>
          <p>📧 joao@email.com</p>
          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="btn linkedin"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
              LinkedIn
            </a>
            <a
              href="https://wa.me/5511912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
              />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
  ) 
};
export default Cartao;

