import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Alert, Button, Typography } from '@mui/material';
import { NavLink ,useHistory, useLocation} from 'react-router-dom';
// import UseHooks from '../../../UseHooks/UseHooks';
import UseAuth from '../../../UseHooks/UseAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {loginUser, error, user} = UseAuth()

    const history = useHistory();
    const location = useLocation()


    const blurLogin = e =>{
        const field = e.target.name;
        const value = e.target.value

        const newLogin = {...loginData}

        newLogin[field] = value;

        setLoginData(newLogin)
    }

    const handleLogin = e =>{

      loginUser(loginData.email,loginData.password,history,location)
        e.preventDefault();
    }





    return (
             <Box style={{marginTop:'100px'}}>
            <Typography sx={{fontWeight:'600'}} variant='h5'>
                   LOGIN
               </Typography>
                <form onSubmit={handleLogin}>
                <TextField style={{width:'30%'}}
               id="standard-basic"
               onBlur={blurLogin}
                label="Email"
                name='email'
                type='email'
                variant="standard" 
             /> <br />
            <TextField style={{width:'30%', marginTop:'40px'}}
               id="standard-basic"
               onBlur={blurLogin}
                label="Password"
                name='password'
                type='password'
             variant="standard" 
             /> <br />
             <Button onClick={handleLogin} sx={{width:'30%', marginTop:'20px'}} type='submit' variant='contained'>Login</Button>
                </form>
                {user?.email && <Alert severity="success">Successfully Register</Alert>}
                <span>{error}</span>
                <Typography>
                    <p>New User Please <NavLink to='/register'>Register</NavLink></p>
                </Typography>
             </Box>
          
    );
};

export default Login;