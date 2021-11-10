import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import { Container, Typography } from '@mui/material';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/home')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    // const name = [
    //     {name:'Abarth', img:'https://images.unsplash.com/photo-1620648563434-93a44218917d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80', description:'Abarth & C. S.p.A. is an Italian racing and road car maker and performance division founded by Italo-Austrian Carlo Abarth in 1949.', price:2000},
    //     {name:'Acura', img:'https://images.unsplash.com/photo-1613288832687-364d63e4f2c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80', description:'Acura is the luxury vehicle division of Japanese automaker Honda. The brand was launched in the United States and Canada on 27 March 1986, marketing luxury', price:3000},
    //     {name:'Aston Martin', img:'https://images.unsplash.com/photo-1600415336781-6e65c0591dcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=773&q=80', description:'Aston Martin Lagonda is a British independent manufacturer of luxury sports cars and grand tourers. Its predecessor was ', price:4000},
    //     {name:'Audi', img:'https://images.unsplash.com/photo-1551727324-355cda9f1884?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80', description:'Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group', price:6000},
    //     {name:'BMW', img:'https://images.unsplash.com/photo-1593460354583-4224ab273cfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=773&q=80', description:'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles', price:8000},
    //     {name:'Buick', img:'https://images.unsplash.com/photo-1507722661946-ec4abdfe6a1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=813&q=80', description:'Buick is a division of the American automobile manufacturer General Motors. Started by automotive pioneer David Dunbar Buick, it was among the first American marques of automobiles', price:5000},
    // ]

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