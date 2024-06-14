import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Mapa from '../Componentes/Mapa';
import estilos from './Localizacao.module.css'
import {Sensor} from './Sensor'
import { Link } from 'react-router-dom';

export function Localizacao() {
    const [pontos, setPontos] = useState([]);
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

                const sensores = response.data;
                const pontos = sensores.map(sensor => ({
                    latitude: sensor.latitude,
                    longitude: sensor.longitude,
                    tipo: sensor.tipo,
                    localizacao: sensor.localizacao,
                }));
                setPontos(pontos);
                setLoading(false);
            } catch (err) {
                setError(err);
                console.log(err);
                setLoading(false);
            }
        }

        fetchSensores();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar os dados: {error.message}</div>;
    }

    return (
        <>
            <div className={estilos.mapa}>
                <h1 className={estilos.titulo}>Mapa de sensores
                </h1>
                <Mapa pontos={pontos} />
            </div>
            <Sensor/>
        </>

    );
}
