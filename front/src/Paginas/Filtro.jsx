import React, { useState } from 'react';
import axios from 'axios';
import estilos from './Filtro.module.css';

export function Filtro() {
    const [filters, setFilters] = useState({
        responsavel: '',
        status_operacional: false,
        tipo: '',
        localizacao: '',
    });

    const [sensors, setSensors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFilters({
            ...filters,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.post('http://127.0.0.1:8000/api/sensor_filter/', filters, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setSensors(response.data);
        } catch (error) {
            console.error('Error fetching sensors:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={estilos.container}>
            <form onSubmit={handleSubmit} className={estilos.formulario}>
                <div className={estilos.container1}>
                    <div>
                        <label>Responsável</label>
                        <input type="text" name="responsavel" value={filters.responsavel} onChange={handleChange} className={estilos.input} />
                    </div>

                    <div className={estilos.operacional}>
                        <label>Status Operacional *</label>
                        <input type="checkbox" name="status_operacional" checked={filters.status_operacional} onChange={handleChange} /> 
                    </div>
                </div>

                <div className={estilos.container2}>
                    <div>
                        <label>Tipo</label>
                        <input type="text" name="tipo" value={filters.tipo} onChange={handleChange} className={estilos.input}/>
                    </div>

                    <div className={estilos.localizacao}>
                        <label>Localização</label>
                        <input type="text" name="localizacao" value={filters.localizacao} onChange={handleChange} className={estilos.input} />
                    </div>
                    <button className={estilos.botao} type="submit">Filtrar</button>
                </div>

            </form>

            <div className={estilos.conteiner}>
                <h1>Sensores Filtrados</h1>
                <div className={estilos.sensorContainer}>
                    {sensors.map((sensor) => (
                    <div key={sensor.id} className={estilos.sensorCard}>
                        <p><strong>Sensor {sensor.id}</strong></p>
                        <p>{sensor.tipo}</p>
                        <p>{sensor.localizacao}</p>
                        <p>{sensor.responsavel}</p>
                    </div>
                    ))}
                </div>
            </div>

            {loading && <div className={estilos.conteiner}><h1>Carregando...</h1></div>}
            {error && <div className={estilos.conteiner}><h1>Erro ao buscar sensores: {error.message}</h1></div>}

        </div>
    );
};


