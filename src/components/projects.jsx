import { RedesSociales } from "./componentsItems/redesSociles";
import style from "../styles/projects.module.css"

export function Proyectos(){
    return(
        <div id="proyectos">
            <div className={style.mainCounteiner}>{/* 3 columnaas */}
                <h1 className={style.title}>Proyectos</h1>
                <div className={style.mainCounteinerItem}></div>
                <div className={style.mainCounteinerItem}></div>
                <div className={style.mainCounteinerItem}></div>
            </div>
            <RedesSociales />
        </div>
    )
}