import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== '') {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='footer'>
                    <Box paddingTop={1} className='footer2'>
                        <Typography variant="h5" gutterBottom className='texto3'>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box className='footer2'>
                        <a href="https://www.instagram.com/lolaai517/" target="_blank">
                            <InstagramIcon className='texto4' />
                        </a>
                        <a href="https://www.linkedin.com/in/carolina-aizawa-moreira-9b0624179/" target="_blank">
                            <LinkedInIcon className='texto4' />
                        </a>
                    </Box>
                </Box>
                <Box className='footer3'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" gutterBottom className='texto3'>© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom className='texto3'>brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;