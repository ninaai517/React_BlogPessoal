import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Services';
import UserLogin from '../../model/UserLogin';
import './Login.css';

function Login(){

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const[userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: '',
        })
    
        function updateModel(e:ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]:e.target.value //'...' sprade operator faz uma desestruturação, isto é, ele espalha todos os atributos dentro de user login pro set user login
            }) //usada para fazer alteração das informações dentro do State (dados de login)

        }

        useEffect(()=>{
            if(token != ''){
                navigate('/home')
            }
        }, [token])

        async function onSubmit(e:ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            
            try{
                await login(`/usuarios/logar`, userLogin, setToken)
              
                alert('Usuário logado com sucesso!');
            } catch(error){
                alert('Erro de autenticação ao logar! Tente novamente.');
            }
        } 

    return (
        <Grid container direction='row' className='login'>
            <Grid alignItems='center' xs={6} >
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom  component='h3' align='center' className='texto'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=>updateModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=>updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                             <Button type='submit' variant='contained' color='primary'>Logar</Button>
                         </Box>
                    </form>

                    <Box className='texto2' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Box>
                            <Link to='/cadastrousuario' className='text-decorator-none'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='texto'>Cadastre-se</Typography>
                            </Link>
                        </Box>    
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6}  className='imagemLogin'></Grid>
        </Grid>
    );
}

export default Login;