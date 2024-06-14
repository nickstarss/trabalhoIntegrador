import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import estilos from './VisuSensor.module.css';
import seta from '../assets/ArrowUp.svg';

import { Link } from 'react-router-dom';

export function VisuSensor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [sensorData, setSensorData] = useState({});

  const obterDadosSensor = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.get(`http://127.0.0.1:8000/api/sensores/${id}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSensorData(response.data);
    } catch (err) {
      console.error('Erro ao obter o sensor', err);
    }
  };

  useEffect(() => {
    obterDadosSensor();
  }, [id]);

  return (
    <>
      <h1 className={estilos.titulo}>Visualizar sensor</h1>
      <div className={estilos.conteiner}>
        <div className={estilos.subconteiner1}>
          <label>Tipo:</label>
          <p className={estilos.info}>{sensorData.tipo}</p>

          <label>Mac Address:</label>
          <p className={estilos.info}>{sensorData.mac_address}</p>

          <label>Latitude:</label>
          <p className={estilos.info}>{sensorData.latitude}</p>

          <label>Longitude:</label>
          <p className={estilos.info}>{sensorData.longitude}</p>

          <label>Localização:</label>
          <p className={estilos.info}>{sensorData.localizacao}</p>
        </div>

        <div className={estilos.subconteiner2}>
          <label>Responsável:</label>
          <p className={estilos.info}>{sensorData.responsavel}</p>

          <label>Unidade Medida:</label>
          <p className={estilos.info}>{sensorData.unidade_medida}</p>

          <label>Observação:</label>
          <p className={estilos.info}>{sensorData.observacao}</p>

          <div>
            <label>Status Operacional:</label>
            <p className={estilos.info}>{sensorData.status_operacional ? 'Ativo' : 'Inativo'}</p>
          </div>
        </div>
      </div>
        <Link className={estilos.voltar} to='/inicial/visusensor'>
            <img src={seta} alt='seta para esquerda'/>   
            <span>Voltar</span>
        </Link>
    </>
  );
}