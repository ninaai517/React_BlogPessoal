import React from 'react';
import './Home.css'; //Importando o arquivo css da pasta home

function Home(){ //um componente só retorna 1 elemento
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src='https://st.depositphotos.com/2110015/2702/v/600/depositphotos_27029057-stock-illustration-origami-paper-cranes.jpg' alt='imagem tela Home' className='img'/>
        </>    
    );
}

export default Home;

