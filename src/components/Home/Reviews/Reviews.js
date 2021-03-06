import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ShowReviews from './ShowReviews';
import { Container } from '@mui/material';


const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('https://stark-woodland-28823.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])


    return (
        <Container sx={{mt:5}}>
          <h1 sx={{fontWeight:'600'}}>REVIEW SECTION</h1>
          <hr />
          <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {
              reviews.map(review => <ShowReviews review={review}></ShowReviews>)
          }
        </Grid>
      </Box>
        </Container>
    );
};

export default Reviews;