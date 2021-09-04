import React, { useEffect, useState } from 'react'
import "./list.css"
import axios from 'axios'

const List = () => {

    const [clinicas, setClinicas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/clinicas')
        .then((response) => {
            setClinicas(response.data);
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
                                <td>{clinica.Nome}</td>
                                <td>{clinica.Logradouro}</td>
                                <td>{clinica.Numero}</td>
                                <td>{clinica.Bairro}</td>
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
