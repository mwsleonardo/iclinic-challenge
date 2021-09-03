import React from "react"
import "./header.css"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="main-info">
                <h1>Sua vida sempre bela</h1>
                <Typed 
                className="typed-text"
                strings={[ "Compromisso", "Respeito", "Humanização", "Comprometimento", "Ética", "Responsabilidade" ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />

                <a href="" className="btn-main-offer">Agende sua consulta</a>
            </div>
        </div>
    )
}

export default Header
