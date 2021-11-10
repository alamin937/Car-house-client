import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
      
            <Box style={{backgroundColor:'black', color:'white', padding:'40px', marginTop:'70px'}} sx={{ flexGrow: 1 }}>
               
        <Grid style={{width:'80%', margin:'0 auto'}} container spacing={2}>
          <Grid style={{textAlign:'left'}} item xs={12} md={4}>
            <Typography sx={{mb:3}} variant='h6'>
                CONTACT
            </Typography>
            <Typography >
               24/7 Street Road <br />
               Mirpur, Dhaka <br />
               ZipCode: 1216 <br />
               Phone: 01777777777
            </Typography>
          </Grid>
          <Grid  style={{textAlign:'left'}} item xs={12} md={4}>
          <Typography sx={{mb:3}} variant='h6'>
                MENU
            </Typography>
            <Typography >
               Home <br />
               About <br />
              Cars <br />
               Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
              <Typography sx={{mb:3}} variant='h6'>
               SOCIAL LINK
              </Typography>
          <Typography style={{fontSize:'30px'}}>
            <span style={{marginLeft:'40px'}}><i class="fab fa-facebook"></i></span>
            <span style={{marginLeft:'40px'}}><i class="fab fa-twitter"></i></span>
            <span style={{marginLeft:'40px'}}><i class="fab fa-instagram"></i></span>
            <span style={{marginLeft:'40px'}}><i class="fab fa-whatsapp"></i></span>
            </Typography>
        </Grid>
        </Grid>
       
        
      </Box>
      
    );
};

export default Footer;