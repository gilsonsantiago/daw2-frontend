import React from "react";

import TextField from '@mui/material/TextField';
import { Box, Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';

function PaginaCadastro( { fechar }){

  
   return(

       <Box sx={{
          width: "95%",
          padding : "5px",
          alignItems: 'center',
          justifyContent: 'space-between'

        }}
      >
               
         <Grid>
          
             <TextField
                autoFocus
                required
                margin="dense"
                id="descricao"
                name="descricao"
                label="Descrição"
                type="text"
                fullWidth
                variant="standard"
             />

              <TextField
                autoFocus
                required
                margin="dense"
                id="situacao"
                name="situacao"
                label="Situação"
                type="text"
                fullWidth
                variant="standard"
               />
    
         </Grid>

         <Box sx={{
              width: "85%",
              padding : "10px",
              display: "flex",
              alignItems: 'center',
              justifyContent: 'space-between'

            }}>

            <Button variant="contained" onClick={ () => { fechar() }}>Gravar</Button>
            <Button variant="contained" onClick={ () => { fechar() }}>Sair</Button>

         </Box>     
      
       </Box>       
       
    );

}

export default PaginaCadastro;