import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Alert, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import UseHooks from '../../../UseHooks/UseHooks';
import UseAuth from '../../../UseHooks/UseAuth';

const Register = () => {
    const {createUser, user,error} = UseAuth()
    const [isLoading, setIsLoading] = useState({})


    const blurField = e =>{
        const field = e.target.name;
        const value = e.target.value;

        const newField = {...isLoading}

        newField[field] = value;

        console.log(newField)

        setIsLoading(newField);
    }



    const handleRegister = e =>{
        createUser(isLoading.email,  isLoading.password, isLoading.name)

        e.preventDefault();
    }

    return (
             <Box style={{marginTop:'100px'}}>
            <Typography sx={{fontWeight:'600'}} variant='h5'>
                   Create An User
               </Typography>
                <form onSubmit={handleRegister}>
                <TextField style={{width:'30%'}}
               id="standard-basic"
                label="Your Name"
                name='name'
                type='name'
                onBlur={blurField}
                variant="standard" 
             /> <br />
                <TextField style={{width:'30%', marginTop:'40px'}}
               id="standard-basic"
               onBlur={blurField}
                label="Email"
                name='email'
                type='email'
               
                variant="standard" 
             /> <br />
            <TextField style={{width:'30%', marginTop:'40px'}}
               id="standard-basic"
               onBlur={blurField}
                label="Password"
                name='password'
                type='password'
             variant="standard" 
             /> <br />
             <Button onClick={handleRegister} sx={{width:'30%', marginTop:'20px'}} type='submit' variant='contained'>Register</Button>
             
                </form>
                {user?.email && <Alert severity="success">Successfully Register</Alert>}
                <span>{error}</span>
                <Typography>
                    <p>Already Register Please <NavLink to='/login'>LogIn</NavLink></p>
                </Typography>
             </Box>
    );
};

export default Register;