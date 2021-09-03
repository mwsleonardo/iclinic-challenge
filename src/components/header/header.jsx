import React from "react"
import "./header.css"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="main-info">
                <h1>Clínicas de Michael</h1>
                <Typed 
                className="typed-text"
                strings={[ "Profissionais de confiança", "Acessibilidade e transparência", "Atendimento personalizado", "Valorizamos sua felicidade" ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />

                <a href="" className="btn-main-offer">Conheça nossas clínicas</a>
            </div>
        </div>
    )
}

export default Header
