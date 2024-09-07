import React from "react";
import TextField from '@mui/material/TextField';
import { Box, Grid, Typography } from "@mui/material";


function PaginaCadastro(){

    return(

       <Box sx={{
          width: "85%",
          padding : "10px",
          alignItems: 'center',
          justifyContent: 'space-between'

        }}
      >
         <Typography   variant="h4" >
               Cadastro de Tarefas
         </Typography>
         
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

           <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"

          />

         </Grid>


      
       </Box>  
     
       
    );

}

export default PaginaCadastro;