/*
import style from ""; */
import { DoubleColumn } from "./componentsItems/grids/doubleColumn";
import style from "../styles/aboutMe.module.css"



export function AboutMe(){
    return(
        <div id="sobreMi" className={style.mainCounteiner}>
            <div className={style.mainCounteinerItem}>
                <p className={style.title}>Sobre mi</p>
                <br></br>
                <p>
                    Me apasiona aprender nuevas cosas, afrontar retos, poseo aptitudes y experiencia profesional necesaria para dar solucion y desarrollo a proyectos emergentes. Excelentes habilidades comunicativas, Motivado, optimista con buenas practicas de programación y trabajo en equipo, ofreciendo siempre lo mejor dentro del entorno laboral.
                 </p>
            </div>
        </div>
    )
}