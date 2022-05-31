import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css'; //Importando o arquivo css da pasta home

function Home() { //um componente só retorna 1 elemento
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f7f1e3" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#fd79a8", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#fd79a8", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#fd79a8", backgroundColor: "#f7f1e3", color: "#fd79a8" }}>Ver Postagens</Button>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.pinimg.com/564x/bf/a4/d1/bfa4d1e5f3d4388f3ba865c21f537ee9.jpg" alt="" width="500px" height="500px" />
                </Grid>

                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>

            </Grid>
        </>
    );
}

export default Home;

