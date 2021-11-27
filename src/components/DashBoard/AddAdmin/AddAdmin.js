import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddAdmin = () => {
    const [email, setEmail] = useState('')
    const [successfull, setSuccesfull] = useState(false)

    const handleEmail = e =>{
        const value = e.target.value;
        setEmail(value)
    }

    const handleAdmin = e =>{
        const user = {email}
        fetch('https://stark-woodland-28823.herokuapp.com/users/admin', {
            method:'PUT',
            headers:{
                'content-type': 'application/json'            
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
           if(data.modifiedCount){
            setSuccesfull(true)
           }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Add Admin</h1>
            <hr/>
            <form onSubmit={handleAdmin}>
            <TextField style={{width:'30%'}}
            id="standard-basic" 
            label="Email"
            onBlur={handleEmail}
            type="email"
            variant="standard" 
            /> <br />
            <Button type='submit' sx={{mt:5}} variant='contained'>Make Admin</Button>
            </form>
            {successfull && <Alert severity="success">Make Admin Succesfully</Alert>}
        </div>
    );
};

export default AddAdmin;