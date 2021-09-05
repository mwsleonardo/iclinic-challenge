import React from "react"
import './form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Schema from '../schema'

import axios from 'axios' 
import cors from 'cors'




const Formulario = () => {

    function onBlurCep(ev, setFieldValue) {
        const {value} = ev.target;
        const cep = value?.replace(/[^0-9]/g, '')
        
        if(cep?.length !== 8) {
            return;
        }
        fetch('https://cors.bridged.cc/https://viacep.com.br/ws/' + cep + '/json/')
            .then((res) => res.json())
            .then((data) => {
                setFieldValue('logradouro', data.logradouro);
                setFieldValue('bairro', data.bairro);
                setFieldValue('localidade', data.localidade);
                setFieldValue('uf', data.uf);

        });
    }



    function onSubmit( values, actions ) {
        console.log('SUBMIT', values);
    }




    return (
        <div className="forms">
            <div className="text-center">
                <h1>Cadastre uma clínica</h1>
                <p>Lembrando que o cadastro está sujeito a análise, alteração ou remoção pelos nossos administradores.</p>
            </div>
            <Formik 
                validationSchema={Schema}
                onSubmit={onSubmit}
                initialValues= {{
                    nome: "",
                    cpf: '',
                    email: '',
                    capital: '',
                    codigo: '',
                    cep: '',
                    logradouro: '',
                    numero: '',
                    complemento: '',
                    bairro: '',
                    localidade: '',
                    uf: '',
                }}


                
                render={({ values, setFieldValue }) => (
                    
                    <Form> 
                    <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-xs-12">
                                
                            <Field 
                            initialValue={''}
                            id="nome"
                            type="text"
                            className="form-control"
                            placeholder="Nome da clínica"
                            nome="nome"
                            value={values.nome}
        
                            />

                            <ErrorMessage name="nome"/>
                            
                            <Field 
                            id="cpf"
                            type="text"
                            className="form-control"
                            placeholder="CPF do responsável"
                            cpf="cpf"
                            value={values.cpf}
                            />

                            <ErrorMessage name="cpf"/>
                            
                            <Field 
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="E-mail do responsável"
                            email="email"
                            value={values.email}
                            />

                            <ErrorMessage name="email"/> 
                            
                            <Field
                            id="capital" 
                            type="text"
                            className="form-control"
                            placeholder="Capital social da Clínica"
                            capital="capital"
                            value={values.capital}
                            />
                            
                            <ErrorMessage name="capital"/>

                           
                        </div>
                        <div className="col-md-6 col-xs-12">
                            
                            <Field 
                            id="cep"
                            type="text"
                            className="form-control"
                            placeholder="CEP"
                            cep="cep"
                            value={values.cep}
                            onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                            
                            />
                            
                            <Field 
                            id="logradouro"
                            type="text"
                            className="form-control"
                            placeholder="Logradouro"
                            logradouro="logradouro"
                            value={values.logradouro}
                            />
                            
                            <Field 
                            id="numero"
                            type="text"
                            className="form-control"
                            placeholder="Número"
                            numero="numero"
                            value={values.numero}
                            />
                            
                            <Field 
                            id="complemento"
                            type="text"
                            className="form-control"
                            placeholder="Complemento"
                            complemento="complemento"
                            value={values.complemento}
                            />
                            
                            <Field 
                            id="bairro"
                            type="text"
                            className="form-control"
                            placeholder="Bairro"
                            bairro="bairro"
                            value={values.bairro}
                            />
                            
                            <Field 
                            id="localidade"
                            type="text"
                            className="form-control"
                            placeholder="Cidade"
                            localidade="localidade"
                            value={values.localidade}
                            />
                           
                            <Field 
                            id="uf"
                            className="form-control"
                            placeholder="UF"
                            uf="uf"
                            value={values.uf}
                            component="select"> 
                            <option value={null}>Estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="DF">Distrito Federal</option>                           
                            </Field>
                            

                            <button className="btn-main-offer contact-btn" 
                            type="submit">
                            Cadastrar clínica
                            </button>
                            
                    </div>
                    </div>   
                    </div>
                </Form>    




                )}
            
            
            
            />
           

        
        </div>
    )
}

export default Formulario
