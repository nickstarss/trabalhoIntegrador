import React from 'react';
import axios from 'axios';

import estilos from './Login.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import pass from '../assets/LockSimple.svg'
import logo from '../assets/logo.svg'
import user from '../assets/User.svg'

const schemaLogin = z.object({
    usuario: z.string().min(5, 'Nome inválido, tente novamente').max(20, 'Máximo de 20 caracteres'),
    senha: z.string().min(6, 'Senha inválida, tente novamente').max(8, 'Máximo de 8 caracteres'),
});

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaLogin)
    });

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username: data.usuario,
                password: data.senha
            });

            const { access, refresh } = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            localStorage.setItem('username', data.usuario);

            console.log('Login bem-sucedido!');
            navigate('/inicial');
        } catch (error) {
            console.error('Erro de autenticação', error);
        }
    }

    return (
        <div className={estilos.conteiner}>
            <img src={logo} alt='logo da smart city'/>
            <div className={estilos.titulo}>
                <h1 className={estilos.titulo1}>Faça login para entrar na</h1>
                <h1 className={estilos.titulo2}> cidade do futuro</h1>
            </div>

            <form className={estilos.formulario} onSubmit={handleSubmit(obterDadosFormulario)}>
                <p className={estilos.textoInput}>Nome de usuário</p>
                <div className={estilos.inputWrapper}>
                    <img src={user} className={estilos.icone}/>
                    <input
                        {...register('usuario')}
                        className={estilos.campo}
                        placeholder="Digite seu nome de usuário"
                    />
                </div>
                {errors.usuario && (
                    <p className={estilos.mensagem}>{errors.usuario.message}</p>
                )}

                <p className={estilos.senha}>Sua senha</p>

                <div className={estilos.inputWrapper}>
                    <img src={pass} className={estilos.icone}/>
                    <input
                        {...register('senha')}
                        type="password"
                        className={estilos.campo}
                        placeholder="Digite sua senha"
                    />
                </div>
                {errors.senha && (
                    <p className={estilos.mensagem}>{errors.senha.message}</p>
                )}
                
                <button className={estilos.botao}>LOGIN</button>
                
            </form>
        </div>
    );
}
