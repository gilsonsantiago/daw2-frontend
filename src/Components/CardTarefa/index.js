import * as React from 'react';
import { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';

import Dados from "../../Dados/DadosTarefas.json";


function CardTarefa() {

  const [rows, setRows] = useState(Dados)

  const [clickedRow, setClickedRow] = useState();

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    setClickedRow(row);
    alert("Realmente deseja executar esta ação?");
  };

  const opcoes = [
    { 
      "id" : 1,
      "situacao" : "Tarefa em Aberto"
     },
     {
      "id" : 2,
      "situacao" : "Fazendo"
     },
     {
      "id" : 3,
      "situacao" : "Encerrada"
     }
  ];

  const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 150
    },
    {
      field: 'descricao',
      headerName: 'Descrição',
      width: 550
    },
    {
      field: 'status',
      headerName: 'Situação',
      width: 130
    },
    {
      field: "deleteButton",
      headerName: "Apagar",
      description: "Apagar",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <Button
            onClick={(e) => onButtonClick(e, params.row)}
            variant="contained"
          >
            Apagar
          </Button>
        );
      }
    },
    {
      field: "mudeButton",
      headerName: "Modificar",
      description: "Modificar",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <Button sx={{ background: "red" }}
            onClick={(e) => onButtonClick(e, params.row)}
            variant="contained"
          >
            Alterar
          </Button>
        );
      }
    }
  ];



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
          pageSizeOptions={[5, 8, 10]}

        />
      </Grid>

    </Box>
  )

}

export default CardTarefa;
