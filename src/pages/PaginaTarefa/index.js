import React from "react";
import CardTarefa from "../../Components/CardTarefa";
import PainelNavegacao from "../../Components/PainelNavegacao";
import { Box } from "@mui/material";
//import Grid from '@mui/material/Grid';


function PaginaTarefa() {

    return (

        <Box>
            <PainelNavegacao />

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >

                <Box
                    sx={{
                        width: "75%",
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'space-between'

                    }}
                >

                    <h1> Listagem de Tarefas </h1>

                    <button>+</button>


                </Box>

            </Box>


            <CardTarefa />

        </Box>

    );


}

export default PaginaTarefa;