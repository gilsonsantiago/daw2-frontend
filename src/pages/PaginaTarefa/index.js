import React from "react";
import CardTarefa from "../../Components/CardTarefa";
import PainelNavegacao from "../../Components/PainelNavegacao";

function PaginaTarefa(){

    return(

        <>
            <PainelNavegacao />

            <div>
                <h1 align="center"> Listagem de Tarefas </h1>
            </div>

            <div>
                <CardTarefa />
            </div>

        </>       
       
    );


}

export default PaginaTarefa;