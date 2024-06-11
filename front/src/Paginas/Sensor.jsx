import React, { useEffect, useState } from 'react';
import axios from 'axios';
import estilos from './Sensor.module.css';
import { Link } from 'react-router-dom';
import errorImg from '../assets/Error.png';

export function Sensor() {
    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSensores() {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.get('http://127.0.0.1:8000/api/sensores/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setSensores(response.data);
                setLoading(false);
            } catch (err) {
                let errorMessage = 'Ocorreu um erro ao carregar os dados.';
                if (err.response && err.response.status === 404) {
                    errorMessage = 'Os dados não foram encontrados.';
                } else if (err.response && err.response.status === 401) {
                    errorMessage = 'Você não tem permissão para acessar estes dados.';
                }
                setError(errorMessage);
                setLoading(false);
            }
        }

        fetchSensores();
    }, []);

    if (loading) {
        return <div className={estilos.erro}>Carregando...</div>;
    }

    if (error) {
        return (
        <div className={estilos.erro}>
            <img src={errorImg} className={estilos.errorImg}/>
            <div>
                <strong>Erro: </strong>{error}
            </div>
        </div>
        );
    }

    return (
        <div className={estilos.container}>
            <h1>Sensores Disponíveis</h1>
            <div className={estilos.sensorList}>
                {sensores.map(sensor => (
                    <div key={sensor.id} className={estilos.sensor}>
                        <h1 className={estilos.titulo}>Sensor {sensor.id}</h1>
                        <p>Tipo: {sensor.tipo}</p>
                        <p>Localização: {sensor.localizacao}</p>

                        <Link to={`alterar-sensor/${sensor.id}`} className={estilos.button}>Visualizar</Link>
                        <Link to={`/inicial/alterar-sensor/${sensor.id}`} className={estilos.button}>Alterar</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}