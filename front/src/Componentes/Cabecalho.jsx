import estilos from './Cabecalho.module.css';
import clock from '../assets/Clock.svg';
import sensores from '../assets/Broadcast.svg';
import mapa from '../assets/Map.svg';
import mais from '../assets/Plus.svg';
import filtro from '../assets/Funnel.svg';

import { Link } from 'react-router-dom';

export function Cabecalho() {
    return (
        <header className={estilos.conteiner}>
            <Link to='/inicial'>
                <h1>SENAI Smart City</h1>
            </Link>

            <div className={estilos.textConteiner}>
                <Link className={estilos.subConteiner} to='/inicial/visusensor'>
                    <img src={sensores} alt="Sensores"/>
                    <span>Sensores</span>
                </Link>

                <Link className={estilos.subConteiner} to='/inicial/localizacao'>
                    <img src={mapa} alt="Mapa"/>
                    <span>Mapa</span>
                </Link>

                <Link className={estilos.subConteiner} to='/inicial/cadsensor'>
                    <img src={mais} alt="Registrar"/>
                    <span>Registrar</span>
                </Link>

                <Link className={estilos.subConteiner} to='/inicial/filtro'>
                    <img src={filtro} alt="Filtro"/>
                    <span>Filtro</span>
                </Link>
            </div>
        </header>
    );
}