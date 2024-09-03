import React from "react";
import CardTarefa from "../../Components/CardTarefa";
import PainelNavegacao from "../../Components/PainelNavegacao";
import { Typography, Box } from "@mui/material";
import Button from '@mui/material/Button';

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
                 
                    <Typography  variant="h4">Lista de Tarefas</Typography>


                    <Button variant="contained">Novo</Button>

                </Box>

            </Box>


            <CardTarefa />

        </Box>

    );


}

export default PaginaTarefa;