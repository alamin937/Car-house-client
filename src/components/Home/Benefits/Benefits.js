import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Benefits = () => {
    return (
        <Container sx={{mt:5}}>
            <h1>OUR BENEFITS</h1>
            <hr />
            <Box  sx={{ flexGrow: 1, mt:4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box style={{backgroundColor:'blue', color:'white', padding:'15px'}}>
            <span style={{fontSize:'40px'}}><i class="fas fa-thumbs-up"></i></span>
            <Typography variant="subtitle2" gutterBottom component="div">
                Our Customer Always <br /> 100% Satisfied
      </Typography>
      <Typography style={{textAlign:'justify'}} variant="body2" gutterBottom>
      Find Car Dealer Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.
      </Typography>
            </Box >
          </Grid>
          <Grid  item xs={12} md={4}>
          <Box style={{backgroundColor:'blue', color:'white', padding:'15px'}}>
          <span style={{fontSize:'40px'}}><i class="fas fa-book-reader"></i></span>
          <Typography variant="subtitle2" gutterBottom component="div">
                We Provide Faster <br/> Booking
      </Typography>
      <Typography style={{textAlign:'justify'}} variant="body2" gutterBottom>
      Find Car Dealer Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.
      </Typography>
      </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box style={{backgroundColor:'blue', color:'white', padding:'15px'}}>
          <span style={{fontSize:'40px'}}><i class="fas fa-map-marked-alt"></i></span>
          <Typography variant="subtitle2" gutterBottom component="div">
                You Choose Any <br/> Location
      </Typography>
      <Typography style={{textAlign:'justify'}} variant="body2" gutterBottom>
      Find Car Dealer Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.
      </Typography>
      </Box>
          </Grid>
        </Grid>
      </Box>
        </Container>
    );
};

export default Benefits;