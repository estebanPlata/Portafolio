import style from "./doubleColumn.module.css";
import ReactPlayer from "react-player";
import portadaImg from "../../../img/portada.jpg"
import { RedesSociales } from "../redesSociles";
import fotoPerfil from "../../../img/fotoPerfil.jpg"
export function DoubleColumn(){
    return(
        <div className={style.dobleColumn}>{/* componente principal */}
            <div className={style.dobleColumnItem}>
                <div>
                    <p>Hola, soy</p>
                    <p>Esteban Plata.</p>
                    <p>Ingeniero en Automatización y desarrollo web</p>
                </div>
            </div>
            <div className={style.dobleColumnItem}>
                <div className={style.conteinerImg}>
                    <img src={fotoPerfil}  className={style.img}/>
                </div>
                 <div className={style.parrafos}>
                    <p>Esteban Plata.</p>
                    <p>Ingeniero en Automatización y desarrollo web Universidad de Cundinamarca</p>
                    <p>eaplata20@gmail.com</p>
                    <p>(+57) 320 704 7788</p>
                </div>
                <RedesSociales />
            </div>
        </div>
    )
}