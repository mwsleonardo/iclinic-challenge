import React, { useEffect, useState } from 'react'
import "./list.css"
import axios from 'axios'

const List = () => {

    const [clinicas, setClinicas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/clinicas')
        .then((response) => {
            setClinicas(response.data);
            console.log(clinicas.data)
        });

    }, []);
    
    

    return (
    <div className="list">
        <h1 className="about-list">Nossas clínicas</h1>
        <div className="class-size">
        <div class="container-list"> 
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Logradouro</th>
                    <th>Número</th>
                    <th>Bairro</th>
                </tr>
            </thead>
            

        {clinicas.map((clinica) => (
                <div className="map-list">
                    <table>
                        <tbody>
                            <tr>
                                <td>{clinica.nome}</td>
                                <td>{clinica.logradouro}</td>
                                <td>{clinica.numero}</td>
                                <td>{clinica.bairro}</td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
                    
                ))}
        </div>
        </div>
    </div>
    )
}

export default List
