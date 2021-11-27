import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ShowCars from '../ShowCars/ShowCars';

const Cars = () => {
    const [cars, setCars] = useState([])

    useEffect(() =>{
        fetch('https://stark-woodland-28823.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])

    return (
        <Container sx={{mt:5}}>
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{mb:4, fontWeight:600}} variant='h4'>
               CAR HOUSE
               <hr />
            </Typography>
            
      <Grid container spacing={2}>
       {
           cars.map(car => <ShowCars car={car}></ShowCars>)
       }
      </Grid>
    </Box>
        </Container>
    );
};
export default Cars;