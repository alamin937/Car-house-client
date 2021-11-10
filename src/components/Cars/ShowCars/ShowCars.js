import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const ShowCars = (props) => {
    const {_id,name,img,description,price} = props.car;
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
     <Typography sx={{pb:2}}>
     <NavLink style={{textDecoration:'none'}} to={`/placeorder/${_id}`}><Button variant='contained'>Purchase</Button></NavLink>
     </Typography>
    </Card>
        </Grid>
    );
};
export default ShowCars;