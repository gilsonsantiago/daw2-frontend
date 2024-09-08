import React from "react";

import TextField from '@mui/material/TextField';
import { Box, Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';


function PaginaCadastro( { fechar }){

  const reader = new FileReader();
  
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
              type="email"
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