import React, { useState } from 'react';
import styles from  './App.module.css';
function FalarBack(){
    const [resposta, setResposta] = useState(null);

    const getBackEnd = () =>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        };
        fetch('http://localhost:3000/teste', requestOptions)
            .then(response => response.json())
            .then(data => setResposta(data))
            .catch(error => console.log("Deu ruim", error)
        );
    
    }
    
    return (
        <div className={styles.mainDiv}>
            <h5> Simple GET Request</h5>
            <button type="button" onClick={getBackEnd}> Pegar Dados </button>
            <br />				
            <br />
            <div>
                Retornado: {resposta}
            </div>
        </div>
    );
}

export default FalarBack