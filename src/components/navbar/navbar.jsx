import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"
import Logo from "../images/logo.png"

// IMPORTS REACT FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
    <div className="container">
          <a class="navbar-brand" href="#"><img className="logo" src={Logo}></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}/>
          
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item active">
                <a className="nav-link" href="#">Homepage<span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Rede credenciada</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cadastro de Clínicas</a>
              </li>
              
            </ul>
          </div>
    </div>
  </nav>

  )
}

export default Navbar