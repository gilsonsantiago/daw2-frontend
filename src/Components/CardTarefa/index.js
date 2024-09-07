import * as React from 'react';
import { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

import Dados from "../../Dados/DadosTarefas.json";

const columns = [
  {
    field: 'id',
    headerName: '#',
    width: 150
  },
  {
    field: 'descricao',
    headerName: 'Descrição',
    width: 600
  },
  {
    field: 'status',
    headerName: 'Situação',
    width: 130
  }, 
];


function CardTarefa() {

  const [rows, setRows] = useState(Dados)

  /*useEffect(() => {
    const fetchRepos = async () => {
      const repos = await fetch('http://localhost:3700/tarefas' , { method: 'GET',
        headers: {
        'Accept' : 'application/json' ,
        'Content-Type' : 'application/json' ,
        'Access-Control-Allow-Origin'  : '*' 
        }})

        console.log(repos);
      const data = await repos.json()
      setRows(data)
    }

    fetchRepos();

  }) */

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid
        sx={{ width: '75%' }}
        alignItems="center"
        container
        justifyContent="center"

      >
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            width: "75% !important"
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}

        />
      </Grid>

    </Box>
  )

}

export default CardTarefa;
