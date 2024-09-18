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
import api from "../../services/api";

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

function PaginaLogin() {

  const [email, setEmail] = useState("user1@user.com");
  const [senha, setSenha] = useState("123456");

  const navigate = useNavigate();
  const { login } = useAuth;

  const fazerLogin = () => {

    if (email.trim() !== "" && senha.trim() !== "") {
      api.login(
        {
          identifier: email,
          password: senha,
        }
      ).then((response) => {

        login(response.data.jwt);

        navigate("/private/tarefa");
      }).catch((error) => {
        console.log(error);
      })

    }


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
            Login
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