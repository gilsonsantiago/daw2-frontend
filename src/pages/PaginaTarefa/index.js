import React from "react";
import CardTarefa from "../../Components/CardTarefa";
import PainelNavegacao from "../../Components/PainelNavegacao";
import Botao from "../../Components/Botao";

function PaginaTarefa(){

    return(

        <>
            <PainelNavegacao />

            <div>
                <h1 align="center"> Listagem de Tarefas </h1>
                <Botao />
            </div>

            <div>
                <CardTarefa />
            </div>

        </>       
       
    );


}

export default PaginaTarefa;