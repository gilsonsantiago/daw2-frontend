import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import { Box, Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import api, { createTarefa } from "../../services/api";



import axios from "axios";


function PaginaCadastro({ fechar }) {

   const [descricao, setDescricao] = useState("");
   const [situacao, setSituacao] = useState("");
   const [datacada, setDatacada] = useState("");

   const handleChange = (event) => {
      setSituacao(event.target.value);
   };


   /************************************************ */
   function gravarDados() {

      const dadostarefa = {
         "data": {
            "descricao": descricao,
            "datacadastro": datacada
         }
      }

      console.log("dados: " + JSON.stringify(dadostarefa));

      axios.post("http://localhost:1337/api/jobs", {
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
         }
      },
         {
            "data": {
               "descricao": descricao,
               "datacadastro": datacada
            }
         },
      )
         .then(({ dado }) => { console.log(dado.data) })
         .catch((error) => console.log(error))
   }

   return (

      <Box sx={{
         width: "95%",
         padding: "5px",
         alignItems: 'center',
         justifyContent: 'space-between'

      }}
      >


         <TextField
            required
            margin="dense"
            id="descricao"
            name="descricao"
            label="Descrição"
            type="text"
            fullWidth
            value={descricao}
            variant="standard"
            onChange={(e) => setDescricao(e.target.value)}

         />

         <TextField
            required
            margin="dense"
            id="datacada"
            name="datacada"
            type="date"
            fullWidth
            value={datacada}
            variant="standard"
            onChange={(e) => setDatacada(e.target.value)}

         />


         <FormControl fullWidth sx={{ marginTop: "15px" }}>

            <InputLabel id="label-situacao">Situação</InputLabel>

            <Select

               labelId="demo-simple-select-label"
               id="situacao"
               name="situacao"
               value={situacao}
               label="Situação"
               onChange={handleChange}
            >
               <MenuItem value={20}>Aberta</MenuItem>
               <MenuItem value={20}>Terminada</MenuItem>

            </Select>

         </FormControl>


         <Box sx={{
            width: "85%",
            padding: "10px",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'space-between'

         }}>

            <Button variant="contained" onClick={() => { gravarDados() }}>Gravar</Button>
            <Button variant="contained" onClick={() => { fechar() }}>Sair</Button>

         </Box>

      </Box>

   );

}

export default PaginaCadastro;