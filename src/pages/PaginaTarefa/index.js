import React from "react";
import CardTarefa from "../../Components/CardTarefa";
import PainelNavegacao from "../../Components/PainelNavegacao";
import { Box } from "@mui/material";

function PaginaTarefa() {

    return (

        <Box>
            <PainelNavegacao />

            <div>
                <h1 align="center"> Listagem de Tarefas </h1>
            </div>

            <CardTarefa />


        </Box>

    );


}

export default PaginaTarefa;