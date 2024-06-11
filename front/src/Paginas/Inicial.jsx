import estilos from './Inicial.module.css'
import {Cabecalho} from '../Componentes/Cabecalho'
import {Lateral} from '../Componentes/Lateral'
import { Main } from '../Componentes/Main'

import { Outlet } from 'react-router-dom';



export function Inicial() {
  return (
    <>
      <Cabecalho />
      <div className={estilos.gridConteiner}>
        
        <aside>
          <Lateral />
        </aside>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
