import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Login } from '../Paginas/Login';
import { Sensor } from '../Paginas/Sensor';
import { Inicial } from '../Paginas/Inicial';
import { CadastrarSensor } from '../Paginas/CadastrarSensor';
import { Localizacao } from '../Paginas/Localizacao';
import { Filtro } from '../Paginas/Filtro'; 
import { AlterarSensor } from '../Paginas/AlterarSensor';
import { Main } from '../Componentes/Main';

 export function Rotas() {
    return (
        <Routes>

            <Route path='/' element={ <Login /> } />        

            <Route path='inicial' element={ <Inicial /> } >
                <Route index element={ <Main /> } />
                <Route path='visusensor' element={ <Sensor /> } />
                <Route path='cadsensor' element={ <CadastrarSensor /> } />
                <Route path='localizacao' element={ <Localizacao /> } />
                <Route path='filtro' element={<Filtro />} />        
                <Route path="alterar-sensor/:id" element={<AlterarSensor />} />
                
            </Route>    

        </Routes>
)
}


