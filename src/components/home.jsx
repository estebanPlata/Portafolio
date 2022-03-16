import style from "../styles/home.module.css"
import { DoubleColumn } from "./componentsItems/grids/doubleColumn"
import { RedesSociales } from "./componentsItems/redesSociles"

export function Home(){
    return (
        <div id="inicio">
            <DoubleColumn />
            <div class="burbujas">
                <div class="burbuja"></div>
                <div class="burbuja"></div>
                <div class="burbuja"></div>
                <div class="burbuja"></div>
                <div class="burbuja"></div>
                <div class="burbuja"></div>
                <div class="burbuja"></div>
                <div class="burbuja"></div>
                <div class="burbuja"></div>
                <div class="burbuja"></div>
            </div>
        </div>
    )
}