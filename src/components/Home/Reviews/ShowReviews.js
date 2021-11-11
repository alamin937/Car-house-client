import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ShowReviews = (props) => {
    const {Subject, review} = props.review
    return (
        <Grid item xs={12} md={4}>
           <Paper style={{padding:'10px', marginTop:'20px'}} elevation={3}>
           <Typography variant="button" display="block" gutterBottom>
        {Subject}
      </Typography>
      <Typography style={{textAlign:'justify'}} variant="body2" gutterBottom>
       {review}
      </Typography>
           </Paper>
        </Grid>
    );
};

export default ShowReviews;