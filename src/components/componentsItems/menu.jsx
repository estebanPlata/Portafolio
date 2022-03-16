import style from "../../styles/app.module.css"


export function Menu() {
  return (
    <ul className={style.listaMenu}>
      <li> <a href="#inicio"> Inicio</a></li>
      <li> <a href="#sobreMi">Sobre mi</a></li>
      <li> <a href="#experiencia">Experiencia</a></li>
    {/*   <li><a href="#proyectos">Proyectos</a></li>
      <li>Aptitudes</li> */}
    </ul>
  );
}
