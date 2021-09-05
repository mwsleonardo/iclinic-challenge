import React from "react"
import reactDom from "react-dom";
// IMPORT PARA OS COMPONENTES VISUAIS DO HEADER
import "./header.css"
import "bootstrap/dist/css/bootstrap.min.css";
// IMPORT REACT TYPED
import Typed from "react-typed"


const Header = () => {
    return (
        
        <div className="headerWrapper"> {/* CONFIGURAÇÃO DO BACKGROUND */}
        
            <div className="main-info"> {/* TODAS INFORMAÇÕES CONTIDAS DENTRO DO HEADER */}
                <h1>Sua vida sempre bela</h1> {/* TÍTULO CENTRALIZADO DO HEADER */}
                <a href="" className="btn-main-offer">Agende sua consulta</a> {/* BOTÃO DE "OFERTA" PARA REDIRECIONAMENTO */}
                <Typed 
                className="typed-text"
                strings={[ "Compromisso", "Respeito", "Humanização", "Comprometimento", "Ética profissional", "Responsabilidade" ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />  {/* FINAL -> CONFIGURAÇÃO DO TEXTO EM REACT-TYPED */}
            </div>
        </div>
    )
}

export default Header
