import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';

const ShowReviews = (props) => {
    const {rating, review_sec} = props.review
    return (
        <Grid item xs={12} md={4}>
           <Paper style={{padding:'10px', marginTop:'20px'}} elevation={3}>
           <Typography variant="button" display="block" gutterBottom>
          Rating:  {rating}
      </Typography>
      <Typography style={{textAlign:'justify'}} variant="body2" gutterBottom>
       {review_sec}
      </Typography>
           </Paper>
        </Grid>
    );
};

export default ShowReviews;