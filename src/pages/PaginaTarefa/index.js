import React from "react";
import CardTarefa from "../../Components/CardTarefa";
import PainelNavegacao from "../../Components/PainelNavegacao";
import { Typography, Box } from "@mui/material";
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


//import Grid from '@mui/material/Grid';

import { useNavigate } from "react-router-dom";
import Cadastro        from "../PaginaCadastro";


function PaginaTarefa() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

  //  const navigate = useNavigate();

    return (

        <Box>
            <PainelNavegacao />

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    padding: "40px",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >

                <Box
                    sx={{
                        width: "70%",
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'space-between'

                    }}
                >
                 <Typography  variant="h4">
                    Lista de Tarefas
                 </Typography>
                 
                 <Button variant="contained" onClick = { () => handleClickOpen()}>Novo</Button>

                </Box>

            </Box>

            <CardTarefa />

            <Box  sx={{
                        width: "75%",
                        padding : "10px",
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'space-between'

                    }}
            >
               <Dialog

                    open={open}                  
                >
                    <DialogTitle > Cadastro de Tarefas </DialogTitle>

                    <DialogContent>

                        <Cadastro fechar= {handleClose} />   
                    
                    </DialogContent>    
               
                </Dialog>

           </Box>           

        </Box>

    );


}

export default PaginaTarefa;