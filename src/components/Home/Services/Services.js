import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import { Container, Typography } from '@mui/material';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('https://stark-woodland-28823.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setServices(data.slice(1,7)))
    },[])

    return (
        <Container sx={{mt:5}}>
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{mb:4, fontWeight:600}} variant='h4'>
                CARS SERVICES
            </Typography>
      <Grid container spacing={2}>
       {
           services.map(service => <Service service={service}></Service>)
       }
      </Grid>
    </Box>
        </Container>
    );
};

export default Services;