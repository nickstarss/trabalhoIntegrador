import { useState, useEffect } from 'react';
import estilos from './Lateral.module.css';
import { Link } from 'react-router-dom';

import perfil from '../assets/pfp.svg'

export function Lateral() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            setUsername('Nome de Usuário não encontrado.');
        }
    }, []);

    return (
        <aside>
            <div className={estilos.conteiner}>
                <img src={perfil}/>
                <p className={estilos.username}>{username}</p>
            </div>

            <footer>
                <Link className={estilos.subConteiner} to='/inicial/cadsensor'>
                    Encerrar sessão
                </Link>
            </footer>
        </aside>
    );
}