import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ShowManageProducts = ({car, setCars,cars}) => {
    const {_id,name,img,description,price} = car



    const handleDelete = id =>{
        const procced = window.confirm('Are You Sure')
        if(procced){
            const url = `https://stark-woodland-28823.herokuapp.com/cars/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Delete Successfully')
                const remaining = cars.filter(car => car._id !== id)
               setCars(remaining)
            }
        })
        }

    }





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
     </Typography>
     <Button onClick={() => handleDelete(_id)} sx={{mb:2}} variant='contained'>Delete</Button>
    </Card>
        </Grid>
    );
};

export default ShowManageProducts;