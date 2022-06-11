import React, {useEffect} from 'react';
import  {Link, useNavigate} from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css'; //Importando o arquivo css da pasta home
import { PaddingOutlined } from '@mui/icons-material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

function Home() { //um componente só retorna 1 elemento

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
      if (token == "") {
        toast.error("Você precisa estar logado!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,

        });
          navigate("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3"  className='titulo'>Um blog para compartilhar origamis!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5"  className='titulo2'>Clique aqui para iniciar uma postagem</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className='text-decorator-none'>
                        <Button variant="outlined" className='botao '>Ver Postagens</Button>
                        </Link>
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

