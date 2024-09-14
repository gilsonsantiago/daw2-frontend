import * as React from 'react';
import { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';

// import Dados from "../../Dados/DadosTarefas.json";
import Api from '../../services/api';

function CardTarefa() {

  const [rows, setRows] = useState([])

  const [clickedRow, setClickedRow] = useState();

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    setClickedRow(row);
    alert("Realmente deseja executar esta ação?");
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

  const [dado1, setDado1] = useState([]);

  useEffect(() => {

    // setRows(data);

    //console.log(Api.readTarefa().);  

    Api.readTarefa().then(({ data }) => {

      /*
      console.log('DATA');
      console.log(response.data.data);
      //setRows(response.data.data);
      console.log("ATRIBUTOS");
      console.log(data.data.data[0].attributes);

      const resposta = response.data.data[0].attributes;
      */

      //   console.log(data.data);

      setDado1(data.data)

      //   setRows(data.data);

    })

  }, [])

  dado1.map((objeto) => console.log(objeto));

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
