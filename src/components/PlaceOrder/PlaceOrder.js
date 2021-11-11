import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { Alert, CardMedia, Container } from '@mui/material';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';
import UseAuth from '../../UseHooks/UseAuth';
import { NavLink } from 'react-router-dom';


const PlaceOrder = () => {
   const {user} = UseAuth();
   const [successful, setSuccesful] = useState(false)
   const [loads, setLoads] = useState({})
   const {id} = useParams();


   useEffect(() =>{
    const url = `http://localhost:5000/cars/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setLoads(data))
 },[id])


   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => {
    console.log(data)
        fetch('http://localhost:5000/placeorder', {
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            setSuccesful(true)
            reset({ })
          }
        })
   };
    
    return (
     <>
     <Container sx={{mt:5}}>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Card sx={{ minWidth: 200 }}>
          <CardMedia
        component="img"
        height="300"
        image={loads.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div">
        {loads.name}
        </Typography>
        <Typography variant="h6" component="div">
       Price: ${loads.price}
        </Typography>
        <Typography style={{textAlign:'justify'}} sx={{ mb: 1.5 }} color="text.secondary">
         {loads.description}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} style={{width:'50%', marginTop:'10px', padding:'5px'}} {...register("userName")} /> <br />
      <input defaultValue={user.email} style={{width:'50%', marginTop:'10px', padding:'5px'}} {...register("email")} /> <br />
      <input placeholder='Phone Number' style={{width:'50%', marginTop:'10px', padding:'5px'}} {...register("phone")} /> <br />
      <input placeholder='Address' style={{width:'50%', marginTop:'10px', padding:'5px'}} {...register("address")} /> <br />
      <input placeholder='Cars Name' style={{width:'50%', marginTop:'10px', padding:'5px'}} {...register("productName")} /> <br />
      
      <input style={{width:'53%', marginTop:'10px', padding:'10px',backgroundColor:'blue', border:'0', color:'white', fontWeight:'700'}} type="submit" />
    </form>
    {successful && <Alert severity="success">Successfully Added Product</Alert>}
      <NavLink style={{textDecoration:'none'}} to='/home'><Button style={{width:'53%', marginTop:'10px'}} variant='contained'>Back Home</Button></NavLink>
        </Grid>
      </Grid>
    </Box>
     </Container>
     
     


     </>
    );
};

export default PlaceOrder;


{/* <form onSubmit={handlePlaces}>
<TextField style={{width:'60%', marginTop:'20px'}}
id="outlined-size-small"
name='userName'
onBlur={placeBlur}
defaultValue={user.displayName}
size="small"
/>
<br />
<TextField style={{width:'60%', marginTop:'20px'}}
id="outlined-size-small"
name='email'
onBlur={placeBlur}
defaultValue={user.email}
size="small"
/>
<br />
<TextField style={{width:'60%', marginTop:'20px'}}
id="outlined-size-small"
name='phone'
onBlur={placeBlur}
placeholder='Phone Number'
size="small"
/>
<br />
<TextField style={{width:'60%', marginTop:'20px'}}
id="outlined-size-small"
placeholder='Address'
onBlur={placeBlur}
name='address'
size="small"
/>
<br />
<TextField style={{width:'60%', marginTop:'20px'}}
disabled
id="outlined-size-small"

value={loads.name}
size="small"
/>
<br />
<Button type='submit' style={{width:'60%', marginTop:'30px'}} variant='contained'>Place order</Button>
</form> */}