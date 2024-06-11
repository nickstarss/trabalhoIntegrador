import estilos from './Main.module.css'
import { Localizacao } from '../Paginas/Localizacao';

export function Main(){
    var dateString = new Date().toLocaleTimeString({timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");
    return(
        <>
            <div className={estilos.titulo}>
                <h1>Bem-vindo(a) ao</h1>
                <h1 className={estilos.titulo2}>SENAI Smart City</h1>
            </div>

            <div className={estilos.informacoes}>
                <div className={estilos.container1}>
                    <p>Horário</p>
                    <h1>{formattedString}</h1>
                </div>

                <div className={estilos.container2}>
                    <p>Temperatura</p>
                    <h1>34 °C</h1>
                </div>

                <div className={estilos.container3}>
                    <p>Sensor</p>
                    <h1>Sensor 1</h1>
                </div>
            </div>

            <Localizacao />
        </>
    )
}