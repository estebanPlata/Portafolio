import { BrowserRouter } from "react-router-dom"
import style from "../styles/experiencia.module.css"
export function Experiencia(){
    return(
        <div id="experiencia"  className={style.mainCounteiner} >
            <div className={style.mainCounteinerItem}>
                <h1 className={style.title}>Experiencia</h1>
                <div>
                    <p>
                        Febrero 2020 - Agosto 2021<br></br>
                        Domum Automation SA de CV.<br></br>
                        Programador B&R, JS, RectsJS, HTML5, CSS3.
                    </p>
                    <p>
                        Septiembre 2021 - Enero 2022<br></br>
                        ALEN INTELLIGENT SA de CV.<br></br>
                        Programador JS,ReactJS, PHP. MySQL.
                    </p>
                    <p>
                        Agosto 2021 - Enero 2022<br></br>
                        Draco Servicios SAS.<br></br> 
                        Programador JS, CSS3, HTML5, ReactJS.
                    </p>
                </div>

            </div>
            <div className={style.mainCounteinerItem}> 
                <h1 className={style.title}>Formación</h1>
                <div>
                    <p>
                        Agosto 2015 - Marzo 2021<br></br>
                        Ingeniero Electrónico<br></br> 
                        Universidad de Cundinamarca
                    </p>
                    <p>
                        Abril 2020 - Junio 2020<br></br>
                        Curso intermedio ReactJS<br></br>
                        Udemy.
                    </p>
                </div>
            </div>
        </div>
    )
}