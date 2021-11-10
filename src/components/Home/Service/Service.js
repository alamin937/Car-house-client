import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name,img,description,price} = props.service;
    return (
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
          <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
         {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ${price}
        </Typography>
        <Typography style={{textAlign:'justify'}} variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
    );
};

export default Service;