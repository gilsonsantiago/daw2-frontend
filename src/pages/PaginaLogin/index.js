import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../../security/AuthProvider';
import api, { readTarefa, login, createTarefa} from "../../services/api";

import { logar} from '../../security/AuthProvider';

import { useNavigate } from 'react-router-dom';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Banabuie
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


/************************************************************ */
function PaginaLogin() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();  

  const { setToken } = useAuth();

  const fazerLogin = () => {  
 
   if (email.trim() !== "" && senha.trim() !== "") {

      login(
        {
          identifier: email,
          password: senha,
        }
      ).then((response) => {

     //  console.log(response.data.jwt);    
         
         setToken(response.data.jwt);         

         navigate("/private/tarefa")       

      }).catch((error) => {       

          console.log(error);
          
      })
      
    }            

  }

  function logado(tk){
    //  logar(tk);
      return (
         navigate("/private/tarefa")
      );

  } 


  return (

    <ThemeProvider theme={defaultTheme}>

      <Container component="main" maxWidth="xs">

        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Acessar
          </Typography>

          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Seu email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}

            />
        
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setSenha(e.target.value)}
            />
          
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => { fazerLogin() }}
            >
              Acessar
            </Button>

            <Grid container>

              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>

              <Grid item>
                <Link href="usuario" variant="body2">
                  {"Não tem conta ? Cadastra-se"}
                </Link>
              </Grid>

            </Grid>

          </Box>

        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />

      </Container>

    </ThemeProvider>
  );
}

export default PaginaLogin;