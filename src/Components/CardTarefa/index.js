import * as React from 'react';
import { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';

// import Dados from "../../Dados/DadosTarefas.json";
import Api, { readTarefa } from '../../services/api';

function CardTarefa() {

  const [rows, setRows] = useState([])
  const [clickedRow, setClickedRow] = useState();

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    setClickedRow(row);
    alert("Realmente deseja modificar o estado?");
  };

  const onButtonDelete = (e, row) => {
    e.stopPropagation();
    setClickedRow(row);
    alert("Realmente deseja apagar?");
  };

  const opcoes = [
    {
      "id": 1,
      "situacao": "Tarefa em Aberto"
    },
    {
      "id": 2,
      "situacao": "Fazendo"
    },
    {
      "id": 3,
      "situacao": "Encerrada"
    }
  ];

  const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 60
    },
    {
      field: 'descricao',
      headerName: 'Descrição',
      width: 550
    },
    {
      field: 'situacao',
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
            onClick={(e) => onButtonDelete(e, params.row)}
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



 useEffect(() => {

     lerDados();
   
  }, []) 

 
  /************************************************ */
  function lerDados(){

     readTarefa("")
     .then(({data}) => {
                        const da = data.data
                        const novada = da.map((d) => ({id: d.id, nome : d.attributes.nome, descricao : d.attributes.descricao, situacao : d.attributes.si }))
                        setRows(novada)                       
                      })
     .catch((error) => console.log(error))   
  }

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