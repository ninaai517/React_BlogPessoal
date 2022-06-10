import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Services';
import UserLogin from '../../model/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Actions';

function Login(){

    let navigate = useNavigate();
    const dispatch  = useDispatch();
    const [token, setToken] = useState('');

    //useState-> função Hook responsável por fazer o CONTROLE dos estados de um componente, ou seja, torna esse estado manipulável. 
    const[userLogin, setUserLogin] = useState<UserLogin>(
        /*userLogin -> estado inicial da componente; setUserLogin -> função que altera o estado da componente userLogin;
            useState<UserLogin> -> UserLogin refere-se ao arquivo ts da pasta Models. 
            ...()-> parametros do useState inicial. Add as variáveis da Model como zerado nesse caso que sofrerá atualizações graças ao
            ...setUserLogin;
        */
        {
            id: 0,
            usuario: '',
            senha: '',
            token: '',
        })
    
        //updateModel -> trabalha em conjunto com o useState
        function updatedModel(e:ChangeEvent<HTMLInputElement>){ 

            /*  HTMLInputElement -> é uma interface em TS que faz a manipulação dos elementos Input do HTML como p. exemplo na tag <TextField>
                {} -> acrescentado o método da function setUserLogin: o que fará ? o que ela manipulará ? */

            setUserLogin({
                ...userLogin, //'...' sprade operator faz uma desestruturação, isto é, ele espalha todos os atributos dentro de user login pro set user login
                [e.target.name]:e.target.value 
            }) 

                //e.target.name -> objeto c/ o name do campo. .value -> o dado inserido pelo usuário. 
           //...usada para fazer alteração das informações dentro do State (dados de login)

        }

        useEffect(()=>{
            if(token !== ''){
                dispatch(addToken(token));
                navigate('/home')
            }
        }, [token])

       //onSubmit-> é uma function responsável por enviar os dados de Login à API que, validará se o usuário digitado é válido.     
        async function onSubmit(e:ChangeEvent<HTMLFormElement>){//FormElement pois trata-se de um envio de dados. 
            e.preventDefault(); //e.preventDefault() -> previne que o botão atualize a tela, para que não perca as informações enviadas. 
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
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />    
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />  
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