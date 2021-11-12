import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ShowManageProducts from './ShowManageProducts';


const ManageProducts = () => {
    const [cars, setCars] = useState([])




    useEffect(() =>{
        fetch('https://aqueous-meadow-61451.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid  container spacing={2}>
                {
                    cars.map(car => <ShowManageProducts setCars={setCars} cars={cars} car={car}></ShowManageProducts>)
                }
        </Grid>
      </Box>
    );
};

export default ManageProducts;
