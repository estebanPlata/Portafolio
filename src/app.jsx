/* import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"; */
import { Home } from "./components/home";
import { Proyectos } from "./components/projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from "./components/componentsItems/menu";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import style from "./styles/app.module.css"
import { AboutMe } from "./components/aboutMe";
import { Experiencia } from "./components/experiencia";
import { Knowledge } from "./components/knowledge";
import { RedesSociales } from "./components/componentsItems/redesSociles";

export function App(){
     const[dropdown, setDropdown] = useState(false);
    const abrirCerrarDropdown = () =>{
        setDropdown(!dropdown);
    } 
    return(
        <div>
            <header>
                <div className={style.encabezado}>
                    <h1>Esteban Plata</h1>
                        <Menu />   
                        <Dropdown className={style.listaBoton} isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg" direction="left">
                            <DropdownToggle caret className={style.hamburguesa}>
                                Menu
                            </DropdownToggle>
                            <DropdownMenu className={style.desMenu}>
                                <DropdownItem className={style.desMenuItem}><a href="#inicio">Inicio</a></DropdownItem><DropdownItem divider />
                                <DropdownItem className={style.desMenuItem}><a href="#sobreMi">Sobre mi</a></DropdownItem><DropdownItem divider/>
                                <DropdownItem className={style.desMenuItem}><a href="#experiencia">Experiencia</a></DropdownItem><DropdownItem />
                               {/*  <DropdownItem className={style.desMenuItem}><a href="#proyectos">Proyectos</a></DropdownItem><DropdownItem divider/>
                                <DropdownItem className={style.desMenuItem}>Aptitudes</DropdownItem><DropdownItem/> */}
                            </DropdownMenu>
                        </Dropdown>                 
                </div>
            </header>  
            <main>
                <Home />
                <AboutMe />
                <Experiencia />
           {/*      <Proyectos />
                <Knowledge />  */}                    
             
            </main>
            <footer>

            </footer>
        </div>
    );
}