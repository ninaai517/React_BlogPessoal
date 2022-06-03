import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css'; //Importando o arquivo css da pasta home
import { PaddingOutlined } from '@mui/icons-material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';

function Home() { //um componente só retorna 1 elemento
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3"  className='titulo'>Um blog para compartilhar origamis!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5"  className='titulo2'>Clique aqui para iniciar uma postagem</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}></Box>
                        <Button variant="outlined" className='botao'>Postar</Button>
                    </Box>

                </Grid>
                <Grid item xs={6}>
                    <img src='https://github.com/ninaai517/React_BlogPessoal/blob/main/Assets/img/Kusudama-removebg-preview.png?raw=true' alt="" width="600x" height="500px" />
                </Grid>

                <Grid xs={12} className='postagens'>
                </Grid>
                    <TabPostagem /> 
            </Grid>
        </>
    );
}

export default Home;

