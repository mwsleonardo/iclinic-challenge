import React from "react"
import reactDom from "react-dom"
import './form.css'
import { useForm } from 'react-hook-form'
import axios from 'axios' 
import cors from 'cors'



const Form = () => {



    function onBlurCep(ev) {
        const {value} = ev.target;
        if(value?.length !== 8) {
            return;
        }
        fetch('https://cors.bridged.cc/https://viacep.com.br/ws/' + value + '/json/')
            .then((res) => res.json())
            .then((data) => console.log(data));
            


    }







    return (
        <div className="forms">
            <div className="text-center">
                <h1>Cadastre uma clínica</h1>
                <p>Lembrando que somente administradores podem inserir clínicas a nossa database.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NOME DA CLÍNICA */}
                        <input 
                        id="nome"
                        type="text"
                        className="form-control"
                        placeholder="Nome da clínica"
                        nome="nome"
                        />
                        {/* CPF DO RESPONSÁVEL */}
                        <input 
                        id="cpf"
                        type="text"
                        className="form-control"
                        placeholder="CPF do responsável"
                        cpf="cpf"
                        />
                        {/* E-MAIL DO RESPONSÁVEL */}
                        <input 
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="E-mail do responsável"
                        email="email"
                        />
                        {/* CAPITAL SOCIAL DA CLINICA */}
                        <input
                        id="capital" 
                        type="text"
                        className="form-control"
                        placeholder="Capital social da Clínica"
                        capital="capital"
                        />
                        {/* CÓDIGO PARA VALIDAÇÃO */}
                        <input 
                        id="codigo"
                        type="text"
                        className="form-control"
                        placeholder="Código de segurança"
                        codigo="codigo"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* ENDEREÇO -> CEP */}
                        <input 
                        id="cep"
                        type="text"
                        className="form-control"
                        placeholder="CEP"
                        cep="cep"
                        onBlur={onBlurCep}
                        />
                        {/* ENDEREÇO -> LOGRADOURO */}
                        <input 
                        id="logradouro"
                        type="text"
                        className="form-control"
                        placeholder="Logradouro"
                        logradouro="logradouro"
                        />
                        {/* ENDEREÇO -> NÚMERO */}
                        <input 
                        id="numero"
                        type="text"
                        className="form-control"
                        placeholder="Número"
                        numero="numero"
                        />
                        {/* ENDEREÇO -> COMPLEMENTO */}
                        <input 
                        id="complemento"
                        type="text"
                        className="form-control"
                        placeholder="Complemento"
                        complemento="complemento"
                        />
                        {/* ENDEREÇO -> BAIRRO */}
                        <input 
                        id="bairro"
                        type="text"
                        className="form-control"
                        placeholder="Bairro"
                        bairro="bairro"
                        />
                        {/* ENDEREÇO -> LOCALIDADE */}
                        <input 
                        id="localidade"
                        type="text"
                        className="form-control"
                        placeholder="Localidade"
                        localidade="localidade"
                        />
                        {/* ENDEREÇO -> UF */}
                        <input 
                        id="uf"
                        type="text"
                        className="form-control"
                        placeholder="UF"
                        uf="uf"
                        />
                        <button className="btn-main-offer contact-btn" 
                        type="submit">
                        Cadastrar clínica
                        </button>
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default Form
